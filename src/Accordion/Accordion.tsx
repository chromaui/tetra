import React, { FC, useState, forwardRef } from 'react';
import { keyframes, styled } from '@storybook/theming';
import * as Acc from '@radix-ui/react-accordion';
import { color, fontFamily, fontSize, spacing } from '../_tokens';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface AccordionProps {
  children: React.ReactNode | string;
  defaultValue?: string | undefined;
  iconName?: Icons | false;
  iconSize?: number;
  id?: string | undefined;
  inverse?: boolean;
  value?: string;
  triggerCopy?: string;
}

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    // dynamically set height
    height: var(--radix-accordion-content-height);
  }
}`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}`;

// Outermost accordion container
const AccordionWrapper = styled(Acc.Root)<{
  inverse?: boolean;
}>`
  border: 1px solid;
  border-bottom: 0;
  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.slate200};
  border-radius: 5px;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize[16]};
`;

// Wrapper for each accordion item's trigger & content
const Item = styled(Acc.Item)<{
  inverse?: boolean;
}>`
  border-bottom: 1px solid;
  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.slate200};
  flex-flow: column nowrap;
  overflow: hidden;
  padding: ${spacing[4]} ${spacing[8]} ${spacing[2]};

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve-12);
  }
`;

// the button controlling the open/closed state of each item
const Trigger = styled(Acc.Trigger)<{
  inverse?: boolean;
}>`
  align-items: center;
  background: none;
  border: 0;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSize[16]};
  font-weight: 400;
  justify-content: space-between;
  padding: 0;
  padding-bottom: ${spacing[2]};
  transition: all 0.16s ease-in-out;
  width: 100%;

  &:hover,
  &:focus {
    color: ${({ inverse }) => (inverse ? color.slate50 : color.slate700)};
    transform: translateY(-1px);
  }
`;

const StyledIcon = styled(Icon)<{
  inverse?: boolean;
}>`
  fill: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  margin-left: ${spacing[2]};
`;

// the collapsible content of each item
const Panel = styled(Acc.Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

// Wrapper for each accordion item's trigger & content
// expects AccordionTrigger & AccordionPanel as children
// radix requires custom components to have refs passed in
export const AccordionItem = forwardRef<any, AccordionProps>(
  ({ inverse, id = '0', children, ...props }, forwardedRef) => (
    <Item value={id} inverse={inverse} {...props} ref={forwardedRef}>
      {children}
    </Item>
  )
);

AccordionItem.displayName = 'AccordionItem';

// the button controlling the open/closed state of each item
// radix requires custom components to have refs passed in
export const AccordionTrigger = forwardRef<any, AccordionProps>(
  (
    { inverse, iconName = 'arrowdown', iconSize = 14, children, ...props },
    forwardedRef
  ) => (
    <Trigger ref={forwardedRef} inverse={inverse} {...props}>
      {children}
      {iconName && (
        <StyledIcon inverse={inverse} name={iconName} size={iconSize} />
      )}
    </Trigger>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

// the collapsible content of each item
// radix requires custom components to have refs passed in
export const AccordionPanel = forwardRef<any, AccordionProps>(
  ({ inverse, children, ...props }, forwardedRef) => {
    return (
      <Panel ref={forwardedRef} {...props}>
        {children}
      </Panel>
    );
  }
);

AccordionPanel.displayName = 'AccordionPanel';

// Outermost accordion container; expects N <AccordionItem /> as children
export const Accordion: FC<AccordionProps> = ({
  defaultValue,
  inverse,
  children,
  iconName,
  ...props
}) => {
  return (
    <AccordionWrapper
      inverse={inverse}
      type="single"
      collapsible
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </AccordionWrapper>
  );
};
