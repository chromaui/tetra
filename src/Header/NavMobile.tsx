import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { color, spacing } from '../_tokens';
import { useHeaderContext } from './HeaderContext';
import { motion } from 'framer-motion';
import { NavMobileGroup } from './NavMobileGroup';
import { minSm } from '../_helpers';

const NavigationMenu = styled(motion.div)`
  position: fixed;
  background-color: ${color.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  top: 60px;
  border-radius: 6px;
  left: ${spacing[4]};
  right: ${spacing[4]};

  ${minSm} {
    left: auto;
    right: ${spacing[8]};
    min-width: 320px;
  }
`;

const List = styled.div`
  padding: ${spacing[3]} ${spacing[5]};
`;

export const NavMobile: FC = () => {
  const { navMobile } = useHeaderContext();

  return (
    <NavigationMenu
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ ease: 'easeOut', duration: 0.14 }}
    >
      <List>
        {navMobile &&
          navMobile.map((group, i) => {
            const isLast = navMobile.indexOf(group) === navMobile.length - 1;
            return <NavMobileGroup key={i} group={group} isLast={isLast} />;
          })}
      </List>
    </NavigationMenu>
  );
};
