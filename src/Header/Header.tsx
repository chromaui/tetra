import React, { FC, useEffect } from 'react';
import { HeaderProvider, useHeaderContext } from './context';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { HeaderProps } from './types';
import { minSm } from '../_helpers';
import { LinkWithWrapper } from '../LinkWithWrapper';

// TODO
// - [x] Add new link component to the header
// - [x] Add active state + a story for active state
// - [x] Add height to logo
// - [x] Make the mobile nav accessible with Radix
// - [x] Add linkContext
// - [x] Add linkWithWrapper
// - [x] Add story for mobile menu with Chromatic values
// - [x] Add more padding to the top of the header
// - [x] Burger menu - Try to fit into 18px
// - [x] Give some space on top of the mobile header
// - [x] Add mobileBottom
// - [x] Add mobileTop
// - [x] Make the logo clickage with LinkWithWrapper
// - [x] Separate NavTrigger from NavLink on mobile
// - [x] Reduce padding top on separator desktop
// - [ ] Add gridalt icon for the use cases

interface WrapperProps {
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: calc(60px - ${spacing[3]});
  padding-top: ${spacing[3]};
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ desktopBreakpoint }) => desktopBreakpoint}px) {
    padding-top: 0;
    height: 120px;
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

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    outline: none;
  }

  ${minSm} {
    margin-top: -4px;
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
  logoHref,
  desktopData,
  mobileData,
  desktopBreakpoint,
  desktopRight,
  desktopActive,
  mobileOpen,
  mobileBottom,
  mobileTop,
}) => {
  return (
    <HeaderProvider
      theme={theme}
      logo={logo}
      logoHref={logoHref}
      desktopData={desktopData}
      desktopActive={desktopActive}
      desktopBreakpoint={desktopBreakpoint}
      desktopRight={desktopRight}
      mobileData={mobileData}
      mobileOpen={mobileOpen}
      mobileTop={mobileTop}
      mobileBottom={mobileBottom}
    >
      <HeaderWithProvider />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC = () => {
  const {
    mobileData,
    theme,
    setMobileGroupOpen,
    desktopBreakpoint,
    logo,
    logoHref,
    desktopRight,
  } = useHeaderContext();
  const isDesktop = useMediaQuery({ min: desktopBreakpoint || 1024 });

  useEffect(() => {
    const mobileOpenByDefaultList = mobileData?.filter(
      (item) => item.openByDefault === true
    );
    const mobileDefaultNames = mobileOpenByDefaultList?.map(
      (item) => item.name || ''
    );
    setMobileGroupOpen(mobileDefaultNames || []);
  }, []);

  return (
    <Container>
      <Wrapper desktopBreakpoint={desktopBreakpoint}>
        <Left>
          <LogoLink href={logoHref || '/'} aria-label="Home">
            <Logo name={logo || 'chromatic'} height={24} theme={theme} />
          </LogoLink>
          {isDesktop && <NavDesktop />}
        </Left>
        {isDesktop && <Right>{desktopRight}</Right>}
        {!isDesktop && <NavMobile />}
      </Wrapper>
    </Container>
  );
};
