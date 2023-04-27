import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '../Icon';
import { color } from '../_tokens';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Text } from '../Text';
import { minSm } from '../_helpers';
import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
  scaleIn,
  scaleOut,
} from './keyframes';

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 2px 10px ${color.gray400};
  margin: 0;
`;

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${color.blue500};
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;

  &:focus {
    box-shadow: 0 0 0 2px ${color.blue400};
  }

  &:hover {
    background-color: ${color.blue100};
  }

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg);
  }
`;

const NavigationMenuLink = styled(NavigationMenu.Link)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${color.blue500};
  border: none;
  background-color: transparent;
  display: block;
  text-decoration: none;
  line-height: 1;

  &:focus {
    box-shadow: 0 0 0 2px ${color.blue400};
  }

  &:hover {
    background-color: ${color.blue100};
  }
`;

const CaretDown = styled.div`
  position: relative;
  top: 1px;
  transition: transform 250ms ease;
`;

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }

  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }

  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }

  ${minSm} {
    width: auto;
  }
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

export const Header: FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            <Text as="div" lineHeightAuto>
              Features
            </Text>
            <CaretDown className="CaretDown">
              <Icon name="arrowdown" aria-hidden />
            </CaretDown>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
          </NavigationMenuContent>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            <Text as="div" lineHeightAuto>
              Customers
            </Text>
            <CaretDown className="CaretDown">
              <Icon name="arrowdown" aria-hidden />
            </CaretDown>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
            <Text as="div">Hello World</Text>
          </NavigationMenuContent>
        </NavigationMenu.Item>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};
