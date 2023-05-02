import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@storybook/theming';
import React, { FC, ReactNode } from 'react';
import { spacing } from '../_tokens';
import { minSm } from '../_helpers';
import { scaleIn, scaleOut } from './styles';

export interface DesktopProps {
  children: ReactNode;
}

const NavigationMenuRoot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: ${spacing[1]};
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  list-style: none;
  margin: 0;
`;

const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${scaleIn} 200ms ease;
  }
  &[data-state='closed'] {
    animation: ${scaleOut} 200ms ease;
  }

  ${minSm} {
    width: var(--radix-navigation-menu-viewport-width);
  }
`;

export const Desktop: FC<DesktopProps> = ({ children }) => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>{children}</NavigationMenuList>
      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};
