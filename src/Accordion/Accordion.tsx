import React, { FC, useState, forwardRef } from 'react';
import { keyframes, styled } from '@storybook/theming';
import * as Acc from '@radix-ui/react-accordion';
import { breakpoint, color, fontFamily, fontSize, spacing } from '../_tokens';
import { minSm, typography } from '../_helpers';
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
  ${typography.body16};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
`;

// Wrapper for each accordion item's trigger & content
const Item = styled(Acc.Item)<{
  inverse?: boolean;
}>`
  border: 1px solid;
  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.blackTr10};
  border-bottom: 0;
  flex-flow: column nowrap;
  overflow: hidden;
  padding: ${spacing[2]} ${spacing[4]};
  transition: all 0.2s ease-in-out;

  ${minSm} {
    padding: ${spacing[2]} ${spacing[8]};
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-of-type {
    border-bottom: 1px solid;
    border-bottom-color: ${({ inverse }) =>
      inverse ? color.whiteTr10 : color.blackTr10};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:focus-within,
  &:hover {
    outline: none;
    border-color: ${color.blue500};
  }

  &:hover + &,
  &:focus-within + & {
    border-top-color: ${color.blue500};
  }
`;

// the button controlling the open/closed state of each item
const Trigger = styled(Acc.Trigger)<{
  inverse?: boolean;
}>`
  ${typography.body14};
  align-items: start;
  background: none;
  border: 0;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: ${spacing[2]} 0;
  text-align: left;
  transition: all 0.16s ease-in-out;
  width: 100%;

  ${minSm} {
    ${typography.body16};
    align-items: center;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(Icon)<{
  inverse?: boolean;
}>`
  fill: currentColor;
  flex-basis: ${spacing[4]};
  flex-shrink: 0;
  margin-left: ${spacing[5]};

  ${minSm} {
    margin-left: ${spacing[4]};
  }
`;

// the collapsible content of each item
const Panel = styled(Acc.Content)<{
  inverse?: boolean;
}>`
  ${typography.body14};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  & > * {
    ${typography.body14};
    color: ${({ inverse }) => (inverse ? color.white : color.slate800)};

    ${minSm} {
      ${typography.body16};
    }
  }
`;

// Wrapper for each accordion item's trigger & content
// expects AccordionTrigger & AccordionPanel as children
// radix requires custom components to have refs passed in
const AccordionItem = forwardRef<any, AccordionProps>(
  ({ inverse, id = '0', children, ...props }, forwardedRef) => (
    <Item
      value={id}
      inverse={inverse}
      {...props}
      ref={forwardedRef}
      className="accordion-item"
    >
      {children}
    </Item>
  )
);

AccordionItem.displayName = 'AccordionItem';

// the button controlling the open/closed state of each item
// radix requires custom components to have refs passed in
const AccordionTrigger = forwardRef<any, AccordionProps>(
  (
    { inverse, iconName = 'arrowdown', iconSize = 14, children, ...props },
    forwardedRef
  ) => (
    <Trigger ref={forwardedRef} inverse={inverse} {...props}>
      {children}
      {iconName && (
        <StyledIcon
          aria-hidden="true"
          inverse={inverse}
          name={iconName}
          size={iconSize}
          tabIndex={-1}
        />
      )}
    </Trigger>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

// the collapsible content of each item
// radix requires custom components to have refs passed in
const AccordionPanel = forwardRef<any, AccordionProps>(
  ({ inverse, children, ...props }, forwardedRef) => {
    return (
      <Panel inverse={inverse} ref={forwardedRef} {...props}>
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

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Panel = AccordionPanel;
