import type { Meta, StoryObj } from '@storybook/react-vite';

import { Placeholder } from './Placeholder';

const meta: Meta<typeof Placeholder> = {
  title: 'Local/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Base: Story = {
  args: {
    height: 400,
    color: 'slate100',
  },
};
