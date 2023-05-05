import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { NavigationMenuItem } from './styles';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuLink = styled(NavigationMenu.Link)`
  ${NavigationMenuItem}
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, active } = useHeaderContext();
  const isActive = active === item.name;

  return (
    <NavigationMenuLink href="#">
      <Text
        as="div"
        lineHeightAuto
        color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
        variant="bodySm"
        fontWeight="bold"
      >
        {item.name}
      </Text>
    </NavigationMenuLink>
  );
};
