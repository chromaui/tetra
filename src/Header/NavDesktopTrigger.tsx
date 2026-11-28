import React, { FC } from 'react';
import styled from '@emotion/styled';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Icon } from '../Icon/Icon';
import { useHeaderContext } from './context';
import { HeaderDesktopItem } from './types';
import { NavDesktopContent } from './NavDesktopContent';
import { NavDesktopPipeline } from './NavDesktopPipeline';
import {
  focusRing,
  NavigationMenuItem,
  navItemColor,
  navItemHoverColor,
  slideIn,
  slideOut,
} from './styles';

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
  color: ${({ isActive, theTheme }) =>
    navItemColor({ theme: theTheme, isActive })};

  &:hover {
    color: ${({ theTheme }) => navItemHoverColor(theTheme)};
  }

  &[data-state='open'] {
    color: ${({ theTheme }) => navItemHoverColor(theTheme)};
  }

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }

  ${({ theTheme }) => focusRing(theTheme)}
`;

// The pipeline menu is positioned against the header row (see Header's
// Wrapper). It starts at the bottom of the trigger and uses
// padding to cover the gap so the pointer can travel into it.
const NavigationMenuPipelineContent = styled.div`
  position: absolute;
  top: 52px;
  /* Centred on the header row; may extend past the container edges, but
     keeps 20px from the viewport. */
  left: calc(50% - min(565px, 50vw - 20px));
  width: min(1130px, calc(100vw - 40px));
  padding-top: 26px;
  z-index: 100;

  &[data-state='open'] {
    animation: ${slideIn} 100ms ease;
  }
  &[data-state='closed'] {
    animation: ${slideOut} 100ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state='open'],
    &[data-state='closed'] {
      animation: none;
    }
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
  z-index: 100;
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
      <NavigationMenuTrigger
        theTheme={theme}
        isActive={isActive}
        // The current page sits inside this menu, so mark the trigger itself.
        aria-current={isActive ? 'true' : undefined}
      >
        {item.name}
        <CaretDown className="CaretDown">
          <Icon name="arrowdown" aria-hidden size={12} />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavigationMenu.Content asChild>
        {item.pipeline ? (
          <NavigationMenuPipelineContent>
            <NavDesktopPipeline pipeline={item.pipeline} />
          </NavigationMenuPipelineContent>
        ) : (
          <NavigationMenuContent leftPosition={item.leftPosition}>
            <NavDesktopContent item={item} />
          </NavigationMenuContent>
        )}
      </NavigationMenu.Content>
    </>
  );
};
