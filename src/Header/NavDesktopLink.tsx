import React, { FC } from 'react';
import styled from '@emotion/styled';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useHeaderContext } from './context';
import { HeaderDesktopItem } from './types';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { NavigationMenuItem, navItemColor, navItemHoverColor } from './styles';
import { fontWeight } from '../_tokens';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuLink = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) =>
    propName !== 'theTheme' && propName !== 'isActive',
})<{
  theTheme?: 'light' | 'dark';
  isActive?: boolean;
}>`
  ${NavigationMenuItem}
  background-color: ${({ isActive }) => isActive && 'rgba(30, 167, 253, 0.07)'};
  font-weight: ${fontWeight.bold};
  color: ${({ isActive, theTheme }) =>
    navItemColor({ theme: theTheme, isActive })};

  &:hover {
    color: ${({ theTheme }) => navItemHoverColor(theTheme)};
  }
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopActiveId } = useHeaderContext();
  const isActive = desktopActiveId ? desktopActiveId === item.id : false;

  return (
    // `active` makes Radix set aria-current="page" on the link.
    <NavigationMenu.Link asChild active={isActive}>
      <NavigationMenuLink
        href={item.href || ''}
        LinkWrapper={item.linkWrapper}
        theTheme={theme}
        isActive={isActive}
      >
        {item.name}
      </NavigationMenuLink>
    </NavigationMenu.Link>
  );
};
