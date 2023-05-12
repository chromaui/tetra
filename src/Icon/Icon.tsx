import React, { FC } from 'react';
import { icons } from './iconPaths';
import { color as tokenColor } from '../_tokens';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: number;
  color?: keyof typeof tokenColor;
}

export const Icon: FC<IconProps> = ({ name, size = 14, color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={color ? tokenColor[color] : 'currentColor'}
      {...props}
    >
      {icons[name]}
    </svg>
  );
};
