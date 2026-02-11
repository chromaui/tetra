import preview from '#.storybook/preview';

import React from 'react';
import { Container } from './Container';
import { Placeholder } from '../_localComponents/Placeholder';

const meta = preview.meta({
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <Container marginTop={10} marginBottom={10}>
        <Placeholder height={600} color="orange100" />
      </Container>
    );
  },
});

export const WithCustomPadding = meta.story({
  ...Base.input,
  args: {
    paddingY: 28,
  },
  render: (args) => {
    return (
      <Container
        marginTop={10}
        marginBottom={10}
        style={{ border: '1px solid red' }}
        {...args}
      >
        <Placeholder height={600} color="orange100" />
      </Container>
    );
  },
});
