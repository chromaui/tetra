import React, { FC, KeyboardEvent } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { useHeaderContext } from './HeaderContext';
import { motion } from 'framer-motion';

export interface DesktopItemProps {
  isActive?: boolean;
  name: string;
  isMenu?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void;
}

const NavigationMenuContainer = styled.li`
  display: flex;
`;

const NavigationButton = styled.button`
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

const CaretDown = styled(motion.div)`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({
  isActive,
  name,
  isMenu,
  onClick,
  onMouseEnter,
}) => {
  const { theme, setActive, active } = useHeaderContext();

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      if (active === name) setActive('');
      else setActive(name);
    }
  };

  return (
    <NavigationMenuContainer
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      role="none"
      onKeyDown={handleKeyDown}
    >
      <NavigationButton
        role="menuitem"
        aria-haspopup={isMenu ? 'true' : 'false'}
        aria-expanded={active === name ? 'true' : 'false'}
        aria-controls={`tab-${name}`}
      >
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
            initial={{ rotate: 0, y: 1 }}
            animate={{ rotate: isActive ? -180 : 0, y: isActive ? 0 : 1 }}
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
      </NavigationButton>
    </NavigationMenuContainer>
  );
};
