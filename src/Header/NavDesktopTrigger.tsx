import React, { FC } from 'react';
import styled from '@emotion/styled';
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
    if (isActive) return theTheme === 'light' ? color.blue700 : color.blue500;
    if (theTheme === 'light') return color.slate800;
    return color.white;
  }};

  &[data-state='open'] {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${({ theTheme }) =>
      theTheme === 'light' ? color.blue700 : color.blue500};
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

const NavigationMenuContent = styled.div<{
  leftPosition?: number;
}>`
  position: absolute;
  top: 100%;
  left: ${({ leftPosition }) => leftPosition || 0}px;
  animation-duration: 2000ms;
  animation-timing-function: ease;

  &[data-state='open'] {
    animation: ${slideIn} 100ms ease;
  }
  &[data-state='closed'] {
    animation: ${slideOut} 100ms ease;
  }
`;

export const NavDesktopTrigger: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopActiveId } = useHeaderContext();
  const isActive = desktopActiveId ? desktopActiveId === item.id : false;

  return (
    <>
      <NavigationMenuTrigger theTheme={theme} isActive={isActive}>
        {item.name}
        <CaretDown className="CaretDown">
          <Icon name="arrowdown" aria-hidden size={12} />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavigationMenu.Content asChild>
        <NavigationMenuContent leftPosition={item.leftPosition}>
          <NavDesktopContent item={item} />
        </NavigationMenuContent>
      </NavigationMenu.Content>
    </>
  );
};
