import React from 'react';
import styled from '@emotion/styled';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { color, spacing } from './_tokens';
import { typography } from './_helpers';

const TooltipContent = styled(RadixTooltip.Content)`
  border-radius: 4px;
  padding: ${spacing[4]};
  ${typography.body14};
  color: ${color.white};
  background-color: ${color.slate900};
  box-shadow:
    0 0 0 1px
      color-mix(
        in oklab,
        color(display-p3 0.882 0.949 0.996/0.183),
        color(display-p3 0.215 0.226 0.244)
      ),
    0 12px 60px color(display-p3 0 0 0/0.3),
    0 12px 32px -16px color(display-p3 0 0 0/0.5);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);
  width: min(280px, var(--radix-tooltip-content-available-width));
  max-height: var(--radix-tooltip-content-available-height);

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

interface TooltipProps {
  trigger: React.ReactNode;
  copy: React.ReactNode;
  contentProps?: RadixTooltip.TooltipContentProps;
}

export const Tooltip = ({
  trigger,
  copy,
  contentProps,
  ...props
}: TooltipProps) => (
  <RadixTooltip.Provider delayDuration={0}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>
        <Button {...props}>{trigger}</Button>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent {...contentProps}>{copy}</TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);
