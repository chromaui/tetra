import React, { FC, useEffect, useState } from 'react';
import HeaderContext from './HeaderContext';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { color, spacing } from '../_tokens';
import { Container } from '../Container';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderProps } from './types';
import * as Popover from '@radix-ui/react-popover';
import { minSm } from '../_helpers';

// TODO
// - [ ] Add gridalt icon for the use cases
// - [x] Add new link component to the header
// - [x] Add active state + a story for active state
// - [x] Add height to logo
// - [ ] Add story for mobile menu with Chromatic values
// - [ ] Make the mobile nav accessible with Radix

// - [ ] Find a way to make items clickable
// - [x] Add linkContext
// - [x] Add linkWithWrapper

const Wrapper = styled.div<{ breakpoint?: HeaderProps['breakpoint'] }>`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ breakpoint }) => breakpoint}px) {
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

const MobileTrigger = styled(Popover.Trigger)`
  all: unset;
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 6px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const MobileTriggerLine = styled(motion.div)<{
  headerTheme?: HeaderProps['theme'];
}>`
  position: absolute;
  width: ${spacing[5]};
  height: ${spacing[0.5]};
  border-radius: 6px;
  background-color: ${({ headerTheme }) =>
    headerTheme === 'light' ? color.gray800 : color.white};
`;

const Line1 = styled(MobileTriggerLine)`
  top: 12px;
  left: 10px;
`;

const Line2 = styled(MobileTriggerLine)`
  top: 19px;
  left: 10px;
`;

const Line3 = styled(MobileTriggerLine)`
  top: 26px;
  left: 10px;
`;

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo = 'chromatic',
  navDesktop,
  navMobile,
  breakpoint,
  right,
  triggerType = 'hover',
  activeSection,
}) => {
  const isDesktop = useMediaQuery({ min: breakpoint || 1024 });
  const [active, setActive] = useState<string | null>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileValue, setMobileValue] = useState<string[]>([]);

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
    <HeaderContext.Provider
      value={{
        theme,
        triggerType,
        navDesktop,
        navMobile,
        active,
        setActive,
        mobileMenuOpen,
        setMobileMenuOpen,
        activeSection,
        mobileValue,
        setMobileValue,
      }}
    >
      <Container>
        <Wrapper breakpoint={breakpoint}>
          <Left>
            <LogoLink href="" aria-label="Home">
              <Logo name={logo} height={24} theme={theme} />
            </LogoLink>
            {isDesktop && <NavDesktop />}
          </Left>
          {isDesktop && <Right>{right}</Right>}
          {!isDesktop && (
            <Popover.Root>
              <MobileTrigger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Line1
                  headerTheme={theme}
                  animate={{
                    rotate: mobileMenuOpen ? '-45deg' : 0,
                    y: mobileMenuOpen ? 7 : 0,
                  }}
                />
                <Line2
                  headerTheme={theme}
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    x: mobileMenuOpen ? 4 : 0,
                  }}
                />
                <Line3
                  headerTheme={theme}
                  animate={{
                    rotate: mobileMenuOpen ? '45deg' : 0,
                    y: mobileMenuOpen ? -7 : 0,
                  }}
                />
              </MobileTrigger>
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
    </HeaderContext.Provider>
  );
};
