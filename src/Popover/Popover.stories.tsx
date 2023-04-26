import React, { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../Button';
import { Text } from '../Text';

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  args: {
    children: 'Hello World',
  },
  render: ({ children }) => (
    <Popover trigger={<Button>I'm a button</Button>}>
      <Text lineHeightAuto>{children}</Text>
    </Popover>
  ),
  parameters: {
    layout: 'centered',
  },
};
