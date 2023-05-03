import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { spacing } from '../_tokens';
import { useHeaderContext } from './HeaderContext';
import { NavDesktopContent } from './NavDesktopContent';
import { NavDesktopLink } from './NavDesktopLink';

const NavigationMenu = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  gap: ${spacing[1]};
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  list-style: none;
  margin: 0;
`;

export const NavDesktop: FC = () => {
  const { triggerType, navDesktop, active, setActive } = useHeaderContext();

  return (
    <NavigationMenu
      onMouseLeave={() => triggerType === 'hover' && setActive('')}
      aria-label="Chromatic"
      role="menubar"
    >
      <List role="menubar" aria-label="Chromatic">
        {navDesktop &&
          navDesktop.map((item) => (
            <NavDesktopLink
              isActive={active === item.name}
              name={item.name}
              isMenu={!!item.menu}
              key={item.name}
              onClick={() => {
                if (triggerType === 'click' && item.menu) {
                  if (item.name !== active) setActive(item.name);
                  else setActive('');
                }
              }}
              onMouseEnter={() => {
                if (triggerType === 'hover') {
                  if (item.menu) setActive(item.name);
                }
              }}
            />
          ))}
      </List>
      <NavDesktopContent />
    </NavigationMenu>
  );
};
