import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from '../_tokens';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export interface DesktopItemProps {
  name: string;
}

const NavigationMenuLink = styled(NavigationMenu.Link)`
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

export const NavDesktopLink: FC<DesktopItemProps> = ({ name }) => {
  const { theme } = useHeaderContext();

  return (
    <NavigationMenuLink href="#">
      <Text
        as="div"
        lineHeightAuto
        // color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
        variant="bodySm"
        fontWeight="bold"
      >
        {name}
      </Text>
    </NavigationMenuLink>
  );
};
