import { breakpoints } from './tokens';

export const minSm = `@media (min-width: ${breakpoints.sm}px)`;
export const minMd = `@media (min-width: ${breakpoints.md}px)`;
export const minLg = `@media (min-width: ${breakpoints.lg}px)`;
export const minXl = `@media (min-width: ${breakpoints.xl}px)`;
export const min2xl = `@media (min-width: ${breakpoints['2xl']}px)`;

export const maxSm = `@media (max-width: ${breakpoints.sm - 1}px)`;
export const maxMd = `@media (max-width: ${breakpoints.md - 1}px)`;
export const maxLg = `@media (max-width: ${breakpoints.lg - 1}px)`;
export const maxXl = `@media (max-width: ${breakpoints.xl - 1}px)`;
export const max2xl = `@media (max-width: ${breakpoints['2xl'] - 1}px)`;
