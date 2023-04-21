import React, { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';
import { Placeholder } from '../_localComponents/Placeholder';
import { Stack } from '../Stack';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Base: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={10}>
        <Placeholder height={300} color="orange100" />
        <Divider />
        <Placeholder height={300} color="blue100" />
      </Stack>
    );
  },
};
