import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '../Icon/Icon';
import { useHeaderContext } from './context';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { NavDesktopContent } from './NavDesktopContent';
import { NavigationMenuItem } from './styles';
import { color } from '../_tokens';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  shouldForwardProp: (propName) =>
    propName !== 'theTheme' && propName !== 'isActive',
})<{
  theTheme?: 'light' | 'dark';
  isActive?: boolean;
}>`
  ${NavigationMenuItem}

  &[data-state='open'] {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${color.blue500};
  }

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
  const { theme, desktopActive } = useHeaderContext();
  const isActive = desktopActive === item.name;

  return (
    <>
      <NavigationMenuTrigger theTheme={theme} isActive={isActive}>
        {item.name}
        <CaretDown className="CaretDown">
          <Icon name="arrowdown" aria-hidden size={12} />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavDesktopContent item={item} />
    </>
  );
};
