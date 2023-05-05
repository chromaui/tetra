import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopContent } from './NavDesktopContent';
import { HeaderDesktopItem } from './Header';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
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
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
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
  const { theme } = useHeaderContext();

  return (
    <>
      <NavigationMenuTrigger>
        <Text
          as="div"
          lineHeightAuto
          // color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
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
            // color={isActive ? 'blue500' : 'gray400'}
          />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavDesktopContent item={item} />
    </>
  );
};
