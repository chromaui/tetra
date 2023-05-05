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
  description: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: calc(100% - ${spacing[3] + spacing[8]});
  padding: ${spacing[3]};
  padding-right: ${spacing[12]};
  gap: ${spacing[3]};
  border-radius: ${spacing[1]};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  &:hover {
    background-color: ${color.blue100};

    .arrow {
      right: ${spacing[4]};
      opacity: 1;
    }
  }
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

const ArrowWrapper = styled.div`
  position: absolute;
  width: ${spacing[4]};
  height: ${spacing[4]};
  top: ${spacing[4]};
  right: ${spacing[5]};
  opacity: 0;
  transition: right 250ms ease, opacity 0.2s ease;
`;

export const NavDesktopItem: FC<DesktopItemProps> = ({
  icon,
  iconColor,
  customIcon,
  title,
  description,
}) => {
  return (
    <Container role="menuitem" tabIndex={0}>
      <ArrowWrapper className="arrow">
        <Icon name="arrowrightalt" color="gray400" />
      </ArrowWrapper>
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
        <Text as="div" variant="bodySm" color="gray500">
          {description}
        </Text>
      </TextWrapper>
    </Container>
  );
};
