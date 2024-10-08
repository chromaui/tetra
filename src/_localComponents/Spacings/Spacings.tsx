import React, { FC } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../../_tokens';
import { Text } from '../../Text';

type SpacingProp = {
  name: string;
  value: string;
};

interface Props {
  list?: SpacingProp[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.slate300};
  padding: ${spacing[3]} 0;
`;

const Col1 = styled.div`
  width: 140px;
`;

const Col2 = styled.div`
  width: 140px;
`;

const Col3 = styled.div`
  width: 140px;
`;

const Col4 = styled.div`
  width: 100%;
`;

const Box = styled.div<{ width: string }>`
  height: ${spacing[6]};
  background-color: ${color.blue500};
  width: ${({ width }) => width};
  border-radius: 3px;
`;

export const Spacings: FC<Props> = ({ list }) => {
  return (
    <Container>
      <Line>
        <Col1>
          <Text fontWeight="semibold" as="div">
            Name
          </Text>
        </Col1>
        <Col2>
          <Text fontWeight="semibold" as="div">
            Size
          </Text>
        </Col2>
        <Col3>
          <Text fontWeight="semibold" as="div">
            Pixels
          </Text>
        </Col3>
        <Col4 />
      </Line>
      {list
        ?.sort((a, b) => {
          return parseFloat(a.name) - parseFloat(b.name);
        })
        ?.map((s) => (
          <Line key={s.name}>
            <Col1>
              <Text as="div" variant="body16" fontWeight="semibold">
                {s.name}
              </Text>
            </Col1>
            <Col2>
              <Text as="div" variant="body16" color="slate600">
                {s.value}
              </Text>
            </Col2>
            <Col3>
              <Text as="div" variant="body16" color="slate600">
                {parseFloat(s.name) * 4}px
              </Text>
            </Col3>
            <Col4>
              <Box width={s.value} />
            </Col4>
          </Line>
        ))}
    </Container>
  );
};
