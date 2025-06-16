import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Divider } from './Divider';
import { Placeholder } from '../_localComponents/Placeholder';
import { Stack } from '../Stack';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Base: Story = {
  args: {},
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={10}>
        <Placeholder height={300} color="orange100" />
        <Divider {...args} />
        <Placeholder height={300} color="blue100" />
      </Stack>
    );
  },
};

export const Inverse: Story = {
  ...Base,
  args: {
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
