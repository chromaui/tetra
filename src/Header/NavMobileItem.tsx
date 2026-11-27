import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import type { Icons } from '../Icon/Icon';
import { Text } from '../Text';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { focusRing } from './styles';

export interface MobileItemProps {
  icon?: Icons;
  iconColor?: keyof typeof color;
  /** CSS colour for a round tile behind the icon. */
  iconBackground?: string;
  customIcon?: ReactNode;
  title: string;
  href: string;
  linkWrapper?: any;
}

const Container = styled(LinkWithWrapper)`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  width: 100%;
  height: ${spacing[8]};
  padding: 0 10px 0 6px;
  border-radius: 6px;
  color: ${color.slate800};
  cursor: pointer;
  transition: background-color 150ms ease;

  &:hover,
  &:active {
    background-color: ${color.blue100};
  }

  &:focus-visible {
    background-color: ${color.blue100};
  }

  ${focusRing('light')}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const IconSlot = styled.span<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ background }) => background || 'transparent'};

  svg {
    display: block;
  }

  /* Brand tiles are drawn at 20px; the mobile menu shows them at 16px. */
  > svg[viewBox='0 0 20 20'] {
    width: 16px;
    height: 16px;
  }
`;

export const NavMobileItem: FC<MobileItemProps> = ({
  icon,
  iconColor,
  iconBackground,
  customIcon,
  title,
  href,
  linkWrapper,
}) => {
  return (
    <Container href={href || ''} LinkWrapper={linkWrapper}>
      {(customIcon || icon) && (
        <IconSlot background={iconBackground} aria-hidden="true">
          {customIcon ||
            (icon && (
              <Icon
                name={icon}
                size={iconBackground ? 14 : 16}
                color={iconColor}
              />
            ))}
        </IconSlot>
      )}
      <Text as="span" lineHeightAuto variant="body14" fontWeight="bold">
        {title}
      </Text>
    </Container>
  );
};
