import { breakpoint } from '../_tokens/tokens';

export const minBase = `@media (min-width: ${breakpoint.base}px)`; // 0px
export const minSm = `@media (min-width: ${breakpoint.sm}px)`; // 640px / 40rem
export const minMd = `@media (min-width: ${breakpoint.md}px)`; // 768px / 48rem
export const minLg = `@media (min-width: ${breakpoint.lg}px)`; // 1024px / 64rem
export const minXl = `@media (min-width: ${breakpoint.xl}px)`; // 1280px / 80rem
export const min2xl = `@media (min-width: ${breakpoint['2xl']}px)`; // 1536px / 96rem

export const maxSm = `@media (max-width: ${breakpoint.sm - 1}px)`;
export const maxMd = `@media (max-width: ${breakpoint.md - 1}px)`;
export const maxLg = `@media (max-width: ${breakpoint.lg - 1}px)`;
export const maxXl = `@media (max-width: ${breakpoint.xl - 1}px)`;
export const max2xl = `@media (max-width: ${breakpoint['2xl'] - 1}px)`;
