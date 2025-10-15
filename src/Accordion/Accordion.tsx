import React, { FC, forwardRef } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import * as Acc from '@radix-ui/react-accordion';
import { color, spacing, fontWeight } from '../_tokens';
import { minSm, typography } from '../_helpers';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface ItemProps {
  inverse?: boolean;
  id?: string | undefined;
}

export interface TriggerProps {
  inverse?: boolean;
  iconName?: Icons | false;
  iconSize?: number;
}

export interface PanelProps {
  inverse?: boolean;
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
  inverse?: boolean;
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
`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

// Outermost accordion container
const AccordionWrapper = styled.div<{ inverse?: boolean }>`
  ${typography.body16};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  width: 100%;
`;

// Wrapper for each accordion item's trigger & content
const Item = styled.div<{ inverse?: boolean }>`
  border: 1px solid;
  border-color: ${({ inverse }) =>
    inverse ? color.whiteTr10 : color.blackTr10};
  border-bottom: 0;
  flex-flow: column nowrap;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &[data-state='open'] {
    padding-bottom: ${spacing[8]};

    &:focus-within,
    &:hover {
      border-color: ${({ inverse }) =>
        inverse ? color.whiteTr10 : color.blackTr10};
    }
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

  &[data-state='open']:hover + [data-state='closed'],
  &[data-state='open']:focus-within + [data-state='closed'] {
    border-top-color: ${({ inverse }) =>
      inverse ? color.whiteTr10 : color.blackTr10};
  }

  &[data-state='open']:hover + [data-state='closed']:hover,
  &[data-state='open']:focus-within + [data-state='closed']:focus-within {
    border-top-color: ${color.blue500};
  }
`;

// the button controlling the open/closed state of each item
const Trigger = styled.button<{ inverse?: boolean }>`
  ${typography.body16};
  align-items: center;
  background: none;
  border: 0;
  box-sizing: border-box;
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
  cursor: pointer;
  display: flex;
  font-weight: ${fontWeight.bold};
  justify-content: space-between;
  padding: calc(${spacing[4]} + 1px) ${spacing[5]};
  text-align: left;
  transition: all 300ms ease-in-out;
  width: 100%;

  ${minSm} {
    padding: calc(${spacing[4]} + 1px) ${spacing[8]};
  }

  [data-state='open'] & {
    padding-top: ${spacing[8]};
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(Icon)`
  fill: currentColor;
  flex-basis: ${spacing[4]};
  flex-shrink: 0;
  margin-left: ${spacing[5]};
  transition: transform 300ms ease-in-out;

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

// the collapsible content of each item
const Panel = styled.div<{ inverse?: boolean }>`
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
    <Acc.Item value={id} asChild {...props} ref={forwardedRef}>
      <Item inverse={inverse} className="accordion-item">
        {children}
      </Item>
    </Acc.Item>
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
    <Acc.Trigger ref={forwardedRef} asChild>
      <Trigger inverse={inverse} {...props}>
        {children}
        {iconName && (
          <StyledIcon aria-hidden="true" name={iconName} size={iconSize} />
        )}
      </Trigger>
    </Acc.Trigger>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

// the collapsible content of each item
// radix requires custom components to have refs passed in
const AccordionPanel = forwardRef<any, React.PropsWithChildren<PanelProps>>(
  ({ inverse, children, ...props }, forwardedRef) => {
    return (
      <Acc.Content asChild>
        <Panel inverse={inverse} ref={forwardedRef} {...props}>
          {children}
        </Panel>
      </Acc.Content>
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
    <Acc.Root
      asChild
      type="single"
      collapsible
      defaultValue={defaultValue}
      {...props}
    >
      <AccordionWrapper inverse={inverse}>{children}</AccordionWrapper>
    </Acc.Root>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Panel = AccordionPanel;
