import React, { FC, useState, forwardRef } from 'react';
import { keyframes, styled } from '@storybook/theming';
import * as Acc from '@radix-ui/react-accordion';
import { breakpoint, color, fontFamily, fontSize, spacing } from '../_tokens';
import { minSm, typography } from '../_helpers';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface ItemProps {
  inverse?: boolean | undefined;
  id?: string | undefined;
}

export interface TriggerProps {
  inverse?: boolean | undefined;
  iconName?: Icons | false;
  iconSize?: number;
}

export interface PanelProps {
  inverse?: boolean | undefined;
}

type ItemFC = FC<React.PropsWithChildren<ItemProps>>;
type TriggerFC = FC<React.PropsWithChildren<TriggerProps>>;
type PanelFC = FC<React.PropsWithChildren<PanelProps>>;

export interface AccordionProps {
  children: React.ReactNode | ItemFC | TriggerFC | PanelFC | string;
  defaultValue?: string | undefined;
  iconName?: Icons | false;
  iconSize?: number;
  id?: string | undefined;
  inverse?: boolean | undefined;
  value?: string;
  triggerCopy?: string;
  Item?: React.ElementType;
  Trigger?: React.ElementType;
  Panel?: React.ElementType;
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
  transition: all 0.2s ease-in-out;

  &[data-state='open'] {
    padding-bottom: ${spacing[8]};
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
  ${typography.body16};
  align-items: center;
  background: none;
  border: 0;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: calc(${spacing[4]} + 1px) ${spacing[8]};
  text-align: left;
  transition: all 300ms ease-in-out;
  width: 100%;

  [data-state='open'] & {
    padding-top: ${spacing[8]};
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
`;

// the collapsible content of each item
const Panel = styled(Acc.Content)<{
  inverse?: boolean;
}>`
  ${typography.body16};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  overflow: hidden;
  padding: 0 ${spacing[12]} 0 ${spacing[8]};

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  & > * {
    color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  }
`;

// Wrapper for each accordion item's trigger & content
// expects AccordionTrigger & AccordionPanel as children
// radix requires custom components to have refs passed in
const AccordionItem = forwardRef<any, React.PropsWithChildren<ItemProps>>(
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
const AccordionTrigger = forwardRef<any, React.PropsWithChildren<TriggerProps>>(
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
        />
      )}
    </Trigger>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

// the collapsible content of each item
// radix requires custom components to have refs passed in
const AccordionPanel = forwardRef<any, React.PropsWithChildren<PanelProps>>(
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
export const Accordion: FC<React.PropsWithChildren<AccordionProps>> & {
  Item: React.ElementType;
  Trigger: React.ElementType;
  Panel: React.ElementType;
} = ({ defaultValue, inverse, children, iconName, ...props }) => {
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
