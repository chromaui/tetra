import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color as tokenColor, spacing } from '../../_tokens';
import { Text } from '../../Text';
import { Icon } from '../../Icon';
import type { IconProps } from '../../Icon';

export interface InfoBoxProps {
  children: string;
  backgroundColor?: keyof typeof tokenColor;
  icon?: IconProps;
}

const Container = styled.div<{
  backgroundColor: InfoBoxProps['backgroundColor'];
}>`
  display: flex;
  gap: ${spacing[4]};
  border-radius: 6px;
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor) return tokenColor[backgroundColor];
    return tokenColor.blue100;
  }};
  padding: ${spacing[5]};
  padding-bottom: ${spacing[4]};
  padding-right: ${spacing[8]};
  margin-bottom: ${spacing[5]};

  p {
    margin: 0;
  }
`;

const IconContainer = styled.div`
  padding-top: ${spacing[0.5]};
`;

export const InfoBox: FC<InfoBoxProps> = ({
  children,
  backgroundColor,
  icon = 'flag',
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {icon && (
        <IconContainer>
          <Icon name={icon} />
        </IconContainer>
      )}
      <Text as="div">{children}</Text>
    </Container>
  );
};
