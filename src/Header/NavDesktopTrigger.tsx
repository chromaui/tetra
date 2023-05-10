import React, { FC } from 'react';
import { css, styled } from '@storybook/theming';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './context';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { NavDesktopContent } from './NavDesktopContent';
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

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopTrigger: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopHover, desktopActive } = useHeaderContext();
  const isActive = desktopHover === item.name || desktopActive === item.name;
  const bgColor = isActive ? 'rgba(30, 167, 253, 0.07)' : 'transparent';

  return (
    <>
      <NavigationMenuTrigger style={{ backgroundColor: bgColor }}>
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
