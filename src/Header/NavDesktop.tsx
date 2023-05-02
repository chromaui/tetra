import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { spacing } from '../_tokens';
import { NavigationMenuItem } from './styles';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { useHeaderContext } from './HeaderContext';
import { motion } from 'framer-motion';
import { NavDesktopContent } from './NavDesktopContent';

const NavigationMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const List = styled.div`
  display: flex;
  gap: ${spacing[1]};
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  list-style: none;
  margin: 0;
`;

const NavigationMenuTrigger = styled.div`
  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const CaretDown = styled(motion.div)`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

export const NavDesktop: FC = () => {
  const { theme, navDesktop, active, setActive } = useHeaderContext();

  return (
    <NavigationMenu onMouseLeave={() => setActive(null)}>
      <List>
        {navDesktop &&
          navDesktop.map((item) => {
            const isActive = active === item.name;

            return (
              <NavigationMenuTrigger
                key={item.name}
                onMouseEnter={() =>
                  item.menu ? setActive(item.name) : setActive(null)
                }
              >
                <Text
                  as="div"
                  lineHeightAuto
                  color={
                    isActive
                      ? 'blue500'
                      : theme === 'light'
                      ? 'gray800'
                      : 'white'
                  }
                  variant="bodySm"
                  fontWeight="bold"
                >
                  {item.name}
                </Text>
                {item.menu && (
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
          })}
      </List>
      <NavDesktopContent />
    </NavigationMenu>
  );
};
