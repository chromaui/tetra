import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { motion } from 'framer-motion';
import { Trigger } from '@radix-ui/react-popover';
import { color } from '../_tokens';
import { HeaderProps } from './types';
import { useHeaderContext } from './context';

const MobileTrigger = styled(Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const MobileIcon = styled.div`
  position: relative;
  display: flex;
  width: 18px;
  height: 18px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const Line = styled(motion.div)<{
  headerTheme?: HeaderProps['theme'];
  top: number;
}>`
  position: absolute;
  width: 16px;
  height: 1.4px;
  border-radius: 6px;
  top: ${({ top }) => top}px;
  left: 1px;
  background-color: ${({ headerTheme }) =>
    headerTheme === 'light' ? color.gray800 : color.white};
`;

export const NavMobileTrigger: FC = () => {
  const { theme, mobileMenuOpen, setMobileMenuOpen } = useHeaderContext();

  return (
    <MobileTrigger
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle Menu"
    >
      <MobileIcon>
        <Line
          headerTheme={theme}
          top={4}
          animate={{
            rotate: mobileMenuOpen ? '-45deg' : 0,
            y: mobileMenuOpen ? 4.5 : 0,
          }}
        />
        <Line
          headerTheme={theme}
          top={8.5}
          animate={{
            opacity: mobileMenuOpen ? 0 : 1,
            x: mobileMenuOpen ? 4 : 0,
          }}
        />
        <Line
          headerTheme={theme}
          top={13}
          animate={{
            rotate: mobileMenuOpen ? '45deg' : 0,
            y: mobileMenuOpen ? -4.5 : 0,
          }}
        />
      </MobileIcon>
    </MobileTrigger>
  );
};
