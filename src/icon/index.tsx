import { FC } from 'react';
import { Plus } from './icons/plus';
import { Trash } from './icons/trash';
import { X } from './icons/x';

export enum Icons {
  x = 'x',
  trash = 'trash',
  plus = 'plus',
}

export interface IconProps {
  name: keyof typeof Icons;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className, size = 14 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      className={className}
      fill="none"
    >
      {name === 'plus' && <Plus />}
      {name === 'x' && <X />}
      {name === 'trash' && <Trash />}
    </svg>
  );
};
