import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopContent } from './NavDesktopContent';
import { HeaderDesktopItem } from './types';
import { NavigationMenuItem } from './styles';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  position: relative;

  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopTrigger: FC<DesktopItemProps> = ({ item }) => {
  const { theme, active } = useHeaderContext();
  const isActive = active === item.name;

  return (
    <>
      <NavigationMenuTrigger>
        <Text
          as="div"
          lineHeightAuto
          color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
          variant="bodySm"
          fontWeight="bold"
        >
          {item.name}
        </Text>
        <CaretDown>
          <Icon
            name="arrowdown"
            aria-hidden
            size={12}
            color={isActive ? 'blue500' : 'gray400'}
          />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavDesktopContent item={item} />
    </>
  );
};
