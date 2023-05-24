import React, { FC } from 'react';
import { Icon as ChromaIcon } from '@chromaui/icons';
import type { IconProps } from '@chromaui/icons';
import { color as tokenColor } from '../_tokens';

export interface Props {
  name: IconProps;
  size?: number;
  color?: keyof typeof tokenColor;
}

export const Icon: FC<Props> = ({ name, size = 14, color, ...props }) => {
  return (
    <ChromaIcon
      name={name}
      color={color ? tokenColor[color] : undefined}
      size={size}
      {...props}
    />
  );
};
