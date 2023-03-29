import React from 'react';

export type ExampleProps = {
  text?: String;
};

export function Example(props: ExampleProps) {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)} type="button">
      {`${props.text} ${count}`} coco
    </button>
  );
}
