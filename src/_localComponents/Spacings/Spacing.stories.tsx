import { Meta, StoryObj } from '@storybook/react-vite';

import { Spacings } from './Spacings';

const meta: Meta<typeof Spacings> = {
  title: 'Local/Spacings',
  component: Spacings,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spacings>;

export const Base: Story = {
  args: {
    list: [
      { name: '0', value: '0px' },
      { name: '0.25', value: '1px' },
    ],
  },
};
