import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
  align: 'flex-start' | 'center' | 'flex-end';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const stackStyles = ({
  gap,
  align,
  justify,
}: {
  gap?: StackProps['gap'];
  align?: StackProps['align'];
  justify?: StackProps['justify'];
}) => css`
  display: flex;

  ${align && `align-items: ${align};`};
  ${justify && `justify-content: ${justify};`};

  gap: ${gap !== undefined ? getResponsiveValue(gap, 'base') : spacing[4]};

  ${minSm} {
    gap: ${gap !== undefined ? getResponsiveValue(gap, 'sm') : spacing[4]};
  }

  ${minMd} {
    gap: ${gap !== undefined ? getResponsiveValue(gap, 'md') : spacing[4]};
  }

  ${minLg} {
    gap: ${gap !== undefined ? getResponsiveValue(gap, 'lg') : spacing[4]};
  }

  ${minXl} {
    gap: ${gap !== undefined ? getResponsiveValue(gap, 'xl') : spacing[4]};
  }

  ${min2xl} {
    gap: ${gap !== undefined ? getResponsiveValue(gap, '2xl') : spacing[4]};
  }
`;

// TODO
// - Add support for custom direction depending on breakpoint
//   ex: direction={{ base: 'row', md: 'column' }}
// - Add support for no full-width stack

export const Stack = styled(BlockWithOptions)<{
  gap?: StackProps['gap'];
  direction?: StackProps['direction'];
  align?: StackProps['align'];
  justify?: StackProps['justify'];
}>`
  ${stackStyles};
  flex-direction: column;

  ${minMd} {
    flex-direction: ${({ direction }) => direction || 'row'};
  }
`;

export const HStack = styled(BlockWithOptions)<{
  gap?: StackProps['gap'];
  align?: StackProps['align'];
  justify?: StackProps['justify'];
}>`
  ${stackStyles};
  flex-direction: row;
`;

export const VStack = styled(BlockWithOptions)<{
  gap?: StackProps['gap'];
  align?: StackProps['align'];
  justify?: StackProps['justify'];
}>`
  ${stackStyles};
  flex-direction: column;
`;
