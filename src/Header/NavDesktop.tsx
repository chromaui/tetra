import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { useHeaderContext } from './context';
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
  const { desktopData, setDesktopHover } = useHeaderContext();

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {desktopData &&
          desktopData.map((item) => (
            <NavigationMenuItem
              key={item.name}
              onMouseEnter={() => setDesktopHover(item.name)}
              onMouseLeave={() => setDesktopHover('')}
              onFocus={() => setDesktopHover(item.name)}
              onBlur={() => setDesktopHover('')}
            >
              <NavDesktopLink key={item.name} item={item} />
              {item.menu && <NavDesktopContent item={item} />}
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
