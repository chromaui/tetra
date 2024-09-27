import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon';
import { Connector } from './Connector';
import { minMd } from '../_helpers';

interface IntegrationImageProps {
  children: ReactNode;
  backgroundColor?: string;
  withConnector?: boolean;
}

const Container = styled.figure`
  display: flex;
  align-items: center;
  margin: 0;
`;

const LogoContainer = styled.div<{ bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: ${spacing[10]};
  height: ${spacing[10]};
  border-radius: 8px;
  background-color: ${({ bg }) => bg || color.slate100};

  > * {
    transform: scale(0.7);
  }

  ${minMd} {
    width: ${spacing[16]};
    height: ${spacing[16]};

    > * {
      transform: scale(1);
    }
  }
`;

export const IntegrationImage: FC<IntegrationImageProps> = ({
  backgroundColor,
  children,
  withConnector,
}) => {
  return (
    <Container>
      {withConnector && (
        <>
          <LogoContainer bg="#ff4785">
            <Icon name="storybook" size={44} color="white" />
          </LogoContainer>
          <Connector />
        </>
      )}
      <LogoContainer bg={backgroundColor}>{children}</LogoContainer>
    </Container>
  );
};
