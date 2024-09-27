import React, { FC, forwardRef } from 'react';
import styled from '@emotion/styled';
import { color as tokenColor, fontFamily, fontWeight } from '../_tokens';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface LinkProps {
  children: React.ReactNode;
  size?: 'default' | 'sm' | 'md' | 'lg';
  color?: keyof typeof tokenColor;
  leftIcon?: Icons;
  rightIcon?: Icons;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
  weight?: 'regular' | 'semibold' | 'bold';
}

const Container = styled.a<{
  size: LinkProps['size'];
  color: LinkProps['color'];
  weight: 'regular' | 'semibold' | 'bold';
}>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  color: ${({ color }) => {
    if (color) return tokenColor[color];
    return tokenColor.blue500;
  }};
  font-size: ${({ size }) => {
    if (size === 'default') return '1em';
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
    return null;
  }};
  font-weight: ${(props) => fontWeight[props.weight]};
  font-family: ${fontFamily.sans};
  gap: 0.75rem;
  transition: all 0.16s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Link = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  LinkProps
>(
  (
    {
      children,
      size = 'default',
      color = 'blue500',
      leftIcon,
      rightIcon,
      href,
      target,
      rel,
      onClick,
      as,
      weight = 'regular',
      ...rest
    },
    ref
  ) => {
    let iconSize: 12 | 14 | 16 = 14;
    if (size === 'sm') iconSize = 12;
    if (size === 'lg') iconSize = 16;

    let asContainer: LinkProps['as'] = 'button';
    if (href) asContainer = 'a';
    if (as && !href) asContainer = as;

    return (
      <Container
        weight={weight}
        size={size}
        color={color}
        onClick={onClick}
        as={asContainer}
        href={href}
        target={target}
        rel={rel}
        ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
        {...rest}
      >
        {leftIcon && <Icon name={leftIcon} size={iconSize} color={color} />}
        {children}
        {rightIcon && <Icon name={rightIcon} size={iconSize} color={color} />}
      </Container>
    );
  }
);
Link.displayName = 'Link';
