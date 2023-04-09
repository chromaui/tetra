import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  color as tokenColor,
  fontFamily as tokenFontFamily,
  fontSize as tokenFontSize,
  fontWeight as tokenFontWeight,
  lineHeight as tokenLineHeight,
} from '../tokens';
import { minSm } from '../helpers';

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
  fontWeight?: keyof typeof tokenFontWeight;
  color?: keyof typeof tokenColor;
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
  font-family: ${tokenFontFamily.sans};
  color: ${({ color }) => {
    if (color) return tokenColor[color];
    return tokenColor.black;
  }};
  font-size: ${({ variant }) => {
    if (variant === 'heading4xl') return tokenFontSize['4xl'];
    if (variant === 'heading3xl') return tokenFontSize['4xl'];
    if (variant === 'heading2xl') return tokenFontSize['3xl'];
    if (variant === 'headingXl') return tokenFontSize['2xl'];
    if (variant === 'headingLg') return tokenFontSize['2xl'];
    if (variant === 'headingMd') return tokenFontSize.xl;
    if (variant === 'headingSm') return tokenFontSize.lg;
    if (variant === 'headingXs') return tokenFontSize.md;
    if (variant === 'bodyLg') return tokenFontSize.lg;
    if (variant === 'bodyMd') return tokenFontSize.md;
    if (variant === 'bodySm') return tokenFontSize.sm;
  }};
  line-height: ${({ variant }) => {
    if (variant === 'heading4xl') return tokenLineHeight['2xl'];
    if (variant === 'heading3xl') return tokenLineHeight['2xl'];
    if (variant === 'heading2xl') return tokenLineHeight.xl;
    if (variant === 'headingXl') return tokenLineHeight.lg;
    if (variant === 'headingLg') return tokenLineHeight.lg;
    if (variant === 'headingMd') return tokenLineHeight.lg;
    if (variant === 'headingSm') return tokenLineHeight.md;
    if (variant === 'headingXs') return tokenLineHeight.sm;
    if (variant === 'bodyLg') return tokenLineHeight.md;
    if (variant === 'bodyMd') return tokenLineHeight.sm;
    if (variant === 'bodySm') return tokenLineHeight.xs;
  }};
  margin-bottom: ${({ variant, as }) => {
    if (as === 'p' && variant === 'bodyLg') return '1.5rem';
    if (as === 'p' && variant === 'bodyMd') return '1.25rem';
    if (as === 'p' && variant === 'bodySm') return '1rem';
  }};
  font-weight: ${({ variant, fontWeight }) => {
    if (fontWeight) return tokenFontWeight[fontWeight];
    if (variant === 'heading4xl') return tokenFontWeight.semibold;
    if (variant === 'heading3xl') return tokenFontWeight.semibold;
    if (variant === 'heading2xl') return tokenFontWeight.semibold;
    if (variant === 'headingXl') return tokenFontWeight.semibold;
    if (variant === 'headingLg') return tokenFontWeight.semibold;
    if (variant === 'headingMd') return tokenFontWeight.semibold;
    if (variant === 'headingSm') return tokenFontWeight.semibold;
    if (variant === 'headingXs') return tokenFontWeight.semibold;
    if (variant === 'bodyLg') return tokenFontWeight.regular;
    if (variant === 'bodyMd') return tokenFontWeight.regular;
    if (variant === 'bodySm') return tokenFontWeight.regular;
  }};
  text-align: ${({ alignment }) => {
    if (alignment === 'start') return 'left';
    if (alignment === 'center') return 'center';
    if (alignment === 'end') return 'right';
    if (alignment === 'justify') return 'justify';
  }};

  ${minSm} {
    font-size: ${({ variant }) => {
      if (variant === 'heading4xl') return tokenFontSize['6xl'];
      if (variant === 'heading3xl') return tokenFontSize['5xl'];
      if (variant === 'heading2xl') return tokenFontSize['4xl'];
      if (variant === 'headingXl') return tokenFontSize['3xl'];
      if (variant === 'headingLg') return tokenFontSize['2xl'];
      if (variant === 'headingMd') return tokenFontSize.xl;
      if (variant === 'headingSm') return tokenFontSize.lg;
      if (variant === 'headingXs') return tokenFontSize.md;
      if (variant === 'bodyLg') return tokenFontSize.lg;
      if (variant === 'bodyMd') return tokenFontSize.md;
      if (variant === 'bodySm') return tokenFontSize.sm;
    }};
    line-height: ${({ variant }) => {
      if (variant === 'heading4xl') return tokenLineHeight['5xl'];
      if (variant === 'heading3xl') return tokenLineHeight['4xl'];
      if (variant === 'heading2xl') return tokenLineHeight['3xl'];
      if (variant === 'headingXl') return tokenLineHeight.xl;
      if (variant === 'headingLg') return tokenLineHeight.lg;
      if (variant === 'headingMd') return tokenLineHeight.md;
      if (variant === 'headingSm') return tokenLineHeight.sm;
      if (variant === 'headingXs') return tokenLineHeight.sm;
      if (variant === 'bodyLg') return tokenLineHeight.md;
      if (variant === 'bodyMd') return tokenLineHeight.sm;
      if (variant === 'bodySm') return tokenLineHeight.xs;
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
