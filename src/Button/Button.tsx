import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { color as tokenColor, fontFamily } from '../_tokens';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'white' | 'slate';
  inverted?: boolean;
  leftIcon?: Icons;
  rightIcon?: Icons;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  as?: 'button' | 'a' | 'span';
}

const Container = styled.a<{
  size: ButtonProps['size'];
  variant: ButtonProps['variant'];
  inverted: ButtonProps['inverted'];
  color: ButtonProps['color'];
}>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => {
    if (size === 'sm') return '0 1rem';
    if (size === 'md') return '0 1.5rem';
    if (size === 'lg') return '0 2rem';
    return null;
  }};
  background: ${({ variant, color, inverted }) => {
    if (variant === 'solid' && color === 'blue') return tokenColor.blue600;
    if (variant === 'solid' && color === 'white') return tokenColor.white;
    if (variant === 'solid' && color === 'slate')
      return inverted ? tokenColor.slate700 : tokenColor.slate100;
    return 'transparent';
  }};
  color: ${({ variant, color, inverted }) => {
    if (variant === 'solid' && color === 'blue') return tokenColor.white;
    if (variant === 'solid' && color === 'white') return tokenColor.blue600;
    if (color === 'slate')
      return inverted ? tokenColor.slate200 : tokenColor.slate700;
    if (variant === 'outline' && color === 'blue')
      return inverted ? tokenColor.blue400 : tokenColor.blue600;
    if (variant === 'outline' && color === 'white') return tokenColor.white;
    return null;
  }};
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2.5rem';
    if (size === 'lg') return '3rem';
    return null;
  }};
  box-shadow: ${({ color, variant, inverted }) => {
    if (variant === 'outline' && color === 'blue')
      return `0 0 0 1px ${inverted ? tokenColor.blue400 : tokenColor.blue600}`;
    if (variant === 'outline' && color === 'white')
      return `0 0 0 1px ${tokenColor.white}`;
    if (variant === 'outline' && color === 'slate')
      return `0 0 0 1px ${inverted ? tokenColor.slate500 : tokenColor.slate400}`;
    return null;
  }};
  font-size: ${({ size }) => {
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
    return '0.875rem';
  }};
  font-weight: 600;
  font-family: ${fontFamily.sans};
  gap: 0.375rem;
  transition: all 0.16s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ variant, color, inverted }) => {
      if (variant === 'solid' && color === 'blue')
        return `hsl(from ${tokenColor.blue600} h s calc( l + 3 ))`;
      if (variant === 'solid' && color === 'white')
        return inverted ? tokenColor.slate200 : tokenColor.blue100;
      if (variant === 'solid' && color === 'slate')
        return inverted
          ? `hsl(from ${tokenColor.slate700} h s calc( l + 8 ))`
          : tokenColor.slate300;
      if (variant === 'outline' && color === 'blue') return tokenColor.blueTr10;
      if (variant === 'outline' && color === 'white')
        return 'rgba(255, 255, 255, 0.1)';
      if (variant === 'outline' && color === 'slate')
        return inverted ? 'hsl(0 0 100% / 0.05)' : tokenColor.blue100;
      return 'transparent';
    }};
    color: ${({ variant, color, inverted }) => {
      if (variant === 'outline' && color === 'blue')
        return inverted
          ? `hsl(from ${tokenColor.blue400} h s calc( l + 8 ))`
          : `hsl(from ${tokenColor.blue600} h s calc( l - 4 ))`;
      if (color === 'slate')
        return inverted ? tokenColor.slate100 : tokenColor.slate800;
    }};
  }
`;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      size = 'md',
      variant = 'solid',
      color = 'blue',
      inverted,
      leftIcon,
      rightIcon,
      href,
      target,
      onClick,
      as,
      ...rest
    },
    ref
  ) => {
    let iconSize: 12 | 14 | 16 = 14;
    if (size === 'sm') iconSize = 12;
    if (size === 'lg') iconSize = 16;

    let asContainer: ButtonProps['as'] = 'button';
    if (href) asContainer = 'a';
    if (as && !href) asContainer = as;

    return (
      <Container
        size={size}
        variant={variant}
        color={color}
        inverted={inverted}
        onClick={onClick}
        as={asContainer}
        href={href}
        target={target}
        ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
        {...rest}
      >
        {leftIcon && <Icon name={leftIcon} size={iconSize} />}
        {children}
        {rightIcon && <Icon name={rightIcon} size={iconSize} />}
      </Container>
    );
  }
);
Button.displayName = 'Button';
