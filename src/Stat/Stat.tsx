import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { animations, typography } from '../_helpers';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '../_tokens';

type StatVariant =
  | 'default'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'neutral'
  | 'inverse';
type Size = 'small' | 'large';
type Alignment = 'left' | 'center' | 'right';
type Color = keyof typeof color;

const alignments = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const CardinalInner = styled.div<{
  alignment: Alignment;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => alignments[props.alignment]};
`;

const Count = styled.div<{
  variant: StatVariant;
  valueColor?: Color;
  isLoading?: boolean;
  size: Size;
}>`
  color: ${color.slate700};
  display: block;

  ${(props) =>
    props.size === 'small'
      ? css`
          ${typography.body14}
          font-weight: ${fontWeight.bold};
        `
      : css`
          font-family: ${fontFamily.sans};
          font-size: ${fontSize[30]};
          line-height: ${lineHeight[38]};
          font-weight: ${fontWeight.regular};
        `}

  ${(props) =>
    props.isLoading &&
    css`
      overflow: hidden;

      > span {
        ${animations.inlineGlow(props.variant === 'inverse')};
      }
    `};

  ${(props) =>
    props.variant === 'positive' &&
    css`
      color: ${color.green500};
    `};
  ${(props) =>
    props.variant === 'negative' &&
    css`
      color: ${color.orange500};
    `};
  ${(props) =>
    props.variant === 'warning' &&
    css`
      color: ${color.yellow500};
    `};
  ${(props) =>
    props.variant === 'neutral' &&
    css`
      color: ${color.slate600};
    `};
  ${(props) =>
    props.variant === 'inverse' &&
    css`
      color: ${color.slate400};
    `};
  ${(props) =>
    props.valueColor &&
    css`
      color: ${color[props.valueColor]};
    `};
`;

const Dimension = styled.div<{ size: Size; variant: StatVariant }>`
  ${typography.body14};
  color: ${(props) =>
    props.variant === 'inverse' ? color.slate400 : color.slate600};
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSize[12]};
      line-height: ${lineHeight[20]};
    `};
`;
const Unit = styled.div<{ size: Size; variant: StatVariant }>`
  ${typography.body14};
  color: ${(props) =>
    props.variant === 'inverse' ? color.slate400 : color.slate600};
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSize[12]};
      line-height: ${lineHeight[20]};
    `};
`;

export interface StatProps {
  dimension: string;
  value: number | string;
  unit: string;
  isLoading?: boolean;
  size?: Size;
  variant?: StatVariant;
  alignment?: Alignment;
  valueColor?: Color;
}

export const Stat: FC<StatProps> = ({
  dimension,
  value,
  unit,
  isLoading,
  valueColor,
  size = 'large',
  variant = 'default',
  alignment = 'left',
  ...props
}) => {
  const formattedValue =
    typeof value === 'number' ? value.toLocaleString('en-US') : value;

  return (
    <CardinalInner alignment={alignment} {...props}>
      <Dimension variant={variant} size={size}>
        {dimension}
      </Dimension>
      <Count
        size={size}
        isLoading={isLoading}
        variant={variant}
        valueColor={valueColor}
      >
        <span>{isLoading ? 'loading' : formattedValue}</span>
      </Count>
      <Unit variant={variant} size={size}>
        {unit}
      </Unit>
    </CardinalInner>
  );
};
