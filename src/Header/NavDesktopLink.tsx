import React, { FC } from 'react';
import { css, styled } from '@storybook/theming';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopContent } from './NavDesktopContent';
import { HeaderDesktopItem } from './types';
import { spacing } from '../_tokens';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

export const NavigationMenuItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing[2]};
  outline: none;
  user-select: none;
  border-radius: 4px;
  border: none;
  height: ${spacing[8]};
  background: transparent;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: rgba(30, 167, 253, 0.14);
  }

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
  }
`;

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)<{
  isactive: string;
}>`
  ${NavigationMenuItem}
  background-color: ${(props) =>
    props.isactive === 'true' ? 'rgba(30, 167, 253, 0.07)' : 'transparent'};

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const NavigationMenuLink = styled(NavigationMenu.Link)<{
  isactive: string;
}>`
  ${NavigationMenuItem}
  background-color: ${(props) =>
    props.isactive === 'true' ? 'rgba(30, 167, 253, 0.07)' : 'transparent'};
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, active, activeSection } = useHeaderContext();
  const isActive = active === item.name || activeSection === item.name;

  if (item.menu)
    return (
      <NavigationMenuTrigger isactive={isActive.toString()}>
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
    );

  return (
    <NavigationMenuLink href="#" isactive={isActive.toString()}>
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
