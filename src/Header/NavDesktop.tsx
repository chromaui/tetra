import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopTrigger } from './NavDesktopTrigger';
import { NavDesktopLink } from './NavDesktopLink';

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
              {item.menu && <NavDesktopTrigger key={item.name} item={item} />}
              {!item.menu && <NavDesktopLink key={item.name} item={item} />}
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
