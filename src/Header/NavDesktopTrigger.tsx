import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from '../_tokens';
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
  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const NavigationMenuLink = styled(NavigationMenu.Link)`
  ${NavigationMenuItem}
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

interface ContainerProps {
  type: 'trigger' | 'link';
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ type, children }) => {
  if (type === 'link')
    return <NavigationMenuLink>{children}</NavigationMenuLink>;
  return <NavigationMenuTrigger>{children}</NavigationMenuTrigger>;
};

export const NavDesktopTrigger: FC<DesktopItemProps> = ({ item }) => {
  const { theme, active } = useHeaderContext();
  const isActive = active === item.name;
  const isMenu = item.menu && item.menu.length > 0;

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
        {isMenu && (
          <CaretDown>
            <Icon
              name="arrowdown"
              aria-hidden
              size={12}
              color={isActive ? 'blue500' : 'gray400'}
            />
          </CaretDown>
        )}
      </NavigationMenuTrigger>
      <NavDesktopContent item={item} />
    </>
  );
};
