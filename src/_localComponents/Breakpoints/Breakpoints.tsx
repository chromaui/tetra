import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color, spacing } from '../../_tokens';
import { Text } from '../../Text';

type BreakpointProp = {
  name: string;
  value: number;
};

interface Props {
  list?: BreakpointProp[];
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
  width: 320px;
`;

const Col2 = styled.div`
  width: 320px;
`;

const Col3 = styled.div`
  width: 100%;
`;

export const Breakpoints: FC<Props> = ({ list }) => {
  return (
    <Container>
      <Line>
        <Col1>
          <Text fontWeight="semibold" as="div">
            Breakpoint prefix
          </Text>
        </Col1>
        <Col2>
          <Text fontWeight="semibold" as="div">
            Minimum width
          </Text>
        </Col2>
        <Col3>
          <Text fontWeight="semibold" as="div">
            CSS
          </Text>
        </Col3>
      </Line>
      {list
        ?.sort((a, b) => {
          return a.value - b.value;
        })
        ?.map((s) => (
          <Line key={s.name}>
            <Col1>
              <Text as="div" fontWeight="semibold" variant="body16">
                {s.name}
              </Text>
            </Col1>
            <Col2>
              <Text as="div" color="slate600" variant="body16">
                {s.value}px
              </Text>
            </Col2>
            <Col3>
              <Text
                as="div"
                variant="body16"
                color="slate600"
              >{`@media (min-width: ${s.value}px) { ... }`}</Text>
            </Col3>
          </Line>
        ))}
    </Container>
  );
};
