import { styled } from '@storybook/theming';
import React, { FC, Fragment, useRef } from 'react';
import { useHeaderContext } from './HeaderContext';
import { AnimatePresence, motion } from 'framer-motion';
import { color, spacing } from '../_tokens';
import { NavDesktopItem } from './NavDesktopItem';
import { NavDesktopSeparator } from './NavDesktopSeparator';

const MenuContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  padding-top: ${spacing[2]};
`;

const MenuWrapper = styled(motion.div)`
  position: relative;
  background-color: ${color.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled(motion.div)`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  overflow: hidden;
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.gray200}` : 'none'};
`;

export const NavDesktopContent: FC = () => {
  const { navDesktop, active } = useHeaderContext();
  const ref = useRef<HTMLDivElement>(null);
  const navWithMenu = navDesktop?.filter((item) => item.menu);
  const activeNav = navWithMenu?.filter((item) => item.name === active);
  const isActive = activeNav && activeNav.length > 0;
  const width = isActive ? activeNav[0].menuWidth : 0;
  const height = isActive ? activeNav[0].menuHeight : 324;
  const leftPos = isActive ? activeNav[0].menuLeftPosition : 0;

  return (
    <AnimatePresence>
      {active && (
        <MenuContainer
          initial={{ opacity: 0, x: leftPos, y: -8, width, height }}
          animate={{ opacity: 1, x: leftPos, y: 0, width, height }}
          exit={{ opacity: 0, x: leftPos, y: -8, width, height }}
          transition={{ duration: 0.2 }}
        >
          <MenuWrapper>
            <AnimatePresence>
              {isActive && (
                <MenuItem
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.2 }}
                  key={activeNav[0].name}
                  ref={ref}
                >
                  {activeNav[0].menu?.map((column, i) => (
                    <Column
                      key={i}
                      bg={column?.backgroundColor || 'white'}
                      index={i}
                    >
                      {column.content.map((content, i) => (
                        <Fragment key={i}>
                          {content.type === 'separator' && (
                            <NavDesktopSeparator title={content.title} />
                          )}
                          {content.type === 'link' && (
                            <NavDesktopItem
                              icon={content.icon}
                              iconColor={content.iconColor}
                              customIcon={content.customIcon}
                              title={content.title}
                              description={content.description}
                            />
                          )}
                        </Fragment>
                      ))}
                    </Column>
                  ))}
                </MenuItem>
              )}
            </AnimatePresence>
          </MenuWrapper>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};
