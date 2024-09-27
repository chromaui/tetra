import React, { FC } from 'react';
import styled from '@emotion/styled';
import { HeaderProvider, useHeaderContext } from './context';
import { HeaderLogo } from './HeaderLogo';
import { spacing } from '../_tokens';
import { Container, FullWidthContainer } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { HeaderProps } from './types';
import { minSm } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { resetCSS } from '../_localHelpers/resetCSS';
import { Divider } from '../Divider';
import { desktopBreakpoint } from './styles';

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

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo,
  logoHref,
  logoLinkWrapper,
  desktopData,
  desktopRight,
  desktopActiveId,
  mobileData,
  mobileBottom,
  mobileTop,
  fullWidth = false,
}) => {
  return (
    <HeaderProvider
      theme={theme}
      logo={logo}
      logoHref={logoHref}
      logoLinkWrapper={logoLinkWrapper}
      desktopData={desktopData}
      desktopRight={desktopRight}
      desktopActiveId={desktopActiveId}
      mobileData={mobileData}
      mobileTop={mobileTop}
      mobileBottom={mobileBottom}
    >
      <HeaderWithProvider fullWidth={fullWidth} />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC<{
  fullWidth?: boolean;
}> = ({ fullWidth = false }) => {
  const { theme, logoHref, logoLinkWrapper, desktopRight } = useHeaderContext();

  const HeaderContainer = fullWidth ? FullWidthContainer : Container;

  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <Left>
            <LogoLink
              href={logoHref || '/'}
              LinkWrapper={logoLinkWrapper}
              aria-label="Home"
            >
              <HeaderLogo theme={theme} />
            </LogoLink>
            <DesktopOnly>
              <NavDesktop />
            </DesktopOnly>
          </Left>
          <Right>{desktopRight}</Right>
          <MobileOnly>
            <NavMobile />
          </MobileOnly>
        </Wrapper>
      </HeaderContainer>
      <Divider inverse={theme === 'dark'} />
    </>
  );
};
