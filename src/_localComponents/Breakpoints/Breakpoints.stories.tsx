import { Meta, StoryObj } from '@storybook/react';

import { Breakpoints } from './Breakpoints';

const meta: Meta<typeof Breakpoints> = {
  title: 'Local/Breakpoints',
  component: Breakpoints,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breakpoints>;

export const Base: Story = {
  args: {
    list: [
      { name: '0', value: 0 },
      { name: '0.25', value: 1 },
    ],
  },
};
