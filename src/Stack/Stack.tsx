import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { min2xl, minLg, minMd, minSm, minXl } from '../_helpers';
import { spacing, breakpoint } from '../_tokens';

interface ResponsiveObjTypes {
  base?: keyof typeof spacing;
  sm?: keyof typeof spacing;
  md?: keyof typeof spacing;
  lg?: keyof typeof spacing;
  xl?: keyof typeof spacing;
  '2xl'?: keyof typeof spacing;
}

interface StackProps {
  children: ReactNode;
  mt?: keyof typeof spacing | ResponsiveObjTypes;
  mb?: keyof typeof spacing | ResponsiveObjTypes;
  px?: keyof typeof spacing | ResponsiveObjTypes;
  py?: keyof typeof spacing | ResponsiveObjTypes;
  pt?: keyof typeof spacing | ResponsiveObjTypes;
  pb?: keyof typeof spacing | ResponsiveObjTypes;
  pl?: keyof typeof spacing | ResponsiveObjTypes;
  pr?: keyof typeof spacing | ResponsiveObjTypes;
  gap?: keyof typeof spacing | ResponsiveObjTypes;
  maxWidth?: number;
}

// TODO
// - Add support for custom direction depending on breakpoint
//   ex: direction={{ base: 'row', md: 'column' }}
// - Add support for no full-width stack

const getValue = (
  value: keyof typeof spacing | ResponsiveObjTypes | undefined,
  breakP: keyof typeof breakpoint,
  defaultValue: keyof typeof spacing
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
  return spacing[defaultValue];
};

export const Stack = styled.div<{
  mt?: StackProps['mt'];
  mb?: StackProps['mb'];
  gap?: StackProps['gap'];
  px?: StackProps['px'];
  py?: StackProps['py'];
  pt?: StackProps['pt'];
  pb?: StackProps['pb'];
  pl?: StackProps['pl'];
  pr?: StackProps['pr'];
  maxWidth?: StackProps['maxWidth'];
}>`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth || 1248}px;
  margin: 0 auto;
  flex-direction: column;
  gap: ${({ gap }) => getValue(gap, 'base', 4)};
  margin-top: ${({ mt }) => getValue(mt, 'base', 0)};
  margin-bottom: ${({ mb }) => getValue(mb, 'base', 0)};
  padding-left: ${({ px, pl }) => getValue(px || pl, 'base', 5)};
  padding-right: ${({ px, pr }) => getValue(px || pr, 'base', 5)};
  padding-top: ${({ py, pt }) => getValue(py || pt, 'base', 0)};
  padding-bottom: ${({ py, pb }) => getValue(py || pb, 'base', 0)};

  ${minSm} {
    gap: ${({ gap }) => getValue(gap, 'sm', 4)};
    margin-top: ${({ mt }) => getValue(mt, 'sm', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'sm', 0)};
    padding-left: ${({ px, pl }) => getValue(px || pl, 'sm', 10)};
    padding-right: ${({ px, pr }) => getValue(px || pr, 'sm', 10)};
    padding-top: ${({ py, pt }) => getValue(py || pt, 'sm', 0)};
    padding-bottom: ${({ py, pb }) => getValue(py || pb, 'sm', 0)};
  }

  ${minMd} {
    flex-direction: row;
    gap: ${({ gap }) => getValue(gap, 'sm', 4)};
    margin-top: ${({ mt }) => getValue(mt, 'md', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'md', 0)};
    padding-left: ${({ px, pl }) => getValue(px || pl, 'md', 10)};
    padding-right: ${({ px, pr }) => getValue(px || pr, 'md', 10)};
    padding-top: ${({ py, pt }) => getValue(py || pt, 'md', 0)};
    padding-bottom: ${({ py, pb }) => getValue(py || pb, 'md', 0)};
  }

  ${minLg} {
    gap: ${({ gap }) => getValue(gap, 'sm', 4)};
    margin-top: ${({ mt }) => getValue(mt, 'lg', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'lg', 0)};
    padding-left: ${({ px, pl }) => getValue(px || pl, 'lg', 10)};
    padding-right: ${({ px, pr }) => getValue(px || pr, 'lg', 10)};
    padding-top: ${({ py, pt }) => getValue(py || pt, 'lg', 0)};
    padding-bottom: ${({ py, pb }) => getValue(py || pb, 'lg', 0)};
  }

  ${minXl} {
    gap: ${({ gap }) => getValue(gap, 'sm', 4)};
    margin-top: ${({ mt }) => getValue(mt, 'xl', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'xl', 0)};
    padding-left: ${({ px, pl }) => getValue(px || pl, 'xl', 10)};
    padding-right: ${({ px, pr }) => getValue(px || pr, 'xl', 10)};
    padding-top: ${({ py, pt }) => getValue(py || pt, 'xl', 0)};
    padding-bottom: ${({ py, pb }) => getValue(py || pb, 'xl', 0)};
  }

  ${min2xl} {
    gap: ${({ gap }) => getValue(gap, 'sm', 4)};
    margin-top: ${({ mt }) => getValue(mt, '2xl', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, '2xl', 0)};
    padding-left: ${({ px, pl }) => getValue(px || pl, '2xl', 10)};
    padding-right: ${({ px, pr }) => getValue(px || pr, '2xl', 10)};
    padding-top: ${({ py, pt }) => getValue(py || pt, '2xl', 0)};
    padding-bottom: ${({ py, pb }) => getValue(py || pb, '2xl', 0)};
  }
`;
