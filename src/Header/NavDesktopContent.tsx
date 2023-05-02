import { styled } from '@storybook/theming';
import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
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
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  overflow: hidden;
  width: 620px;
  height: 400px;
`;

const MenuItem = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.gray200}` : 'none'};
`;

export const NavDesktopContent: FC = () => {
  const { navDesktop, active } = useHeaderContext();
  const ref = useRef<HTMLDivElement>(null);
  const navWithMenu = navDesktop && navDesktop.filter((item) => item.menu);
  const isActive = navWithMenu?.filter((item) => item.name === active);
  const activeMenu = isActive && isActive.length > 0 && isActive[0].menu;
  const width = activeMenu ? activeMenu.length * 300 : 0;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      setHeight(height);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <MenuContainer
          initial={{ opacity: 0, y: -8, width, height }}
          animate={{ opacity: 1, y: 0, width, height }}
          exit={{ opacity: 0, y: -8, width, height }}
        >
          <AnimatePresence>
            {activeMenu && (
              <MenuItem
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={isActive[0].name}
                ref={ref}
              >
                {activeMenu?.map((column, i) => (
                  <Column
                    key={i}
                    bg={column?.options?.backgroundColor || 'white'}
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
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};
