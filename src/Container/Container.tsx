import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  ResponsiveObjTypes,
  min2xl,
  minLg,
  minMd,
  minSm,
  minXl,
  getResponsiveValue,
} from '../_helpers';
import { spacing } from '../_tokens';

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
  maxWidth?: number;
}

export const Container = styled.div<{
  mt?: StackProps['mt'];
  mb?: StackProps['mb'];
  px?: StackProps['px'];
  py?: StackProps['py'];
  pt?: StackProps['pt'];
  pb?: StackProps['pb'];
  pl?: StackProps['pl'];
  pr?: StackProps['pr'];
  maxWidth?: StackProps['maxWidth'];
}>`
  max-width: ${({ maxWidth }) => maxWidth || 1248}px;
  margin: 0 auto;
  margin-top: ${({ mt }) => getResponsiveValue(mt, 'base')};
  margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'base')};
  padding-left: ${({ px, pl }) =>
    px || pl ? getResponsiveValue(px || pl, 'base') : spacing[5]};
  padding-right: ${({ px, pr }) =>
    px || pr ? getResponsiveValue(px || pr, 'base') : spacing[5]};
  padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'base')};
  padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'base')};

  ${minSm} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'sm')};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'sm')};
    padding-left: ${({ px, pl }) =>
      px || pl ? getResponsiveValue(px || pl, 'sm') : spacing[10]};
    padding-right: ${({ px, pr }) =>
      px || pr ? getResponsiveValue(px || pr, 'sm') : spacing[10]};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'sm')};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'sm')};
  }

  ${minMd} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'md')};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'md')};
    padding-left: ${({ px, pl }) =>
      px || pl ? getResponsiveValue(px || pl, 'md') : spacing[10]};
    padding-right: ${({ px, pr }) =>
      px || pr ? getResponsiveValue(px || pr, 'md') : spacing[10]};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'md')};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'md')};
  }

  ${minLg} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'lg')};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'lg')};
    padding-left: ${({ px, pl }) =>
      px || pl ? getResponsiveValue(px || pl, 'lg') : spacing[10]};
    padding-right: ${({ px, pr }) =>
      px || pr ? getResponsiveValue(px || pr, 'lg') : spacing[10]};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'lg')};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'lg')};
  }

  ${minXl} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'xl')};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'xl')};
    padding-left: ${({ px, pl }) =>
      px || pl ? getResponsiveValue(px || pl, 'xl') : spacing[10]};
    padding-right: ${({ px, pr }) =>
      px || pr ? getResponsiveValue(px || pr, 'xl') : spacing[10]};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'xl')};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'xl')};
  }

  ${min2xl} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, '2xl')};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, '2xl')};
    padding-left: ${({ px, pl }) =>
      px || pl ? getResponsiveValue(px || pl, '2xl') : spacing[10]};
    padding-right: ${({ px, pr }) =>
      px || pr ? getResponsiveValue(px || pr, '2xl') : spacing[10]};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, '2xl')};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, '2xl')};
  }
`;
