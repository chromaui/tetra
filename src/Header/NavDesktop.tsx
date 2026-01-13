import styled from '@emotion/styled';
import React, { FC, useMemo } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopLink } from './NavDesktopLink';
import { NavDesktopTrigger } from './NavDesktopTrigger';
import { HeaderLinksAll, createDesktopMenu } from './data';

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 100;
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

interface NavDesktopProps {
  links: HeaderLinksAll;
  fullWidth?: boolean;
}

export const NavDesktop = ({ links, fullWidth, ...props }: NavDesktopProps) => {
  const desktopLinks = useMemo(
    () => createDesktopMenu(links, fullWidth),
    [links, fullWidth]
  );

  return (
    <NavigationMenuRoot delayDuration={100} {...props}>
      <NavigationMenuList>
        {desktopLinks &&
          desktopLinks.map((item) => (
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
