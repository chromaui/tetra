import { styled } from '@storybook/theming';
import React, { FC } from 'react';
import { color, spacing } from '../_tokens';
import { useHeaderContext } from './context';
import { AnimatePresence, motion } from 'framer-motion';
import { NavMobileGroup } from './NavMobileGroup';
import { minSm } from '../_helpers';
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';
import { NavMobileTrigger } from './NavMobileTrigger';

const NavigationMenu = styled(motion.div)`
  position: relative;
  background-color: ${color.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  margin-top: ${spacing[2]};
  min-width: calc(100vw - ${spacing[8]});
  margin-right: ${spacing[4]};
  max-height: calc(100vh - 72px);
  overflow-y: scroll;

  ${minSm} {
    margin-right: ${spacing[8]};
    min-width: 320px;
  }
`;

const AccordionRoot = styled(Accordion.Root)`
  padding: ${spacing[3]} ${spacing[3]};
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[5]} ${spacing[5]} 0;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing[5]} ${spacing[5]};
`;

export const NavMobile: FC = () => {
  const {
    mobileData,
    mobileMenuOpen,
    mobileGroupOpen,
    mobileTop,
    mobileBottom,
    setMobileMenuOpen,
    setMobileGroupOpen,
  } = useHeaderContext();

  return (
    <Popover.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <NavMobileTrigger />
      <AnimatePresence>
        {mobileMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content asChild aria-label="Menu">
              <NavigationMenu
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ ease: 'easeOut', duration: 0.14 }}
              >
                {mobileTop && <Top>{mobileTop}</Top>}
                {mobileData && (
                  <AccordionRoot
                    type="multiple"
                    value={mobileGroupOpen}
                    onValueChange={setMobileGroupOpen}
                  >
                    {mobileData.map((group, i) => {
                      const isLast =
                        mobileData.indexOf(group) === mobileData.length - 1;
                      return (
                        <Accordion.Item
                          key={i}
                          value={group.name || i.toString()}
                        >
                          <NavMobileGroup
                            key={i}
                            group={group}
                            isLast={isLast}
                          />
                        </Accordion.Item>
                      );
                    })}
                  </AccordionRoot>
                )}
                {mobileBottom && <Bottom>{mobileBottom}</Bottom>}
              </NavigationMenu>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};
