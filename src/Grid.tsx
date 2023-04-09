import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { minLg, minMd } from './helpers';
import { spacing } from './tokens';

interface Props {
  children: ReactNode;
  padding?: boolean;
  mt?: keyof typeof spacing;
  mb?: keyof typeof spacing;
  gap?: boolean;
}

const Container = styled.div<{
  padding: boolean;
  mt: Props['mt'];
  mb: Props['mb'];
  gap?: Props['gap'];
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

export const Grid: FC<Props> = ({
  children,
  padding = true,
  mt,
  mb,
  gap = true,
  ...rest
}) => {
  return (
    <Container padding={padding} mt={mt} mb={mb} gap={gap} {...rest}>
      {children}
    </Container>
  );
};
