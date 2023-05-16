import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import NavigationMenu from '@radix-ui/react-navigation-menu';
import { useHeaderContext } from './context';
import { NavDesktopLink } from './NavDesktopLink';
import { NavDesktopTrigger } from './NavDesktopTrigger';

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
  const { desktopData } = useHeaderContext();

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {desktopData &&
          desktopData.map((item) => (
            <NavigationMenuItem key={item.name}>
              {item.menu ? (
                <NavDesktopTrigger key={item.name} item={item} />
              ) : (
                <NavDesktopLink key={item.name} item={item} />
              )}
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
