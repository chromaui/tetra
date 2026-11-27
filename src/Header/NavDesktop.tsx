import styled from '@emotion/styled';
import React, { useCallback, useMemo } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopLink } from './NavDesktopLink';
import { NavDesktopTrigger } from './NavDesktopTrigger';
import { HeaderLinksAll, createDesktopMenu } from './data';
import { compactNavBreakpoint } from './styles';

// Root and pipeline items stay unpositioned so a pipeline menu can be
// positioned against the full header row. Other menus position against
// their own item.
const NavigationMenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  justify-content: center;

  /* Radix wraps the list in an inline position: relative div. */
  > div {
    position: static !important;
  }
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 9px;

  @media (max-width: ${compactNavBreakpoint - 1}px) {
    gap: 2px;
  }
`;

const NavigationMenuItem = styled(NavigationMenu.Item, {
  shouldForwardProp: (propName) => propName !== 'isPipeline',
})<{ isPipeline?: boolean }>`
  position: ${({ isPipeline }) => (isPipeline ? 'static' : 'relative')};
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

  // @radix-ui/react-navigation-menu@1.1.2 renders FocusGuard spans with
  // aria-hidden="true" + tabindex="0", which axe flags as aria-hidden-focus.
  // Patching to tabindex="-1" removes them from the tab order while keeping
  // them reachable via programmatic focus for Radix's internal logic.
  const rootRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    node
      .querySelectorAll<HTMLSpanElement>(
        'span[aria-hidden="true"][tabindex="0"]'
      )
      .forEach((span) => span.setAttribute('tabindex', '-1'));
  }, []);

  return (
    <NavigationMenuRoot ref={rootRef} delayDuration={100} {...props}>
      <NavigationMenuList>
        {desktopLinks &&
          desktopLinks.map((item) => (
            <NavigationMenuItem key={item.name} isPipeline={!!item.pipeline}>
              {item.menu || item.pipeline ? (
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
