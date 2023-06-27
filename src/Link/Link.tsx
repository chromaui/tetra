import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color as tokenColor, fontFamily } from '../_tokens';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export interface LinkProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  color?: keyof typeof tokenColor;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  as?: 'button' | 'a';
}

const Container = styled.a<{
  size: LinkProps['size'];
  color: LinkProps['color'];
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
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
    return null;
  }};
  font-weight: 600;
  font-family: ${fontFamily.sans};
  gap: 0.75rem;
  transition: all 0.16s ease-in-out;
  text-decoration: none;
`;

export const Link: FC<LinkProps> = ({
  children,
  size = 'md',
  color = 'blue500',
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

  let asContainer: LinkProps['as'] = 'button';
  if (href) asContainer = 'a';
  if (as && !href) asContainer = as;

  return (
    <Container
      size={size}
      color={color}
      onClick={onClick}
      as={asContainer}
      href={href}
      target={target}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} color={color} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} color={color} />}
    </Container>
  );
};
