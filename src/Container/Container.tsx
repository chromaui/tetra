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
  margin-top: ${({ mt }) => getResponsiveValue(mt, 'base', 0)};
  margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'base', 0)};
  padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, 'base', 5)};
  padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, 'base', 5)};
  padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'base', 0)};
  padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'base', 0)};

  ${minSm} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'sm', 0)};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'sm', 0)};
    padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, 'sm', 10)};
    padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, 'sm', 10)};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'sm', 0)};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'sm', 0)};
  }

  ${minMd} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'md', 0)};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'md', 0)};
    padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, 'md', 10)};
    padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, 'md', 10)};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'md', 0)};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'md', 0)};
  }

  ${minLg} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'lg', 0)};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'lg', 0)};
    padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, 'lg', 10)};
    padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, 'lg', 10)};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'lg', 0)};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'lg', 0)};
  }

  ${minXl} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, 'xl', 0)};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, 'xl', 0)};
    padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, 'xl', 10)};
    padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, 'xl', 10)};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, 'xl', 0)};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, 'xl', 0)};
  }

  ${min2xl} {
    margin-top: ${({ mt }) => getResponsiveValue(mt, '2xl', 0)};
    margin-bottom: ${({ mb }) => getResponsiveValue(mb, '2xl', 0)};
    padding-left: ${({ px, pl }) => getResponsiveValue(px || pl, '2xl', 10)};
    padding-right: ${({ px, pr }) => getResponsiveValue(px || pr, '2xl', 10)};
    padding-top: ${({ py, pt }) => getResponsiveValue(py || pt, '2xl', 0)};
    padding-bottom: ${({ py, pb }) => getResponsiveValue(py || pb, '2xl', 0)};
  }
`;
