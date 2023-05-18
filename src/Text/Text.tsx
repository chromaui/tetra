import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  color as tokenColor,
  fontFamily as tokenFontFamily,
  fontSize as tokenFontSize,
  fontWeight as tokenFontWeight,
  lineHeight as tokenLineHeight,
} from '../_tokens';
import { minSm } from '../_helpers';

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
    | 'bodySm'
    | 'subheading';
  alignment?: 'start' | 'center' | 'end' | 'justify';
  fontWeight?: keyof typeof tokenFontWeight;
  color?: keyof typeof tokenColor;
  lineHeightAuto?: boolean;
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
  lineHeightAuto: TextProps['lineHeightAuto'];
}>`
  margin: 0; // Reset
  font-family: ${tokenFontFamily.sans};
  color: ${({ color }) => {
    if (color) return tokenColor[color];
    return tokenColor.black;
  }};
  font-size: ${({ variant }) => {
    if (variant === 'heading4xl') return tokenFontSize[36];
    if (variant === 'heading3xl') return tokenFontSize[36];
    if (variant === 'heading2xl') return tokenFontSize[30];
    if (variant === 'headingXl') return tokenFontSize[24];
    if (variant === 'headingLg') return tokenFontSize[24];
    if (variant === 'headingMd') return tokenFontSize[20];
    if (variant === 'headingSm') return tokenFontSize[18];
    if (variant === 'headingXs') return tokenFontSize[16];
    if (variant === 'bodyLg') return tokenFontSize[18];
    if (variant === 'bodyMd') return tokenFontSize[16];
    if (variant === 'bodySm') return tokenFontSize[14];
    if (variant === 'subheading') return tokenFontSize[11];
  }};
  line-height: ${({ variant, lineHeightAuto }) => {
    if (lineHeightAuto) return 'auto';
    if (variant === 'heading4xl') return tokenLineHeight[44];
    if (variant === 'heading3xl') return tokenLineHeight[44];
    if (variant === 'heading2xl') return tokenLineHeight[38];
    if (variant === 'headingXl') return tokenLineHeight[32];
    if (variant === 'headingLg') return tokenLineHeight[32];
    if (variant === 'headingMd') return tokenLineHeight[32];
    if (variant === 'headingSm') return tokenLineHeight[28];
    if (variant === 'headingXs') return tokenLineHeight[24];
    if (variant === 'bodyLg') return tokenLineHeight[28];
    if (variant === 'bodyMd') return tokenLineHeight[28];
    if (variant === 'bodySm') return tokenLineHeight[20];
    if (variant === 'subheading') return 'auto';
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
    if (variant === 'subheading') return tokenFontWeight.bold;
  }};
  text-align: ${({ alignment }) => {
    if (alignment === 'start') return 'left';
    if (alignment === 'center') return 'center';
    if (alignment === 'end') return 'right';
    if (alignment === 'justify') return 'justify';
  }};
  letter-spacing: ${({ variant }) => {
    if (variant === 'subheading') return '0.35em';
    return 'normal';
  }};
  text-transform: ${({ variant }) => {
    if (variant === 'subheading') return 'uppercase';
    return 'none';
  }};

  ${minSm} {
    font-size: ${({ variant }) => {
      if (variant === 'heading4xl') return tokenFontSize[60];
      if (variant === 'heading3xl') return tokenFontSize[48];
      if (variant === 'heading2xl') return tokenFontSize[36];
      if (variant === 'headingXl') return tokenFontSize[30];
      if (variant === 'headingLg') return tokenFontSize[24];
      if (variant === 'headingMd') return tokenFontSize[20];
      if (variant === 'headingSm') return tokenFontSize[18];
      if (variant === 'headingXs') return tokenFontSize[16];
      if (variant === 'bodyLg') return tokenFontSize[18];
      if (variant === 'bodyMd') return tokenFontSize[16];
      if (variant === 'bodySm') return tokenFontSize[14];
    }};
    line-height: ${({ variant, lineHeightAuto }) => {
      if (lineHeightAuto) return 'auto';
      if (variant === 'heading4xl') return tokenLineHeight[68];
      if (variant === 'heading3xl') return tokenLineHeight[60];
      if (variant === 'heading2xl') return tokenLineHeight[52];
      if (variant === 'headingXl') return tokenLineHeight[44];
      if (variant === 'headingLg') return tokenLineHeight[32];
      if (variant === 'headingMd') return tokenLineHeight[28];
      if (variant === 'headingSm') return tokenLineHeight[24];
      if (variant === 'headingXs') return tokenLineHeight[24];
      if (variant === 'bodyLg') return tokenLineHeight[28];
      if (variant === 'bodyMd') return tokenLineHeight[28];
      if (variant === 'bodySm') return tokenLineHeight[20];
    }};
  }
`;

export const Text: FC<TextProps> = ({
  children,
  variant = 'bodyMd',
  alignment = 'start',
  fontWeight,
  color = 'slate800',
  lineHeightAuto = false,
  as = 'p',
  ...rest
}) => {
  return (
    <Container
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      alignment={alignment}
      lineHeightAuto={lineHeightAuto}
      as={as}
      {...rest}
    >
      {children}
    </Container>
  );
};
