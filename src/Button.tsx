import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color as tokenColor, fontFamily } from './tokens';
import { Icon, IconType } from './Icon';

export interface ButtonProps {
  children: String;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'white';
  leftIcon?: IconType;
  rightIcon?: IconType;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  as?: 'button' | 'a';
}

const Container = styled.a<{
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
    if (variant === 'solid' && color === 'blue') return tokenColor.blue500;
    if (variant === 'solid' && color === 'white') return tokenColor.white;
    return 'transparent';
  }};
  color: ${({ variant, color }) => {
    if (variant === 'solid' && color === 'blue') return tokenColor.white;
    if (variant === 'solid' && color === 'white') return tokenColor.blue500;
    if (variant === 'outline' && color === 'white') return tokenColor.white;
    return tokenColor.blue500;
  }};
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2.5rem';
    if (size === 'lg') return '3rem';
  }};
  box-shadow: ${({ color, variant }) => {
    if (variant === 'outline' && color === 'blue')
      return `0 0 0 1px ${tokenColor.blue500}`;
    if (variant === 'outline' && color === 'white')
      return `0 0 0 1px ${tokenColor.white}`;
  }};
  font-size: ${({ size }) => {
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
  }};
  font-weight: 600;
  font-family: ${fontFamily.sans};
  gap: 0.75rem;
  transition: all 0.16s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ variant, color }) => {
      if (variant === 'solid' && color === 'blue') return tokenColor.blue600;
      if (variant === 'solid' && color === 'white') return tokenColor.blue100;
      if (variant === 'outline' && color === 'blue') return tokenColor.blue100;
      if (variant === 'outline' && color === 'white')
        return 'rgba(255, 255, 255, 0.1)';
      return 'transparent';
    }};
  }
`;

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'solid',
  color = 'blue',
  leftIcon,
  rightIcon,
  href,
  target,
  onClick,
  as,
  ...rest
}) => {
  let iconSize: 12 | 14 | 16 = 14;
  if (size === 'sm') iconSize = 12;
  if (size === 'lg') iconSize = 16;

  let iconColor: keyof typeof tokenColor = 'gray500';
  if (variant === 'solid' && color === 'blue') iconColor = 'white';
  if (variant === 'solid' && color === 'white') iconColor = 'blue500';
  if (variant === 'outline' && color === 'blue') iconColor = 'blue500';
  if (variant === 'outline' && color === 'white') iconColor = 'white';

  let asContainer: ButtonProps['as'] = 'button';
  if (href) asContainer = 'a';
  if (as && !href) asContainer = as;

  return (
    <Container
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      as={asContainer}
      href={href}
      target={target}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} color={iconColor} />}
    </Container>
  );
};
