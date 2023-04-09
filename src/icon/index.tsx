import React, { FC } from 'react';
import { icons } from './iconPaths';
import { color as tokenColor } from '../_tokens';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  color?: keyof typeof tokenColor;
}

export const Icon: FC<IconProps> = ({ name, size = 14, color = 'gray500' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={tokenColor[color] || 'currentColor'}
    >
      {icons[name]}
    </svg>
  );
};
