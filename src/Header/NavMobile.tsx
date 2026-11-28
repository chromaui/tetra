import styled from '@emotion/styled';
import React, { useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Popover from '@radix-ui/react-popover';
import { color, spacing } from '../_tokens';
import { useHeaderContext } from './context';
import { minSm } from '../_helpers';
import { NavMobileTrigger } from './NavMobileTrigger';
import { NavMobileSection } from './NavMobileSection';
import { resetCSS } from '../_localHelpers/resetCSS';
import { createMobileMenu, HeaderLinks } from './data';
import { HeaderProps } from './types';
import { desktopBreakpoint, focusRingStyles } from './styles';
import { Button } from '../Button';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { Link } from '../Link';
import { HStack } from '../Stack';

const NavigationMenu = styled(motion.div)`
  ${resetCSS}

  position: relative;
  background-color: ${color.white};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  margin-top: ${spacing[2]};
  min-width: calc(100vw - 32px);
  margin-left: ${spacing[4]};
  margin-right: ${spacing[4]};
  padding: 12px;
  z-index: 100;
  max-height: calc(100vh - ${spacing[20]});
  overflow-y: auto;

  ${minSm} {
    margin-right: ${spacing[12]};
    min-width: 320px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[5]} ${spacing[5]} 0;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[3]} ${spacing[2]} ${spacing[3]} ${spacing[2]};

  a:focus-visible,
  button:focus-visible {
    ${focusRingStyles('light')}
  }
`;

// Contact and Sign in on the header bar are Tetra Links, which have no focus
// ring of their own; give them the header's.
const BarLinks = styled.div<{ headerTheme: HeaderProps['theme'] }>`
  display: contents;

  a:focus-visible {
    ${({ headerTheme }) => focusRingStyles(headerTheme)}
  }
`;

const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const SignInWrapper = styled.div`
  display: none;

  @media (min-width: 400px) {
    display: contents;
  }
`;

const menuVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0 },
  // `instant` is true when the menu closes because the viewport grew to
  // desktop: the desktop header is already showing, so fading the menu out
  // over it would flash.
  exit: (instant: boolean) =>
    instant
      ? { opacity: 0, transition: { duration: 0 } }
      : { opacity: 0, y: -8 },
};

interface NavMobileProps {
  links: HeaderLinks;
  loggedIn?: boolean;
  maintenanceMode?: boolean;
  TrackSignUp: HeaderProps['TrackSignUp'];
}

export const NavMobile = ({
  links,
  loggedIn,
  maintenanceMode,
  TrackSignUp,
}: NavMobileProps) => {
  const { theme, mobileMenuOpen, setMobileMenuOpen } = useHeaderContext();

  const mobileLinks = useMemo(() => createMobileMenu(links), [links]);

  // Set when the menu closes because the viewport reached the desktop
  // breakpoint, where the trigger is display: none.
  const closedByResize = useRef(false);

  useEffect(() => {
    if (mobileMenuOpen) closedByResize.current = false;
  }, [mobileMenuOpen]);

  // The mobile header is hidden with CSS at the desktop breakpoint, but the
  // popover is portalled to <body>, so close it when the viewport gets there.
  // Growing back below the breakpoint leaves it closed.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const query = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`);
    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      closedByResize.current = true;
      setMobileMenuOpen(false);
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [setMobileMenuOpen]);

  return (
    <Popover.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <BarLinks headerTheme={theme}>
        <HStack gap={6}>
          <LinkWithWrapper
            noAnchor
            href={links.sales.href}
            LinkWrapper={links.sales.linkWrapper}
          >
            <Link
              href={links.sales.href}
              size="md"
              weight="semibold"
              color={theme === 'dark' ? 'white' : 'blue600'}
            >
              Contact
            </Link>
          </LinkWithWrapper>
          <SignInWrapper>
            {!maintenanceMode && (
              <LinkWithWrapper
                noAnchor
                href={links.signin.href}
                LinkWrapper={links.signin.linkWrapper}
              >
                <Link
                  href={links.signin.href}
                  size="md"
                  weight="semibold"
                  color={theme === 'dark' ? 'white' : 'blue600'}
                >
                  {links.signin.title}
                </Link>
              </LinkWithWrapper>
            )}
          </SignInWrapper>
          <NavMobileTrigger />
        </HStack>
      </BarLinks>
      <AnimatePresence custom={closedByResize.current}>
        {mobileMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content
              asChild
              aria-label="Menu"
              onOpenAutoFocus={(e) => e.preventDefault()}
              // Radix returns focus to the trigger on close, but after a resize
              // to desktop the trigger is hidden; leave focus on <body>.
              onCloseAutoFocus={(e) => {
                if (closedByResize.current) e.preventDefault();
              }}
            >
              <NavigationMenu
                variants={menuVariants}
                custom={closedByResize.current}
                initial="closed"
                animate="open"
                exit="exit"
                transition={{ ease: 'easeOut', duration: 0.14 }}
              >
                {mobileLinks &&
                  mobileLinks.map((section, i) => {
                    const index = mobileLinks.indexOf(section);
                    const isLast = index === mobileLinks.length - 1;

                    return (
                      <NavMobileSection
                        key={i}
                        section={section}
                        isLast={isLast}
                      />
                    );
                  })}
                <Bottom>
                  <MobileButtons>
                    {!loggedIn && (
                      <>
                        {!maintenanceMode && (
                          <LinkWithWrapper
                            noAnchor
                            href={links.signin.href}
                            LinkWrapper={links.signin.linkWrapper}
                          >
                            <Button size="sm" variant="outline" color="blue">
                              {links.signin.title}
                            </Button>
                          </LinkWithWrapper>
                        )}
                        <TrackSignUp>
                          <LinkWithWrapper
                            noAnchor
                            href={links.signup.href}
                            LinkWrapper={links.signup.linkWrapper}
                          >
                            <Button
                              size="sm"
                              variant="solid"
                              color="blue"
                              href={links.signup.href}
                            >
                              {links.signup.title}
                            </Button>
                          </LinkWithWrapper>
                        </TrackSignUp>
                      </>
                    )}
                    {loggedIn && !maintenanceMode && (
                      <LinkWithWrapper
                        noAnchor
                        href={links.signin.href}
                        LinkWrapper={links.signin.linkWrapper}
                      >
                        <Button
                          size="sm"
                          color="blue"
                          rightIcon="arrowrightalt"
                          href={links.signin.href}
                        >
                          Go to app
                        </Button>
                      </LinkWithWrapper>
                    )}
                  </MobileButtons>
                </Bottom>
              </NavigationMenu>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};
