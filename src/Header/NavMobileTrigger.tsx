import React, { FC, useState } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';
import { motion } from 'framer-motion';
import { HeaderProps } from './types';
import * as Popover from '@radix-ui/react-popover';

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

export const NavMobileTrigger: FC<HeaderProps> = ({ theme = 'light' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <MobileTrigger
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle Menu"
    >
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
  );
};
