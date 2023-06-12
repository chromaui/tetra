import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  breakpoint,
  color as tokenColor,
  fontWeight as tokenFontWeight,
} from '../_tokens';
import { typography } from '../_helpers';

type Breakpoints = keyof typeof breakpoint;

export function objectKeys<Obj, Keys extends (keyof Obj)[]>(obj: Obj): Keys {
  return Object.keys(obj as any) as Keys;
}

export interface TextProps {
  children: ReactNode;
  variant?:
    | keyof typeof typography
    | {
        [key in Breakpoints]?: keyof typeof typography;
      };
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
  color: ${({ color }) => {
    if (color) return tokenColor[color];
    return tokenColor.black;
  }};
  text-align: ${({ alignment }) => {
    if (alignment === 'start') return 'left';
    if (alignment === 'center') return 'center';
    if (alignment === 'end') return 'right';
    if (alignment === 'justify') return 'justify';
    return null;
  }};
  letter-spacing: ${({ variant }) => {
    if (variant === 'subheading') return '0.35em';
    return 'normal';
  }};
  text-transform: ${({ variant }) => {
    if (variant === 'subheading') return 'uppercase';
    return 'none';
  }};

  ${({ variant }) => {
    if (typeof variant === 'string') {
      return typography[variant];
    }

    if (typeof variant === 'object') {
      const styleArray: string[] = [];
      objectKeys(variant).forEach((key) => {
        const value = variant[key] || 'body16';
        styleArray.push(`
          @media (min-width: ${breakpoint[key]}px) {
            ${typography[value].styles}
          }
        `);
      });

      return styleArray.join('');
    }

    return null;
  }};

  ${({ fontWeight }) => {
    if (fontWeight) return `font-weight: ${tokenFontWeight[fontWeight]};`;
    return null;
  }};

  ${({ lineHeightAuto }) => {
    if (lineHeightAuto) return `line-height: normal;`;
    return null;
  }};
`;

export const Text: FC<TextProps> = ({
  children,
  variant = 'body16',
  alignment = 'start',
  fontWeight,
  lineHeightAuto = false,
  color = 'slate800',
  as = 'p',
  ...rest
}) => {
  return (
    <Container
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      lineHeightAuto={lineHeightAuto}
      alignment={alignment}
      as={as}
      {...rest}
    >
      {children}
    </Container>
  );
};
