import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from './tokens';

export interface GridProps {
  children: ReactNode;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  order?: number;
  mt?: keyof typeof spacing;
  mb?: keyof typeof spacing;
  as?: 'div' | 'p' | 'ul' | 'ol';
}

const Container = styled.div<{
  start: GridProps['start'];
  width: GridProps['width'];
  order: GridProps['order'];
  mt: GridProps['mt'];
  mb: GridProps['mb'];
}>(({ start = 1, width = 12, order = 0, mt = 0, mb = 0 }) => {
  let newWidth: number = start + updateWidth(width);
  if (start + updateWidth(width) > 13) newWidth = 13;

  return {
    position: 'relative',
    gridColumnStart: start,
    gridColumnEnd: newWidth,
    marginTop: spacing[mt],
    marginBottom: spacing[mb],
    order,
  };
});

const updateWidth = (width: GridProps['width']) => {
  if (width) return width;
  return 1;
};

export const Column: FC<GridProps> = ({
  as = 'div',
  children,
  start,
  width,
  order,
  mt,
  mb,
  ...rest
}) => {
  return (
    <Container
      as={as}
      start={start}
      width={width}
      mt={mt}
      mb={mb}
      order={order}
      {...rest}
    >
      {children}
    </Container>
  );
};
