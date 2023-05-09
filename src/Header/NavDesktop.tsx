import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopLink } from './NavDesktopLink';
import { NavDesktopContent } from './NavDesktopContent';

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 9px;
`;

const NavigationMenuItem = styled(NavigationMenu.Item)`
  position: relative;
`;

export const NavDesktop: FC = () => {
  const { navDesktop, setActive } = useHeaderContext();

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {navDesktop &&
          navDesktop.map((item) => (
            <NavigationMenuItem
              key={item.name}
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive('')}
              onFocus={() => setActive(item.name)}
              onBlur={() => setActive('')}
            >
              <NavDesktopLink key={item.name} item={item} />
              {item.menu && <NavDesktopContent item={item} />}
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
