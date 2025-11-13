import React from 'react';
import styled from '@emotion/styled';
import { color, fontWeight } from '../_tokens';
import { typography } from '../_helpers';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  inverse?: boolean;
  htmlFor?: string;
}

export const Label = styled.label<{ inverse?: boolean }>`
  display: inline-block;
  ${typography.body14}
  font-weight: ${fontWeight.semibold};
  color: ${({ inverse }) => (inverse ? color.white : color.slate800)};
`;
