import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Icon } from '../Icon';
import { color } from '../_tokens';
import { motion, AnimatePresence } from 'framer-motion';

export interface PopoverProps {
  children: ReactNode;
  trigger: ReactNode;
  close?: boolean;
}

const PopoverContent = styled(PopoverPrimitive.Content)`
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

const PopoverArrow = styled(PopoverPrimitive.Arrow)`
  fill: white;
`;

const PopoverClose = styled(PopoverPrimitive.Close)`
  border-radius: 100%;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 0;
  background-color: transparent;

  &:hover {
    background-color: ${color.gray100};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${color.blue200};
  }
`;

export const Popover: FC<PopoverProps> = ({
  children,
  trigger,
  close = false,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <PopoverPrimitive.Portal forceMount>
              <PopoverContent asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {children}
                  {close && (
                    <PopoverClose aria-label="Close">
                      <Icon name="cross" />
                    </PopoverClose>
                  )}
                  <PopoverArrow />
                </motion.div>
              </PopoverContent>
            </PopoverPrimitive.Portal>
          )}
        </AnimatePresence>
        <PopoverPrimitive.Anchor />
      </PopoverPrimitive.Root>
    </div>
  );
};
