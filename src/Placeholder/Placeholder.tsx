import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color as tokenColor } from '../_tokens';

export interface PlaceholderProps {
  height?: number;
  color?: keyof typeof tokenColor;
}

const Container = styled.div<{
  height: PlaceholderProps['height'];
  color: PlaceholderProps['color'];
}>`
  width: 100%;
  height: ${({ height }) => (height ? height : 400)}px;
  background-color: ${({ color }) =>
    color ? tokenColor[color] : tokenColor.gray100};
`;

export const Placeholder: FC<PlaceholderProps> = ({ height, color }) => {
  return <Container height={height} color={color} />;
};
