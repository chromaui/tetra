import React, { FC } from 'react';
import { css, styled } from '@storybook/theming';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { spacing } from '../_tokens';
import { LinkWithWrapper } from '../LinkWithWrapper';

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

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const NavigationMenuLink = styled(LinkWithWrapper)`
  ${NavigationMenuItem}
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, active, activeSection } = useHeaderContext();
  const isActive = active === item.name || activeSection === item.name;
  const bgColor = isActive ? 'rgba(30, 167, 253, 0.07)' : 'transparent';

  if (item.menu)
    return (
      <NavigationMenuTrigger style={{ backgroundColor: bgColor }}>
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
    <NavigationMenu.Link asChild>
      <NavigationMenuLink
        href={item.href || ''}
        LinkWrapper={item.linkWrapper}
        style={{ backgroundColor: bgColor }}
      >
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
    </NavigationMenu.Link>
  );
};
