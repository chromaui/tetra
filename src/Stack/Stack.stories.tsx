import React, { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';
import { Placeholder } from '../Placeholder';

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
        <Stack>
          <Placeholder height={300} color="orange100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="purple100" />
          <Placeholder height={300} color="pink100" />
          <Placeholder height={300} color="teal100" />
        </Stack>
        <Stack my={10} mx={10}>
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="orange100" />
        </Stack>
        <Stack my={10} mx={10}>
          <Placeholder height={300} color="teal100" />
          <Placeholder height={300} color="pink100" />
        </Stack>
      </>
    );
  },
};
