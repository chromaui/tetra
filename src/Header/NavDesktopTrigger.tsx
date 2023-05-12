import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Icon } from '../Icon/Icon';
import { useHeaderContext } from './context';
import { HeaderDesktopItem } from './types';
import { NavDesktopContent } from './NavDesktopContent';
import { NavigationMenuItem, slideIn, slideOut } from './styles';
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
  background-color: ${({ isActive }) => isActive && 'rgba(30, 167, 253, 0.07)'};
  color: ${({ isActive, theTheme }) => {
    if (isActive) return color.blue500;
    if (theTheme === 'light') return color.gray800;
    return color.white;
  }};

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

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 100%;
  left: 0;
  animation-duration: 2000ms;
  animation-timing-function: ease;

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease;
  }
  &[data-state='closed'] {
    animation: ${slideOut} 200ms ease;
  }
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
      <NavigationMenuContent>
        <NavDesktopContent item={item} />
      </NavigationMenuContent>
    </>
  );
};
