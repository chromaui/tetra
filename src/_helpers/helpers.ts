import { styled } from '@storybook/theming';
import { spacing, breakpoint } from '../_tokens/tokens';

export const minBase = `@media (min-width: ${breakpoint.base}px)`;
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

export interface ResponsiveObjTypes {
  base?: keyof typeof spacing;
  sm?: keyof typeof spacing;
  md?: keyof typeof spacing;
  lg?: keyof typeof spacing;
  xl?: keyof typeof spacing;
  '2xl'?: keyof typeof spacing;
}

export const getResponsiveValue = (
  value: keyof typeof spacing | ResponsiveObjTypes | undefined,
  breakP: keyof typeof breakpoint
) => {
  if ((value || value === 0) && typeof value === 'number')
    return spacing[value];
  if (value && typeof value === 'object') {
    if (breakP === 'base' && value.base) return spacing[value.base];
    if (breakP === 'sm') {
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'md') {
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'lg') {
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === 'xl') {
      if (value.xl) return spacing[value.xl];
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
    if (breakP === '2xl') {
      if (value['2xl']) return spacing[value['2xl']];
      if (value.xl) return spacing[value.xl];
      if (value.lg) return spacing[value.lg];
      if (value.md) return spacing[value.md];
      if (value.sm) return spacing[value.sm];
      if (value.base) return spacing[value.base];
    }
  }
  return spacing[0];
};

export interface BlockWithOptionsProps {
  mx?: keyof typeof spacing | ResponsiveObjTypes;
  my?: keyof typeof spacing | ResponsiveObjTypes;
  mt?: keyof typeof spacing | ResponsiveObjTypes;
  mb?: keyof typeof spacing | ResponsiveObjTypes;
  ml?: keyof typeof spacing | ResponsiveObjTypes;
  mr?: keyof typeof spacing | ResponsiveObjTypes;
  px?: keyof typeof spacing | ResponsiveObjTypes;
  py?: keyof typeof spacing | ResponsiveObjTypes;
  pt?: keyof typeof spacing | ResponsiveObjTypes;
  pb?: keyof typeof spacing | ResponsiveObjTypes;
  pl?: keyof typeof spacing | ResponsiveObjTypes;
  pr?: keyof typeof spacing | ResponsiveObjTypes;
}

export const BlockWithOptions = styled.div<BlockWithOptionsProps>`
  ${({ mx, ml }) =>
    (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, 'base')};`}
  ${({ mx, mr }) =>
    (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, 'base')};`}
  ${({ my, mt }) =>
    (my || mt) && `margin-top: ${getResponsiveValue(my || mt, 'base')};`}
  ${({ my, mb }) =>
    (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, 'base')};`}
  ${({ px, pl }) =>
    (px || pl) && `padding-left: ${getResponsiveValue(px || pl, 'base')};`}
  ${({ px, pr }) =>
    (px || pr) && `padding-right: ${getResponsiveValue(px || pr, 'base')};`}
  ${({ py, pt }) =>
    (py || pt) && `padding-top: ${getResponsiveValue(py || pt, 'base')};`}
  ${({ py, pb }) =>
    (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, 'base')};`}

  ${minSm} {
    ${({ mx, ml }) =>
      (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, 'sm')};`}
    ${({ mx, mr }) =>
      (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, 'sm')};`}
    ${({ my, mt }) =>
      (my || mt) && `margin-top: ${getResponsiveValue(my || mt, 'sm')};`}
    ${({ my, mb }) =>
      (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, 'sm')};`}
    ${({ px, pl }) =>
      (px || pl) && `padding-left: ${getResponsiveValue(px || pl, 'sm')};`}
    ${({ px, pr }) =>
      (px || pr) && `padding-right: ${getResponsiveValue(px || pr, 'sm')};`}
    ${({ py, pt }) =>
      (py || pt) && `padding-top: ${getResponsiveValue(py || pt, 'sm')};`}
    ${({ py, pb }) =>
      (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, 'sm')};`}
  }

  ${minMd} {
    ${({ mx, ml }) =>
      (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, 'md')};`}
    ${({ mx, mr }) =>
      (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, 'md')};`}
    ${({ my, mt }) =>
      (my || mt) && `margin-top: ${getResponsiveValue(my || mt, 'md')};`}
    ${({ my, mb }) =>
      (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, 'md')};`}
    ${({ px, pl }) =>
      (px || pl) && `padding-left: ${getResponsiveValue(px || pl, 'md')};`}
    ${({ px, pr }) =>
      (px || pr) && `padding-right: ${getResponsiveValue(px || pr, 'md')};`}
    ${({ py, pt }) =>
      (py || pt) && `padding-top: ${getResponsiveValue(py || pt, 'md')};`}
    ${({ py, pb }) =>
      (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, 'md')};`}
  }

  ${minLg} {
    ${({ mx, ml }) =>
      (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, 'lg')};`}
    ${({ mx, mr }) =>
      (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, 'lg')};`}
    ${({ my, mt }) =>
      (my || mt) && `margin-top: ${getResponsiveValue(my || mt, 'lg')};`}
    ${({ my, mb }) =>
      (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, 'lg')};`}
    ${({ px, pl }) =>
      (px || pl) && `padding-left: ${getResponsiveValue(px || pl, 'lg')};`}
    ${({ px, pr }) =>
      (px || pr) && `padding-right: ${getResponsiveValue(px || pr, 'lg')};`}
    ${({ py, pt }) =>
      (py || pt) && `padding-top: ${getResponsiveValue(py || pt, 'lg')};`}
    ${({ py, pb }) =>
      (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, 'lg')};`}
  }

  ${minXl} {
    ${({ mx, ml }) =>
      (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, 'xl')};`}
    ${({ mx, mr }) =>
      (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, 'xl')};`}
    ${({ my, mt }) =>
      (my || mt) && `margin-top: ${getResponsiveValue(my || mt, 'xl')};`}
    ${({ my, mb }) =>
      (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, 'xl')};`}
    ${({ px, pl }) =>
      (px || pl) && `padding-left: ${getResponsiveValue(px || pl, 'xl')};`}
    ${({ px, pr }) =>
      (px || pr) && `padding-right: ${getResponsiveValue(px || pr, 'xl')};`}
    ${({ py, pt }) =>
      (py || pt) && `padding-top: ${getResponsiveValue(py || pt, 'xl')};`}
    ${({ py, pb }) =>
      (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, 'xl')};`}
  }

  ${min2xl} {
    ${({ mx, ml }) =>
      (mx || ml) && `margin-left: ${getResponsiveValue(mx || ml, '2xl')};`}
    ${({ mx, mr }) =>
      (mx || mr) && `margin-right: ${getResponsiveValue(mx || mr, '2xl')};`}
    ${({ my, mt }) =>
      (my || mt) && `margin-top: ${getResponsiveValue(my || mt, '2xl')};`}
    ${({ my, mb }) =>
      (my || mb) && `margin-bottom: ${getResponsiveValue(my || mb, '2xl')};`}
    ${({ px, pl }) =>
      (px || pl) && `padding-left: ${getResponsiveValue(px || pl, '2xl')};`}
    ${({ px, pr }) =>
      (px || pr) && `padding-right: ${getResponsiveValue(px || pr, '2xl')};`}
    ${({ py, pt }) =>
      (py || pt) && `padding-top: ${getResponsiveValue(py || pt, '2xl')};`}
    ${({ py, pb }) =>
      (py || pb) && `padding-bottom: ${getResponsiveValue(py || pb, '2xl')};`}
  }
`;
