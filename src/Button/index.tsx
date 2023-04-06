import { styled } from '@storybook/theming';
import { colors } from '../tokens';
import { FC } from 'react';
import { Icon, Icons } from '../icon';

export interface ButtonProps {
  children: String;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'white';
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
}

export const Container = styled.div<{
  size: ButtonProps['size'];
  variant: ButtonProps['variant'];
  color: ButtonProps['color'];
}>`
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
  gap: 0.75rem;
`;

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'solid',
  color = 'blue',
  leftIcon,
  rightIcon,
}) => {
  let iconSize: 12 | 14 | 16 = 14;
  if (size === 'sm') iconSize = 12;
  if (size === 'lg') iconSize = 16;

  return (
    <Container size={size} variant={variant} color={color}>
      {leftIcon && <Icon name={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} />}
    </Container>
  );
};
