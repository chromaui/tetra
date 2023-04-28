import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC, useState } from 'react';
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
  const [active, setActive] = useState(false);

  return (
    <NavigationMenu.Item
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <NavigationMenuLink href={href}>
        <Text
          as="div"
          lineHeightAuto
          color={active ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
          variant="bodySm"
          fontWeight="bold"
        >
          {name}
        </Text>
      </NavigationMenuLink>
    </NavigationMenu.Item>
  );
};
