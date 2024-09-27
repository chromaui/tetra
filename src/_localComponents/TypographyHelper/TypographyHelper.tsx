import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '../../Text';
import { t } from '../../_helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TypographyHelper: FC = () => {
  const allHelpers = Object.entries(t);

  return (
    <Wrapper>
      {allHelpers.map(([key, value]) => (
        <Container key={key}>
          {/* // eslint-disable-next-line
              // @ts-ignore */}
          <Text variant={key}>{key}</Text>
          <Row>
            <Line>
              <Text variant="body14">Font Size</Text>
              <Text variant="body14" fontWeight="bold" color="blue500">
                {value.fontSize}px
              </Text>
            </Line>
            <Line>
              <Text variant="body14">Line Height</Text>
              <Text variant="body14" fontWeight="bold" color="blue500">
                {value.lineHeight}px
              </Text>
            </Line>
            <Line>
              <Text variant="body14">Font Weight</Text>
              <Text variant="body14" fontWeight="bold" color="blue500">
                {value.fontWeight}
              </Text>
            </Line>
          </Row>
        </Container>
      ))}
    </Wrapper>
  );
};
