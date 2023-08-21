import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { HeaderProvider, useHeaderContext } from './context';
import { Logo } from '../Logo';
import { spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { HeaderProps } from './types';
import { minSm } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { resetCSS } from '../_localHelpers/resetCSS';

interface WrapperProps {
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
}

const Wrapper = styled.div<WrapperProps>`
  ${resetCSS}

  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ desktopBreakpoint }) => desktopBreakpoint}px) {
    height: calc(48px + 36px);
  }
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
  display: flex;
  gap: ${spacing[6]};
  align-items: center;
`;

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo,
  logoHeightDesktop,
  logoHeightMobile,
  logoHref,
  logoLinkWrapper,
  desktopData,
  desktopBreakpoint,
  desktopRight,
  desktopActiveId,
  mobileData,
  mobileBottom,
  mobileTop,
}) => {
  return (
    <HeaderProvider
      theme={theme}
      logo={logo}
      logoHeightDesktop={logoHeightDesktop}
      logoHeightMobile={logoHeightMobile}
      logoHref={logoHref}
      logoLinkWrapper={logoLinkWrapper}
      desktopData={desktopData}
      desktopBreakpoint={desktopBreakpoint}
      desktopRight={desktopRight}
      desktopActiveId={desktopActiveId}
      mobileData={mobileData}
      mobileTop={mobileTop}
      mobileBottom={mobileBottom}
    >
      <HeaderWithProvider />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC = () => {
  const {
    theme,
    desktopBreakpoint,
    logo,
    logoHeightDesktop,
    logoHeightMobile,
    logoHref,
    logoLinkWrapper,
    desktopRight,
  } = useHeaderContext();
  const breakpoint = useMediaQuery({ min: desktopBreakpoint || 1024 });
  const isDesktop = breakpoint === true;
  const isMobile = breakpoint === false;

  return (
    <Container>
      <Wrapper desktopBreakpoint={desktopBreakpoint}>
        <Left>
          <LogoLink
            href={logoHref || '/'}
            LinkWrapper={logoLinkWrapper}
            aria-label="Home"
          >
            <Logo
              name={logo || 'chromatic'}
              height={isDesktop ? logoHeightDesktop : logoHeightMobile}
              theme={theme}
            />
          </LogoLink>
          {isDesktop && <NavDesktop />}
        </Left>
        {isDesktop && <Right>{desktopRight}</Right>}
        {isMobile && <NavMobile />}
      </Wrapper>
    </Container>
  );
};
