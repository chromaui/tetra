import React from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { typography } from '../_helpers';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  inverse?: boolean;
}

const StyledSelect = styled.select<{ inverse?: boolean }>`
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
  cursor: pointer;
  appearance: none;
  background-image: ${({ inverse }) => {
    const arrowColor = inverse ? color.slate400 : color.slate500;
    return `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='${encodeURIComponent(
      arrowColor
    )}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
  }};
  background-repeat: no-repeat;
  background-position: right 0.75rem center;

  &:hover {
    border-color: ${({ inverse }) =>
      inverse ? color.slate600 : color.slate400};
  }

  &:focus {
    border-color: ${color.blue600};
    box-shadow: 0 0 0 3px ${color.blueTr10};
  }

  &:disabled {
    background: ${({ inverse }) => (inverse ? color.slate900 : color.slate100)};
    color: ${({ inverse }) => (inverse ? color.slate600 : color.slate500)};
    cursor: not-allowed;
    border-color: ${({ inverse }) =>
      inverse ? color.slate700 : color.slate300};

    &:hover {
      border-color: ${({ inverse }) =>
        inverse ? color.slate700 : color.slate300};
    }
  }

  &[aria-invalid='true'] {
    border-color: ${color.orange500};

    &:focus {
      border-color: ${color.orange500};
      box-shadow: 0 0 0 3px rgb(from ${color.orange500} r g b / 0.25);
    }
  }

  option {
    background: ${({ inverse }) => (inverse ? color.slate800 : color.white)};
    color: ${({ inverse }) => (inverse ? color.slate100 : color.slate900)};
  }
`;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ inverse, children, ...rest }, ref) => {
    return (
      <StyledSelect inverse={inverse} ref={ref} {...rest}>
        {children}
      </StyledSelect>
    );
  }
);

Select.displayName = 'Select';
