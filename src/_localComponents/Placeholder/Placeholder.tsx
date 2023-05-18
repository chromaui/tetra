import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color as tokenColor } from '../../_tokens';

export interface PlaceholderProps {
  width?: number;
  height?: number;
  color?: keyof typeof tokenColor;
}

const Container = styled.div<{
  width: PlaceholderProps['width'];
  height: PlaceholderProps['height'];
  color: PlaceholderProps['color'];
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height || 400}px;
  background-color: ${({ color }) =>
    color ? tokenColor[color] : tokenColor.slate100};
`;

export const Placeholder: FC<PlaceholderProps> = ({ width, height, color }) => {
  return <Container width={width} height={height} color={color} />;
};
