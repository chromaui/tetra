import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  ResponsiveObjTypes,
  min2xl,
  minLg,
  minMd,
  minSm,
  minXl,
  getResponsiveValue,
  BlockWithOptions,
  BlockWithOptionsProps,
} from '../_helpers';
import { spacing } from '../_tokens';

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
  gap: ${({ gap }) => (gap ? getResponsiveValue(gap, 'base') : spacing[4])};

  ${minSm} {
    gap: ${({ gap }) => (gap ? getResponsiveValue(gap, 'sm') : spacing[4])};
  }

  ${minMd} {
    flex-direction: ${({ direction }) => direction || 'row'};
    gap: ${({ gap }) => (gap ? getResponsiveValue(gap, 'md') : spacing[4])};
  }

  ${minLg} {
    gap: ${({ gap }) => (gap ? getResponsiveValue(gap, 'lg') : spacing[4])};
  }

  ${minXl} {
    gap: ${({ gap }) => (gap ? getResponsiveValue(gap, 'xl') : spacing[4])};
  }

  ${min2xl} {
    gap: ${({ gap }) => (gap ? getResponsiveValue(gap, '2xl') : spacing[4])};
  }
`;
