import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';

export interface DesktopColumnProps {
  children: ReactNode;
  backgroundColor?: keyof typeof color;
}

const Container = styled.div<{ bg: DesktopColumnProps['backgroundColor'] }>`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ bg }) => (bg ? `1px solid ${color.gray200}` : 'none')};
`;

export const DesktopColumn: FC<DesktopColumnProps> = ({
  children,
  backgroundColor,
}) => {
  return <Container bg={backgroundColor}>{children}</Container>;
};
