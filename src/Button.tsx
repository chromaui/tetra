import { styled } from '@storybook/theming';
import { colors } from './tokens';
import { FC } from 'react';

export interface ButtonProps {
  children: String;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  variant?: 'solid' | 'outline';
  onClick?: () => void;
}

const Container = styled.button<{
  size: ButtonProps['size'];
  themeComp: ButtonProps['theme'];
  variant: ButtonProps['variant'];
}>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: block;
  padding: ${({ size }) => {
    if (size === 'sm') return '0 1rem';
    if (size === 'md') return '0 1.5rem';
    if (size === 'lg') return '0 2rem';
  }};
  background: ${({ variant }) => {
    if (variant === 'solid') return colors.blue['500'];
    return 'transparent';
  }};
  color: ${({ variant }) => {
    if (variant === 'solid') return colors.white;
    return colors.blue['500'];
  }};
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2.5rem';
    if (size === 'lg') return '3rem';
  }};
  box-shadow: 0 0 0 1px ${colors.blue['500']};
`;

export const Button: FC<ButtonProps> = ({
  children = 'Hello World',
  size = 'md',
  theme = 'light',
  variant = 'solid',
  onClick,
}) => {
  return (
    <Container
      type="button"
      size={size}
      themeComp={theme}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
