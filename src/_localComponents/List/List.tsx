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
  width: 160px;
`;

const Col2 = styled.div`
  width: 100%;
`;

export const List: FC<Props> = ({ list }) => {
  return (
    <Container>
      <Line>
        <Col1>
          <Text fontWeight="semibold" as="div" lineHeightAuto>
            Name
          </Text>
        </Col1>
        <Col2>
          <Text fontWeight="semibold" as="div" lineHeightAuto>
            Value
          </Text>
        </Col2>
      </Line>
      {list
        ?.sort((a, b) => {
          return parseFloat(a.name) - parseFloat(b.name);
        })
        ?.map((s) => (
          <Line key={s.name}>
            <Col1>
              <Text
                as="div"
                variant="body16"
                fontWeight="semibold"
                lineHeightAuto
              >
                {s.name}
              </Text>
            </Col1>
            <Col2>
              <Text as="div" variant="body16" color="slate600" lineHeightAuto>
                {s.value}
              </Text>
            </Col2>
          </Line>
        ))}
    </Container>
  );
};
