import React, { FC } from 'react';
import styled from '@emotion/styled';
import { HeaderProvider } from './context';
import { HeaderLogo } from './HeaderLogo';
import { fontWeight, spacing } from '../_tokens';
import { Container, FullWidthContainer } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { HeaderProps } from './types';
import { minSm, typography } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { resetCSS } from '../_localHelpers/resetCSS';
import { Divider } from '../Divider';
import { desktopBreakpoint } from './styles';
import { Link } from '../Link';
import { Button } from '../Button';

const Wrapper = styled.div`
  ${resetCSS}

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

const LogoLink = styled(LinkWithWrapper)`
  display: block;
  padding: ${spacing[2]};
  font-size: 0;
  border-radius: 6px;
  margin-left: -${spacing[2]};

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    outline: none;
  }
`;

const Right = styled.div`
  display: none;

  @media (min-width: ${desktopBreakpoint}px) {
    display: flex;
    gap: ${spacing[6]};
    align-items: center;
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
  links,
  logoLinkWrapper,
  desktopActiveId,
  fullWidth = false,
  loggedIn,
  maintenanceMode,
  TrackSignUp = DefaultTrackSignUp,
}: HeaderProps) => {
  const HeaderContainer = fullWidth ? FullWidthContainer : Container;

  return (
    <HeaderProvider theme={theme} desktopActiveId={desktopActiveId}>
      <HeaderContainer>
        <Wrapper>
          <Left>
            <LogoLink
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
          <Right>
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
                  color={theme === 'dark' ? 'white' : 'blue500'}
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
                        color={theme === 'dark' ? 'white' : 'blue500'}
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
                        variant="outline"
                        color={theme === 'dark' ? 'white' : 'blue'}
                        href={links.signup.href}
                      >
                        {links.signup.title}
                      </HeaderCTAButton>
                    </LinkWithWrapper>
                  </TrackSignUp>
                </>
              )}
              {loggedIn && !maintenanceMode && (
                <LinkWithWrapper href={links.signin.href}>
                  <Link
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
