import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { min2xl, minLg, minMd, minSm, minXl } from '../_helpers';
import { spacing } from '../_tokens';
import {
  ResponsiveObjTypes,
  BlockWithOptions,
  BlockWithOptionsProps,
  getResponsiveValue,
} from '../_localHelpers';

interface StackProps extends BlockWithOptionsProps {
  children: ReactNode;
  gap?: keyof typeof spacing | ResponsiveObjTypes;
  direction?: 'row' | 'column';
}

// TODO
// - Add support for custom direction depending on breakpoint
//   ex: direction={{ base: 'row', md: 'column' }}
// - Add support for no full-width stack

export const Stack = styled(BlockWithOptions)<{
  gap?: StackProps['gap'];
  direction?: StackProps['direction'];
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) =>
    gap !== undefined ? getResponsiveValue(gap, 'base') : spacing[4]};

  ${minSm} {
    gap: ${({ gap }) =>
      gap !== undefined ? getResponsiveValue(gap, 'sm') : spacing[4]};
  }

  ${minMd} {
    flex-direction: ${({ direction }) => direction || 'row'};
    gap: ${({ gap }) =>
      gap !== undefined ? getResponsiveValue(gap, 'md') : spacing[4]};
  }

  ${minLg} {
    gap: ${({ gap }) =>
      gap !== undefined ? getResponsiveValue(gap, 'lg') : spacing[4]};
  }

  ${minXl} {
    gap: ${({ gap }) =>
      gap !== undefined ? getResponsiveValue(gap, 'xl') : spacing[4]};
  }

  ${min2xl} {
    gap: ${({ gap }) =>
      gap !== undefined ? getResponsiveValue(gap, '2xl') : spacing[4]};
  }
`;
