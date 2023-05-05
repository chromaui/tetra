import React, { FC, useState } from 'react';
import HeaderContext from './HeaderContext';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { color, spacing } from '../_tokens';
import { Container } from '../Container';
import { IconType } from '../Icon/Icon';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';
import { useMediaQuery } from '../_hooks/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderProps } from './types';

// TODO
// - [ ] Add gridalt icon for the use cases
// - [ ] Find a way to make items clickable

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
  display: flex;
  align-items: center;
  gap: ${spacing[10]};
`;

const Right = styled.div`
  display: flex;
  gap: ${spacing[4]};
  align-items: center;
`;

const MobileTrigger = styled.div`
  position: relative;
  display: flex;
  width: 24px;
  height: 24px;
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
  top: 4px;
  left: 2px;
`;

const Line2 = styled(MobileTriggerLine)`
  top: 11px;
  left: 2px;
`;

const Line3 = styled(MobileTriggerLine)`
  top: 18px;
  left: 2px;
`;

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo = 'chromatic',
  navDesktop,
  navMobile,
  breakpoint,
  right,
  triggerType = 'hover',
}) => {
  const isDesktop = useMediaQuery({ min: breakpoint || 1024 });
  const [active, setActive] = useState<string | null>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const LogoLink = styled.a`
    display: block;
    padding: ${spacing[2]};
    font-size: 0;
    border-radius: 6px;

    &:focus-visible {
      box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
      outline: none;
    }
  `;

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
      }}
    >
      <Container>
        <Wrapper breakpoint={breakpoint}>
          <Left role="none">
            <LogoLink href="" aria-label="Logo">
              <Logo name={logo} width={140} theme={theme} />
            </LogoLink>
            {isDesktop && <NavDesktop />}
            <AnimatePresence>
              {!isDesktop && mobileMenuOpen && <NavMobile />}
            </AnimatePresence>
          </Left>
          {isDesktop && <Right>{right}</Right>}
          {!isDesktop && (
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
          )}
        </Wrapper>
      </Container>
    </HeaderContext.Provider>
  );
};
