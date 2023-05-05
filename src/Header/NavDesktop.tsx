import { styled } from '@storybook/theming';
import React, { FC, useEffect, useState } from 'react';
import { useHeaderContext } from './HeaderContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavDesktopTrigger } from './NavDesktopTrigger';
import { motion } from 'framer-motion';
import { scaleIn, scaleOut } from './styles';
import { NavDesktopLink } from './NavDesktopLink';

const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ViewportPosition = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
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

  @media only screen and (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  }
`;

export const NavDesktop: FC = () => {
  const { navDesktop, active, setActive } = useHeaderContext();
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    const findActive = navDesktop?.find((item) => item.name === active);
    if (findActive?.menuLeftPosition || findActive?.menuLeftPosition === 0) {
      setLeftPosition(findActive.menuLeftPosition);
    }
  }, [active]);

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        {navDesktop &&
          navDesktop.map((item) => (
            <NavigationMenu.Item
              key={item.name}
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive('')}
              onFocus={() => setActive(item.name)}
              onBlur={() => setActive('')}
            >
              {item.menu && <NavDesktopTrigger key={item.name} item={item} />}
              {!item.menu && <NavDesktopLink key={item.name} item={item} />}
            </NavigationMenu.Item>
          ))}
      </NavigationMenuList>
      <ViewportPosition
        animate={{
          x: leftPosition,
        }}
        transition={{
          duration: 0.2,
          bounce: 0.2,
        }}
      >
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};
