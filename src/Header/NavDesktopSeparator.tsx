import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../_tokens';
import { Text } from '../Text';

export interface DesktopItemProps {
  title: string;
}

const Container = styled.div`
  padding-top: ${spacing[5]};
  padding-left: ${spacing[3]};
  padding-right: ${spacing[3]};
  padding-bottom: ${spacing[3]};
`;

export const NavDesktopSeparator: FC<DesktopItemProps> = ({ title }) => {
  return (
    <Container>
      <Text variant="subheading" color="gray400">
        {title}
      </Text>
    </Container>
  );
};
