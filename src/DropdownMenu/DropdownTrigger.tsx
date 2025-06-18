import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { color, fontWeight, spacing } from '../_tokens';
import { typography } from '../_helpers';

export const buttonStyles = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing[2]};
  outline: none;
  user-select: none;
  border-radius: 4px;
  border: none;
  height: ${spacing[8]};
  background: transparent;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  ${typography.body14}
  font-weight: ${fontWeight.bold};

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: rgba(30, 167, 253, 0.14);
  }
`;

const TriggerButton = styled(RadixDropdownMenu.Trigger, {
  shouldForwardProp: (propName) =>
    propName !== 'variant' && propName !== 'isActive',
})<{
  variant?: 'light' | 'dark';
  isActive?: boolean;
}>`
  ${buttonStyles}
  background-color: ${({ isActive, variant }) => {
    if (isActive) {
      return color.green300;
    }
    return variant === 'light' ? color.slate100 : color.slate800;
  }};
  color: ${({ isActive, variant }) => {
    if (isActive) return variant === 'light' ? color.blue600 : color.blue400;
    return variant === 'light' ? color.slate700 : color.white;
  }};

  &:hover {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${({ variant }) => {
      return variant === 'light' ? color.blue600 : color.blue400;
    }};
  }

  &[data-state='open'] {
    background-color: ${({ variant }) => {
      return variant === 'light'
        ? `hsl(from ${color.blue600} h s l / 0.07)`
        : `hsl(from ${color.blue400} h s l / 0.07)`;
    }};
    color: ${({ variant }) => {
      return variant === 'light' ? color.blue600 : color.blue400;
    }};
  }
`;

interface DesktopItemProps {
  variant?: 'light' | 'dark';
  children?: React.ReactNode;
}

export const DropdownTrigger: FC<DesktopItemProps> = ({
  children,
  variant = 'light',
}) => {
  return (
    <>
      <TriggerButton variant={variant}>{children}</TriggerButton>
    </>
  );
};
