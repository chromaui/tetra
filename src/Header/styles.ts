import { css, keyframes } from '@emotion/react';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';

/**
 * Width at which the desktop nav replaces the mobile menu. It's the narrowest
 * width where the six top-level items fit at full spacing (9px gaps, 8px item
 * padding, as in Figma) with at least 24px before Sign in / Sign up. Between
 * 1200 and 1239 the Container's side margins double, so the nav doesn't fit
 * there either, even though 1088–1199 would.
 */
export const desktopBreakpoint = 1240;

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

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * Colour of the keyboard focus ring. Same as the footer's: blue700 on light
 * surfaces (5.97:1 on white, 5.10:1 on blue100, 4.09:1 on blue200) and
 * blue300 on the dark header (8.04:1 on #171C23). `surface` is the colour the
 * ring sits on, not the header theme: dropdown panels and the mobile popover
 * are white in both themes, so their items always use 'light'.
 */
export const focusRingColor = (surface?: 'light' | 'dark') =>
  surface === 'dark' ? color.blue300 : color.blue700;

/**
 * The one focus ring every focusable element in the header uses: a 2px solid
 * outline 2px outside the element, following its border-radius. Keyboard
 * only (:focus-visible), so mouse clicks don't show it. Containers that clip
 * their overflow need 4px of room around their items to show it whole.
 */
export const focusRingStyles = (surface?: 'light' | 'dark') => `
  outline: 2px solid ${focusRingColor(surface)};
  outline-offset: 2px;
`;

export const focusRing = (surface?: 'light' | 'dark') => `
  &:focus-visible {
    ${focusRingStyles(surface)}
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
