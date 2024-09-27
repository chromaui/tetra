import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { minLg, minMd } from '../_helpers';
import { spacing } from '../_tokens';
import { Column, ColumnProps } from './Column';

interface GridProps {
  children: ReactNode;
  padding?: boolean;
  mt?: keyof typeof spacing;
  mb?: keyof typeof spacing;
  gap?: boolean;
}

const Container = styled.div<{
  padding: boolean;
  mt: GridProps['mt'];
  mb: GridProps['mb'];
  gap?: GridProps['gap'];
}>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: ${({ gap }) => (gap ? 16 : 0)}px;
  max-width: 1880px;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt && spacing[mt]};
  margin-bottom: ${({ mb }) => mb && spacing[mb]};
  padding-left: ${({ padding }) => (padding ? spacing[4] : 0)};
  padding-right: ${({ padding }) => (padding ? spacing[4] : 0)};

  ${minMd} {
    padding-left: ${({ padding }) => (padding ? spacing[8] : 0)}px;
    padding-right: ${({ padding }) => (padding ? spacing[8] : 0)}px;
    column-gap: ${({ gap }) => (gap ? spacing[8] : 0)}px;
  }

  ${minLg} {
    column-gap: ${({ gap }) => (gap ? spacing[10] : 0)}px;
  }
`;

export const Grid: FC<GridProps> & {
  Column: FC<ColumnProps>;
} = ({ children, padding = true, mt, mb, gap = true, ...rest }) => (
  <Container padding={padding} mt={mt} mb={mb} gap={gap} {...rest}>
    {children}
  </Container>
);

Grid.Column = Column;
