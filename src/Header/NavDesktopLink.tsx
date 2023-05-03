import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import { motion } from 'framer-motion';

export interface DesktopItemProps {
  isActive?: boolean;
  name: string;
  isMenu?: boolean;
  onMouseEnter?: () => void;
}

const NavigationMenuTrigger = styled.div`
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
    box-shadow: 0 0 0 2px ${color.blue400};
  }

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
  }

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const CaretDown = styled(motion.div)`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({
  isActive,
  name,
  isMenu,
  ...rest
}) => {
  const { theme } = useHeaderContext();

  return (
    <NavigationMenuTrigger {...rest}>
      <Text
        as="div"
        lineHeightAuto
        color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
        variant="bodySm"
        fontWeight="bold"
      >
        {name}
      </Text>
      {isMenu && (
        <CaretDown
          initial={{ rotate: 0 }}
          animate={{ rotate: isActive ? -180 : 0 }}
          transition={{
            duration: 0.12,
            ease: 'easeInOut',
          }}
        >
          <Icon
            name="arrowdown"
            aria-hidden
            size={12}
            color={isActive ? 'blue500' : 'gray400'}
          />
        </CaretDown>
      )}
    </NavigationMenuTrigger>
  );
};
