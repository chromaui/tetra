import React, { FC } from 'react';
import { styled } from '@storybook/theming';
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
  border-bottom: 1px solid ${color.gray200};
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
        ?.sort(function (a, b) {
          return parseFloat(a.name) - parseFloat(b.name);
        })
        ?.map((s) => (
          <Line>
            <Col1>
              <Text
                lineHeightAuto
                as="div"
                variant="bodySm"
                fontWeight="semibold"
              >
                {s.name}
              </Text>
            </Col1>
            <Col2>
              <Text lineHeightAuto as="div" variant="bodySm" color="gray600">
                {s.value}
              </Text>
            </Col2>
          </Line>
        ))}
    </Container>
  );
};
