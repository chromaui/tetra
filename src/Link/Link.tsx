import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { color as tokenColor, fontFamily, fontWeight } from '../_tokens';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface LinkProps {
  children: React.ReactNode;
  size?: 'default' | 'sm' | 'md' | 'lg';
  color?: keyof typeof tokenColor;
  inverted?: boolean;
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
  inverted?: boolean;
  weight: 'regular' | 'semibold' | 'bold';
}>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  color: ${({ color, inverted }) => {
    if (color) return tokenColor[color];
    return inverted ? tokenColor.blue400 : tokenColor.blue600;
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
  gap: 0.25em;
  transition: all 0.16s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: ${({ color, inverted }) => {
      if (color) return `hsl(from ${tokenColor[color]} h s calc( l + 4 ))`;
      return inverted
        ? `hsl(from ${tokenColor.blue400} h s calc( l + 4))`
        : `hsl(from ${tokenColor.blue600} h s calc( l + 8))`;
    }};
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
      color,
      inverted,
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
    if (size === 'md') iconSize = 14;
    if (size === 'lg') iconSize = 16;

    let asContainer: LinkProps['as'] = 'button';
    if (href) asContainer = 'a';
    if (as && !href) asContainer = as;

    return (
      <Container
        weight={weight}
        size={size}
        color={color}
        inverted={inverted}
        onClick={onClick}
        as={asContainer}
        href={href}
        target={target}
        rel={rel}
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
Link.displayName = 'Link';
