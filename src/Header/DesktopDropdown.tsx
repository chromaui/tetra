import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC, ReactNode, useState } from 'react';
import { Text } from '../Text';
import { styled } from '@storybook/theming';
import {
  NavigationMenuItem,
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
} from './styles';
import { Icon } from '../Icon';
import { minSm } from '../_helpers';
import { useHeaderContext } from './HeaderContext';

export interface DesktopDropdownProps {
  children: ReactNode;
  name: string;
}

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  display: flex;
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

export const DesktopDropdown: FC<DesktopDropdownProps> = ({
  children,
  name,
}) => {
  const { theme } = useHeaderContext();
  const [active, setActive] = useState(false);

  return (
    <NavigationMenu.Item
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <NavigationMenuTrigger>
        <Text
          as="div"
          lineHeightAuto
          color={active ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
          variant="bodySm"
          fontWeight="bold"
        >
          {name}
        </Text>
        <CaretDown className="CaretDown">
          <Icon
            name="arrowdown"
            aria-hidden
            size={12}
            color={active ? 'blue500' : 'gray400'}
          />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenu.Item>
  );
};
