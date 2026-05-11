import styled from '@emotion/styled';
import React, { FC, useCallback, useMemo } from 'react';
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

  // @radix-ui/react-navigation-menu@1.1.2 renders two FocusGuard spans with
  // aria-hidden="true" + tabindex="0" at the Root level. tabindex="0" makes
  // them keyboard-reachable while aria-hidden hides them from AT, which axe
  // flags as aria-hidden-focus. Patching to tabindex="-1" keeps the sentinel
  // elements reachable via programmatic focus (needed for Radix's logic) but
  // removes them from the natural tab order.
  const rootRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    node
      .querySelectorAll<HTMLSpanElement>('span[aria-hidden="true"][tabindex="0"]')
      .forEach((span) => span.setAttribute('tabindex', '-1'));
  }, []);

  return (
    <NavigationMenuRoot ref={rootRef} delayDuration={100} {...props}>
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
