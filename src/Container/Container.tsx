import { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import {
  BlockWithOptionsForContainer,
  BlockWithOptionsForContainerProps,
} from '../_helpers';

interface ContainerProps extends BlockWithOptionsForContainerProps {
  children: ReactNode;
  maxWidth?: number;
}

export const Container = styled(BlockWithOptionsForContainer)<{
  maxWidth?: ContainerProps['maxWidth'];
}>`
  max-width: ${({ maxWidth }) => maxWidth || 1248}px;
  margin: 0 auto;
`;
