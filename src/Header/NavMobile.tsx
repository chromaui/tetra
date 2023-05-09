import { styled } from '@storybook/theming';
import React, { FC, useEffect } from 'react';
import { color, spacing } from '../_tokens';
import { useHeaderContext } from './HeaderContext';
import { motion } from 'framer-motion';
import { NavMobileGroup } from './NavMobileGroup';
import { minSm } from '../_helpers';
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';

const NavigationMenu = styled(motion.div)`
  position: relative;
  background-color: ${color.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  margin-top: ${spacing[2]};
  min-width: calc(100vw - ${spacing[8]});
  margin-right: ${spacing[4]};

  ${minSm} {
    margin-right: ${spacing[8]};
    min-width: 320px;
  }
`;

const PopoverClose = styled(Popover.Close)`
  all: unset;
  position: absolute;
  right: 4px;
  top: -48px;
  width: 40px;
  height: 40px;
  border-radius: 6px;

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  ${minSm} {
    right: 8px;
    top: -48px;
  }
`;

const AccordionRoot = styled(Accordion.Root)`
  padding: ${spacing[3]} ${spacing[3]};
`;

export const NavMobile: FC = () => {
  const {
    navMobile,
    setMobileMenuOpen,
    mobileMenuOpen,
    mobileValue,
    setMobileValue,
  } = useHeaderContext();

  return (
    <Popover.Content asChild>
      <NavigationMenu
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ ease: 'easeOut', duration: 0.14 }}
      >
        {navMobile && (
          <AccordionRoot
            type="multiple"
            value={mobileValue}
            onValueChange={setMobileValue}
          >
            {navMobile.map((group, i) => {
              const isLast = navMobile.indexOf(group) === navMobile.length - 1;
              return (
                <Accordion.Item value={group.name || i.toString()}>
                  <NavMobileGroup key={i} group={group} isLast={isLast} />
                </Accordion.Item>
              );
            })}
          </AccordionRoot>
        )}
        <PopoverClose onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </NavigationMenu>
    </Popover.Content>
  );
};
