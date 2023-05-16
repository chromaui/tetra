import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Link as RadixLink } from '@radix-ui/react-navigation-menu';
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
    if (isActive) return color.blue500;
    if (theTheme === 'light') return color.gray800;
    return color.white;
  }};
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopActive } = useHeaderContext();
  const isActive = desktopActive === item.name;

  return (
    <RadixLink asChild>
      <NavigationMenuLink
        href={item.href || ''}
        LinkWrapper={item.linkWrapper}
        theTheme={theme}
        isActive={isActive}
      >
        {item.name}
      </NavigationMenuLink>
    </RadixLink>
  );
};
