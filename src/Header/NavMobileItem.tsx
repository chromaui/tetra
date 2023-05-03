import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';
import { Icon, IconType } from '../Icon/Icon';
import { Text } from '../Text';

export interface DesktopItemProps {
  icon?: IconType;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing[3]};
  height: ${spacing[8]};
  align-items: center;
`;

const IconWrapper = styled.div`
  width: ${spacing[4]};
  padding-top: ${spacing[0.25]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[0.5]};
`;

export const NavMobileItem: FC<DesktopItemProps> = ({
  icon,
  iconColor,
  customIcon,
  title,
}) => {
  return (
    <Container>
      <IconWrapper>
        {!customIcon && icon && (
          <Icon name={icon} size={16} color={iconColor} />
        )}
        {customIcon}
      </IconWrapper>
      <TextWrapper>
        <Text as="div" lineHeightAuto variant="bodySm" fontWeight="bold">
          {title}
        </Text>
      </TextWrapper>
    </Container>
  );
};
