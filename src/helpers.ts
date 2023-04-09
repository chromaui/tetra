import { breakpoints } from './tokens';

export const minSm = `@media (min-width: ${breakpoints.sm})`;
export const minMd = `@media (min-width: ${breakpoints.md})`;
export const minLg = `@media (min-width: ${breakpoints.lg})`;
export const minXl = `@media (min-width: ${breakpoints.xl})`;
export const min2xl = `@media (min-width: ${breakpoints['2xl']})`;

export const maxSm = `@media (max-width: ${breakpoints.sm})`;
export const maxMd = `@media (max-width: ${breakpoints.md})`;
export const maxLg = `@media (max-width: ${breakpoints.lg})`;
export const maxXl = `@media (max-width: ${breakpoints.xl})`;
export const max2xl = `@media (max-width: ${breakpoints['2xl']})`;
