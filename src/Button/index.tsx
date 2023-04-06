import { styled } from '@storybook/theming';
import { colors } from '../tokens';
import { FC } from 'react';

export interface ButtonProps {
  children: String;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'white';
}

export const Container = styled.div<ButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: ${({ size }) => {
    if (size === 'sm') return '0 1rem';
    if (size === 'md') return '0 1.5rem';
    if (size === 'lg') return '0 2rem';
  }};
  background: ${({ variant, color }) => {
    if (variant === 'solid' && color === 'blue') return colors.blue['500'];
    if (variant === 'solid' && color === 'white') return colors.white;
    return 'transparent';
  }};
  color: ${({ variant, color }) => {
    if (variant === 'solid' && color === 'blue') return colors.white;
    if (variant === 'solid' && color === 'white') return colors.blue['500'];
    if (variant === 'outline' && color === 'white') return colors.white;
    return colors.blue['500'];
  }};
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2.5rem';
    if (size === 'lg') return '3rem';
  }};
  box-shadow: ${({ color, variant }) => {
    if (variant === 'outline' && color === 'blue')
      return `0 0 0 1px ${colors.blue['500']}`;
    if (variant === 'outline' && color === 'white')
      return `0 0 0 1px ${colors.white}`;
  }};
  font-size: ${({ size }) => {
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
  }};
  font-weight: 600;
`;

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'solid',
  color = 'blue',
}) => {
  return (
    <Container size={size} variant={variant} color={color}>
      {children}
    </Container>
  );
};
