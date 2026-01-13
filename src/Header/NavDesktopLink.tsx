import React, { FC } from 'react';
import styled from '@emotion/styled';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useHeaderContext } from './context';
import { HeaderDesktopItem } from './types';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { NavigationMenuItem } from './styles';
import { color, fontWeight } from '../_tokens';

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
  color: ${({ isActive, theTheme }) => {
    if (isActive) return theTheme === 'light' ? color.blue700 : color.blue400;
    if (theTheme === 'light') return color.slate800;
    return color.white;
  }};
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopActiveId } = useHeaderContext();
  const isActive = desktopActiveId ? desktopActiveId === item.id : false;

  return (
    <NavigationMenu.Link asChild>
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
