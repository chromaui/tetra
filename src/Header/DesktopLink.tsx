import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Text } from '../Text';
import { NavigationMenuItem } from './styles';
import { useHeaderContext } from './HeaderContext';

export interface DesktopLinkProps {
  name: string;
  href: string;
}

const NavigationMenuLink = styled(NavigationMenu.Link)`
  ${NavigationMenuItem}
`;

export const DesktopLink: FC<DesktopLinkProps> = ({ name, href }) => {
  const { theme } = useHeaderContext();

  return (
    <NavigationMenu.Item>
      <NavigationMenuLink href={href}>
        <Text
          as="div"
          lineHeightAuto
          color={theme === 'light' ? 'gray800' : 'white'}
          variant="bodySm"
          fontWeight="bold"
        >
          {name}
        </Text>
      </NavigationMenuLink>
    </NavigationMenu.Item>
  );
};
