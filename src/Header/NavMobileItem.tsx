import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import type { Icons } from '../Icon/Icon';
import { Text } from '../Text';
import { LinkWithWrapper } from '../LinkWithWrapper';

export interface MobileItemProps {
  icon?: Icons;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
  title: string;
  href: string;
  linkWrapper?: any;
}

const Container = styled(LinkWithWrapper)`
  all: unset;
  border-radius: 6px;
  cursor: pointer;
  display: flex;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }
`;

const Inside = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  gap: ${spacing[3]};
  height: ${spacing[8]};
  align-items: center;
  padding: 0 ${spacing[2]};
  border-radius: 6px;
  width: calc(100% - 20px);
  margin-left: 2px;
  cursor: pointer;
`;

export const NavMobileItem: FC<MobileItemProps> = ({
  icon,
  iconColor,
  customIcon,
  title,
  href,
  linkWrapper,
}) => {
  return (
    <Container href={href || ''} LinkWrapper={linkWrapper}>
      <Inside>
        {!customIcon && icon && (
          <Icon name={icon} size={16} color={iconColor} aria-hidden />
        )}
        {customIcon}
        <Text as="div" lineHeightAuto variant="body14" fontWeight="bold">
          {title}
        </Text>
      </Inside>
    </Container>
  );
};
