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
  gap?: keyof typeof spacing;
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
}>`
  display: flex;
  gap: ${({ gap }) => gap || spacing[4]};
  max-width: 1248px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: ${({ mt }) => getValue(mt, 'base', 0)};
  margin-bottom: ${({ mb }) => getValue(mb, 'base', 0)};
  padding-left: ${({ px }) => getValue(px, 'base', 5)};
  padding-right: ${({ px }) => getValue(px, 'base', 5)};
  padding-top: ${({ py }) => getValue(py, 'base', 0)};
  padding-bottom: ${({ py }) => getValue(py, 'base', 0)};

  ${minSm} {
    margin-top: ${({ mt }) => getValue(mt, 'sm', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'sm', 0)};
    padding-left: ${({ px }) => getValue(px, 'sm', 10)};
    padding-right: ${({ px }) => getValue(px, 'sm', 10)};
    padding-top: ${({ py }) => getValue(py, 'sm', 0)};
    padding-bottom: ${({ py }) => getValue(py, 'sm', 0)};
  }

  ${minMd} {
    flex-direction: row;
    margin-top: ${({ mt }) => getValue(mt, 'md', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'md', 0)};
    padding-left: ${({ px }) => getValue(px, 'md', 10)};
    padding-right: ${({ px }) => getValue(px, 'md', 10)};
    padding-top: ${({ py }) => getValue(py, 'md', 0)};
    padding-bottom: ${({ py }) => getValue(py, 'md', 0)};
  }

  ${minLg} {
    margin-top: ${({ mt }) => getValue(mt, 'lg', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'lg', 0)};
    padding-left: ${({ px }) => getValue(px, 'lg', 10)};
    padding-right: ${({ px }) => getValue(px, 'lg', 10)};
    padding-top: ${({ py }) => getValue(py, 'lg', 0)};
    padding-bottom: ${({ py }) => getValue(py, 'lg', 0)};
  }

  ${minXl} {
    margin-top: ${({ mt }) => getValue(mt, 'xl', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, 'xl', 0)};
    padding-left: ${({ px }) => getValue(px, 'xl', 10)};
    padding-right: ${({ px }) => getValue(px, 'xl', 10)};
    padding-top: ${({ py }) => getValue(py, 'xl', 0)};
    padding-bottom: ${({ py }) => getValue(py, 'xl', 0)};
  }

  ${min2xl} {
    margin-top: ${({ mt }) => getValue(mt, '2xl', 0)};
    margin-bottom: ${({ mb }) => getValue(mb, '2xl', 0)};
    padding-left: ${({ px }) => getValue(px, '2xl', 10)};
    padding-right: ${({ px }) => getValue(px, '2xl', 10)};
    padding-top: ${({ py }) => getValue(py, '2xl', 0)};
    padding-bottom: ${({ py }) => getValue(py, '2xl', 0)};
  }
`;
