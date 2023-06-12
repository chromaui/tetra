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
          <Text fontWeight="semibold" as="div" lineHeightAuto>
            Breakpoint prefix
          </Text>
        </Col1>
        <Col2>
          <Text fontWeight="semibold" as="div" lineHeightAuto>
            Minimum width
          </Text>
        </Col2>
        <Col3>
          <Text fontWeight="semibold" as="div" lineHeightAuto>
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
              <Text
                lineHeightAuto
                as="div"
                fontWeight="semibold"
                variant="bodySm"
              >
                {s.name}
              </Text>
            </Col1>
            <Col2>
              <Text lineHeightAuto as="div" color="slate600" variant="bodySm">
                {s.value}px
              </Text>
            </Col2>
            <Col3>
              <Text
                lineHeightAuto
                as="div"
                variant="bodySm"
                color="slate600"
              >{`@media (min-width: ${s.value}px) { ... }`}</Text>
            </Col3>
          </Line>
        ))}
    </Container>
  );
};
