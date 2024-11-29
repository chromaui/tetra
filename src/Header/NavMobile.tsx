import styled from '@emotion/styled';
import React, { FC, useMemo } from 'react';
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

  return (
    <Popover.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
            color={theme === 'dark' ? 'white' : 'blue500'}
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
                color={theme === 'dark' ? 'white' : 'blue500'}
              >
                {links.signin.title}
              </Link>
            </LinkWithWrapper>
          )}
        </SignInWrapper>
        <NavMobileTrigger />
      </HStack>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content
              asChild
              aria-label="Menu"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <NavigationMenu
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
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
