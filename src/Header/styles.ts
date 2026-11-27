import { css, keyframes } from '@emotion/react';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';

export const desktopBreakpoint = 1000;

/**
 * Below this width the header container is too narrow for six top-level
 * items at full spacing, so items and gaps tighten.
 */
export const compactNavBreakpoint = 1280;

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
  white-space: nowrap;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  ${typography.body14}
  font-weight: ${fontWeight.bold};

  @media (max-width: ${compactNavBreakpoint - 1}px) {
    padding: 0 6px;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${color.blue500};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/** Text colour of top-level nav items, per theme and state. */
export const navItemColor = ({
  theme,
  isActive,
}: {
  theme?: 'light' | 'dark';
  isActive?: boolean;
}) => {
  if (isActive) return theme === 'light' ? color.blue700 : color.blue400;
  return theme === 'light' ? color.slate800 : 'rgba(255, 255, 255, 0.8)';
};

/** Text colour of a top-level nav item on hover or while its menu is open. */
export const navItemHoverColor = (theme?: 'light' | 'dark') =>
  theme === 'light' ? color.blue600 : 'rgb(30, 167, 253)';

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
