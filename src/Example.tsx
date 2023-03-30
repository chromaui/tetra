import React from 'react';
import { styled, css } from '@storybook/theming';

const Button = styled.button<{ primary?: boolean }>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;

  ${(props) =>
    props.primary &&
    css`
      background: black;
      color: white;
    `}
`;

export type ExampleProps = {
  text?: String;
  primary?: boolean;
};

export function Example({ primary, text }: ExampleProps) {
  const [count, setCount] = React.useState(0);
  return (
    <Button primary={primary} onClick={() => setCount(count + 1)} type="button">
      {`${text} ${count}`} coco
    </Button>
  );
}
