import React from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inverse?: boolean;
}

export const Input = styled.input<{ inverse?: boolean }>`
  box-sizing: border-box;
  display: block;
  width: 100%;
  ${typography.body14}
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: 3px;
  border: 1px solid
    ${({ inverse }) => (inverse ? color.slate700 : color.slate300)};
  background: ${({ inverse }) => (inverse ? color.slate800 : color.white)};
  color: ${({ inverse }) => (inverse ? color.slate100 : color.slate900)};
  transition: border-color 0.16s ease-in-out;
  outline: none;

  &::placeholder {
    color: ${({ inverse }) => (inverse ? color.slate500 : color.slate400)};
  }

  &:hover {
    border-color: ${({ inverse }) =>
      inverse ? color.slate600 : color.slate400};
  }

  &:focus {
    border-color: ${({ inverse }) => (inverse ? color.blue400 : color.blue600)};
    box-shadow: 0 0 0 3px ${color.blueTr10};
  }

  &:disabled {
    background: ${({ inverse }) => (inverse ? color.slate900 : color.slate100)};
    color: ${({ inverse }) => (inverse ? color.slate600 : color.slate500)};
    cursor: not-allowed;
    border-color: ${({ inverse }) =>
      inverse ? color.slate700 : color.slate300};
  }

  &[aria-invalid='true'] {
    border-color: ${color.orange500};

    &:focus {
      border-color: ${color.orange500};
      box-shadow: 0 0 0 3px rgb(from ${color.orange500} r g b / 0.25);
    }
  }
`;
