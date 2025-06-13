import { Meta, StoryObj } from '@storybook/react-vite';

import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Local/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Base: Story = {
  args: {
    list: [
      { name: '0', value: '0px' },
      { name: '0.25', value: '1px' },
    ],
  },
};
