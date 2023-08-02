import React, { FC } from 'react';
import { styled, css } from '@storybook/theming';
import { animations, typography } from '../_helpers';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '../_tokens';

type Status =
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
  status: Status;
  valueColor?: Color;
  isLoading?: boolean;
  size: Size;
}>`
  color: ${color.slate700};
  display: block;

  ${(props) =>
    props.size === 'small'
      ? typography.body14
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
        ${animations.inlineGlow(props.status === 'inverse')};
      }
    `};

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${color.green500};
    `};
  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${color.orange500};
    `};
  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${color.yellow500};
    `};
  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${color.slate600};
    `};
  ${(props) =>
    props.status === 'inverse' &&
    css`
      color: ${color.slate400};
    `};
  ${(props) =>
    props.status === 'default' &&
    props.valueColor &&
    css`
      color: ${color[props.valueColor]};
    `};
`;

const Dimension = styled.div<{ size: Size; status: Status }>`
  ${typography.body14};
  color: ${(props) =>
    props.status === 'inverse' ? color.slate500 : color.slate600};
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSize[12]};
      line-height: ${lineHeight[20]};
    `};
`;
const Unit = styled.div<{ size: Size; status: Status }>`
  ${typography.body14};
  color: ${(props) =>
    props.status === 'inverse' ? color.slate500 : color.slate600};
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
  status?: Status;
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
  status = 'default',
  alignment = 'left',
  ...props
}) => {
  const formattedValue =
    typeof value === 'number' ? value.toLocaleString('en-US') : value;

  return (
    <CardinalInner alignment={alignment} {...props}>
      <Dimension status={status} size={size}>
        {dimension}
      </Dimension>
      <Count
        size={size}
        isLoading={isLoading}
        status={status}
        valueColor={valueColor}
      >
        <span>{isLoading ? 'loading' : formattedValue}</span>
      </Count>
      <Unit status={status} size={size}>
        {unit}
      </Unit>
    </CardinalInner>
  );
};
