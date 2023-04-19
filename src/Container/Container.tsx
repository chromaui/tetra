import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  BlockWithOptionsForContainer,
  BlockWithOptionsForContainerProps,
  minSm,
} from '../_helpers';
import { spacing } from '../_tokens';

interface ContainerProps extends BlockWithOptionsForContainerProps {
  children: ReactNode;
  maxWidth?: number;
}

export const Container = styled(BlockWithOptionsForContainer)<{
  maxWidth?: ContainerProps['maxWidth'];
}>`
  max-width: ${({ maxWidth }) => maxWidth || 1248}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing[5]};
  padding-right: ${spacing[5]};

  ${minSm} {
    padding-left: ${spacing[10]};
    padding-right: ${spacing[10]};
  }
`;
