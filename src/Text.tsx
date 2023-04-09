import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from './tokens';
import { minSm } from './helpers';

export interface TextProps {
  children: ReactNode;
  variant?:
    | 'heading4xl'
    | 'heading3xl'
    | 'heading2xl'
    | 'headingXl'
    | 'headingLg'
    | 'headingMd'
    | 'headingSm'
    | 'headingXs'
    | 'bodyLg'
    | 'bodyMd'
    | 'bodySm';
  alignment?: 'start' | 'center' | 'end' | 'justify';
  fontWeight?: keyof typeof fontWeights;
  color?: keyof typeof colors;
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'legend'
    | 'div';
}

const Container = styled.div<{
  variant: TextProps['variant'];
  color: TextProps['color'];
  alignment: TextProps['alignment'];
  fontWeight: TextProps['fontWeight'];
}>`
  margin: 0; // Reset
  font-family: ${fontFamilies.sans};
  color: ${({ color }) => {
    if (color) return colors[color];
    return colors.black;
  }};
  font-size: ${({ variant }) => {
    if (variant === 'heading4xl') return fontSizes['4xl'];
    if (variant === 'heading3xl') return fontSizes['4xl'];
    if (variant === 'heading2xl') return fontSizes['3xl'];
    if (variant === 'headingXl') return fontSizes['2xl'];
    if (variant === 'headingLg') return fontSizes['2xl'];
    if (variant === 'headingMd') return fontSizes.xl;
    if (variant === 'headingSm') return fontSizes.lg;
    if (variant === 'headingXs') return fontSizes.md;
    if (variant === 'bodyLg') return fontSizes.lg;
    if (variant === 'bodyMd') return fontSizes.md;
    if (variant === 'bodySm') return fontSizes.sm;
  }};
  line-height: ${({ variant }) => {
    if (variant === 'heading4xl') return lineHeights['2xl'];
    if (variant === 'heading3xl') return lineHeights['2xl'];
    if (variant === 'heading2xl') return lineHeights.xl;
    if (variant === 'headingXl') return lineHeights.lg;
    if (variant === 'headingLg') return lineHeights.lg;
    if (variant === 'headingMd') return lineHeights.lg;
    if (variant === 'headingSm') return lineHeights.md;
    if (variant === 'headingXs') return lineHeights.sm;
    if (variant === 'bodyLg') return lineHeights.md;
    if (variant === 'bodyMd') return lineHeights.sm;
    if (variant === 'bodySm') return lineHeights.xs;
  }};
  margin-bottom: ${({ variant, as }) => {
    if (as === 'p' && variant === 'bodyLg') return '1.5rem';
    if (as === 'p' && variant === 'bodyMd') return '1.25rem';
    if (as === 'p' && variant === 'bodySm') return '1rem';
  }};
  font-weight: ${({ variant, fontWeight }) => {
    if (fontWeight) return fontWeights[fontWeight];
    if (variant === 'heading4xl') return fontWeights.semibold;
    if (variant === 'heading3xl') return fontWeights.semibold;
    if (variant === 'heading2xl') return fontWeights.semibold;
    if (variant === 'headingXl') return fontWeights.semibold;
    if (variant === 'headingLg') return fontWeights.semibold;
    if (variant === 'headingMd') return fontWeights.semibold;
    if (variant === 'headingSm') return fontWeights.semibold;
    if (variant === 'headingXs') return fontWeights.semibold;
    if (variant === 'bodyLg') return fontWeights.regular;
    if (variant === 'bodyMd') return fontWeights.regular;
    if (variant === 'bodySm') return fontWeights.regular;
  }};
  text-align: ${({ alignment }) => {
    if (alignment === 'start') return 'left';
    if (alignment === 'center') return 'center';
    if (alignment === 'end') return 'right';
    if (alignment === 'justify') return 'justify';
  }};

  ${minSm} {
    font-size: ${({ variant }) => {
      if (variant === 'heading4xl') return fontSizes['6xl'];
      if (variant === 'heading3xl') return fontSizes['5xl'];
      if (variant === 'heading2xl') return fontSizes['4xl'];
      if (variant === 'headingXl') return fontSizes['3xl'];
      if (variant === 'headingLg') return fontSizes['2xl'];
      if (variant === 'headingMd') return fontSizes.xl;
      if (variant === 'headingSm') return fontSizes.lg;
      if (variant === 'headingXs') return fontSizes.md;
      if (variant === 'bodyLg') return fontSizes.lg;
      if (variant === 'bodyMd') return fontSizes.md;
      if (variant === 'bodySm') return fontSizes.sm;
    }};
    line-height: ${({ variant }) => {
      if (variant === 'heading4xl') return lineHeights['5xl'];
      if (variant === 'heading3xl') return lineHeights['4xl'];
      if (variant === 'heading2xl') return lineHeights['3xl'];
      if (variant === 'headingXl') return lineHeights.xl;
      if (variant === 'headingLg') return lineHeights.lg;
      if (variant === 'headingMd') return lineHeights.md;
      if (variant === 'headingSm') return lineHeights.sm;
      if (variant === 'headingXs') return lineHeights.sm;
      if (variant === 'bodyLg') return lineHeights.md;
      if (variant === 'bodyMd') return lineHeights.sm;
      if (variant === 'bodySm') return lineHeights.xs;
    }};
  }
`;

export const Text: FC<TextProps> = ({
  children,
  variant = 'bodyMd',
  alignment = 'start',
  fontWeight,
  color,
  as = 'p',
  ...rest
}) => {
  return (
    <Container
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      alignment={alignment}
      as={as}
      {...rest}
    >
      {children}
    </Container>
  );
};
