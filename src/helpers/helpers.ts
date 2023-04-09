import { breakpoint } from '../tokens/tokens';

export const minSm = `@media (min-width: ${breakpoint.sm}px)`;
export const minMd = `@media (min-width: ${breakpoint.md}px)`;
export const minLg = `@media (min-width: ${breakpoint.lg}px)`;
export const minXl = `@media (min-width: ${breakpoint.xl}px)`;
export const min2xl = `@media (min-width: ${breakpoint['2xl']}px)`;

export const maxSm = `@media (max-width: ${breakpoint.sm - 1}px)`;
export const maxMd = `@media (max-width: ${breakpoint.md - 1}px)`;
export const maxLg = `@media (max-width: ${breakpoint.lg - 1}px)`;
export const maxXl = `@media (max-width: ${breakpoint.xl - 1}px)`;
export const max2xl = `@media (max-width: ${breakpoint['2xl'] - 1}px)`;
