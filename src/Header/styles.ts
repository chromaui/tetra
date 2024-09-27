import { css, keyframes } from '@emotion/react';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';

export const desktopBreakpoint = 1000;

export const NavigationMenuItem = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing[2]};
  outline: none;
  user-select: none;
  border-radius: 4px;
  border: none;
  height: ${spacing[8]};
  background: transparent;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  ${typography.body14}
  font-weight: ${fontWeight.bold};

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: rgba(30, 167, 253, 0.14);
  }

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${color.blue500};
  }
`;

export const slideIn = keyframes`
   from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
   from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
`;

export const slideDown = keyframes`
   from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

export const slideUp = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;
