import React, { FC, useEffect } from 'react';
import { HeaderProvider, useHeaderContext } from './context';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderProps } from './types';
import * as Popover from '@radix-ui/react-popover';
import { minSm } from '../_helpers';
import { NavMobileTrigger } from './NavMobileTrigger';

// TODO
// - [x] Add new link component to the header
// - [x] Add active state + a story for active state
// - [x] Add height to logo
// - [x] Make the mobile nav accessible with Radix
// - [x] Add linkContext
// - [x] Add linkWithWrapper
// - [ ] Add story for mobile menu with Chromatic values
// - [ ] Make the logo clickage with LinkWithWrapper
// - [ ] Add gridalt icon for the use cases
// - [ ] Burger menu - Try to fit into 18px

interface WrapperProps {
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ desktopBreakpoint }) => desktopBreakpoint}px) {
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

const LogoLink = styled.a`
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
  navDesktop,
  navMobile,
  desktopBreakpoint,
  right,
  activeSection,
}) => {
  return (
    <HeaderProvider
      theme={theme}
      navDesktop={navDesktop}
      navMobile={navMobile}
      activeSection={activeSection}
      desktopBreakpoint={desktopBreakpoint}
      logo={logo}
      right={right}
    >
      <HeaderWithProvider />
    </HeaderProvider>
  );
};

const HeaderWithProvider: FC = () => {
  const {
    navMobile,
    theme,
    mobileMenuOpen,
    setMobileValue,
    desktopBreakpoint,
    logo,
    right,
  } = useHeaderContext();
  const isDesktop = useMediaQuery({ min: desktopBreakpoint || 1024 });

  useEffect(() => {
    const mobileOpebByDefaultList = navMobile?.filter(
      (item) => item.openByDefault === true
    );
    const mobileDefaultNames = mobileOpebByDefaultList?.map(
      (item) => item.name || ''
    );
    setMobileValue(mobileDefaultNames || []);
  }, []);

  return (
    <Container>
      <Wrapper desktopBreakpoint={desktopBreakpoint}>
        <Left>
          <LogoLink href="" aria-label="Home">
            <Logo name={logo || 'chromatic'} height={24} theme={theme} />
          </LogoLink>
          {isDesktop && <NavDesktop />}
        </Left>
        {isDesktop && <Right>{right}</Right>}
        {!isDesktop && (
          <Popover.Root>
            <NavMobileTrigger />
            <AnimatePresence>
              {mobileMenuOpen && (
                <Popover.Portal forceMount>
                  <NavMobile />
                </Popover.Portal>
              )}
            </AnimatePresence>
          </Popover.Root>
        )}
      </Wrapper>
    </Container>
  );
};
