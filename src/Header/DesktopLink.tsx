import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Text } from '../Text';
import { NavigationMenuItem } from './styles';

export interface DesktopLinkProps {
  name: string;
  href: string;
}

const NavigationMenuLink = styled(NavigationMenu.Link)`
  ${NavigationMenuItem}
`;

export const DesktopLink: FC<DesktopLinkProps> = ({ name, href }) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenuLink href={href}>
        <Text
          as="div"
          lineHeightAuto
          // color={theme === 'light' ? 'gray800' : 'white'}
          color="white"
          variant="bodySm"
          fontWeight="bold"
        >
          {name}
        </Text>
      </NavigationMenuLink>
    </NavigationMenu.Item>
  );
};
