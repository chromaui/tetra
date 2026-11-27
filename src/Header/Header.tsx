import React, { FC } from 'react';
import styled from '@emotion/styled';
import { HeaderProvider } from './context';
import { HeaderLogo } from './HeaderLogo';
import { fontWeight, spacing } from '../_tokens';
import { Container, FullWidthContainer } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { HeaderProps, LinkKeys } from './types';
import { minSm, typography } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { resetCSS } from '../_localHelpers/resetCSS';
import { Divider } from '../Divider';
import {
  compactNavBreakpoint,
  desktopBreakpoint,
  focusRing,
  focusRingStyles,
} from './styles';
import { Link } from '../Link';
import { Button } from '../Button';
import { defaultLinks, HeaderLinksAll } from './data';

const Wrapper = styled.div`
  ${resetCSS}

  position: relative;
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  ${minSm} {
    display: flex;
    align-items: center;
    gap: ${spacing[6]};
  }
`;

const LogoLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'headerTheme',
})<{ headerTheme: HeaderProps['theme'] }>`
  display: block;
  padding: ${spacing[2]};
  font-size: 0;
  border-radius: 6px;
  margin-left: -${spacing[2]};

  ${({ headerTheme }) => focusRing(headerTheme)}
`;

// Contact, Sign in, Sign up and Go to app are Tetra Link and Button anchors,
// which have no focus ring of their own; give them the header's.
const Right = styled.div<{ headerTheme: HeaderProps['theme'] }>`
  display: none;

  a:focus-visible,
  button:focus-visible {
    ${({ headerTheme }) => focusRingStyles(headerTheme)}
  }

  @media (min-width: ${desktopBreakpoint}px) {
    display: flex;
    flex-shrink: 0;
    gap: ${spacing[6]};
    align-items: center;
    white-space: nowrap;
  }

  @media (min-width: ${desktopBreakpoint}px) and (max-width: ${compactNavBreakpoint -
    1}px) {
    gap: ${spacing[4]};
  }
`;

const MobileOnly = styled.div`
  display: contents;

  @media (min-width: ${desktopBreakpoint}px) {
    display: none;
  }
`;
const DesktopOnly = styled.div`
  display: none;

  @media (min-width: ${desktopBreakpoint}px) {
    display: contents;
  }
`;

const HeaderCTAButton = styled(Button)`
  height: ${spacing[8]};
  ${typography.body14};
  font-weight: ${fontWeight.bold};
`;

const DefaultTrackSignUp: FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

export const Header = ({
  theme = 'light',
  links: linkOverrides,
  logoLinkWrapper,
  desktopActiveId,
  fullWidth = false,
  loggedIn,
  maintenanceMode,
  isSticky,
  TrackSignUp = DefaultTrackSignUp,
}: HeaderProps) => {
  const HeaderContainer = fullWidth ? FullWidthContainer : Container;
  const links = Object.entries(defaultLinks).reduce((acc, [key, value]) => {
    acc[key as LinkKeys] = {
      ...value,
      ...linkOverrides[key as LinkKeys],
    };
    return acc;
  }, {} as HeaderLinksAll);

  return (
    <HeaderProvider theme={theme} desktopActiveId={desktopActiveId}>
      <HeaderContainer>
        <Wrapper>
          <Left>
            <LogoLink
              headerTheme={theme}
              href={'/'}
              LinkWrapper={logoLinkWrapper}
              aria-label="Home"
            >
              <HeaderLogo theme={theme} />
            </LogoLink>
            <DesktopOnly>
              <NavDesktop links={links} fullWidth={fullWidth} />
            </DesktopOnly>
          </Left>
          <Right headerTheme={theme}>
            <>
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
              {!loggedIn && (
                <>
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
                  <TrackSignUp>
                    <LinkWithWrapper
                      noAnchor
                      href={links.signup.href}
                      LinkWrapper={links.signup.linkWrapper}
                    >
                      <HeaderCTAButton
                        as="span"
                        size="sm"
                        variant={isSticky ? 'solid' : 'outline'}
                        color={theme === 'light' || isSticky ? 'blue' : 'white'}
                        href={links.signup.href}
                      >
                        {links.signup.title}
                      </HeaderCTAButton>
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
                  <Link
                    inverted={theme === 'dark'}
                    size="md"
                    weight="semibold"
                    rightIcon="arrowrightalt"
                    href={links.signin.href}
                  >
                    Go to app
                  </Link>
                </LinkWithWrapper>
              )}
            </>
          </Right>
          <MobileOnly>
            <NavMobile
              links={links}
              loggedIn={loggedIn}
              maintenanceMode={maintenanceMode}
              TrackSignUp={TrackSignUp}
            />
          </MobileOnly>
        </Wrapper>
      </HeaderContainer>
      <Divider inverse={theme === 'dark'} />
    </HeaderProvider>
  );
};
