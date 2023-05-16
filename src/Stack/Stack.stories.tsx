import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Stack } from './Stack';
import { Placeholder } from '../_localComponents/Placeholder';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Base: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <>
        <Stack
          marginX={{ base: 4, sm: 4, md: 8 }}
          marginTop={10}
          gap={{ base: 4, sm: 4, md: 8 }}
        >
          <Placeholder height={300} color="orange100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="purple100" />
          <Placeholder height={300} color="pink100" />
          <Placeholder height={300} color="teal100" />
        </Stack>
        <Stack marginY={10} marginX={10}>
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="orange100" />
        </Stack>
        <Stack marginY={10} marginX={10}>
          <Placeholder height={300} color="teal100" />
          <Placeholder height={300} color="pink100" />
        </Stack>
      </>
    );
  },
};
