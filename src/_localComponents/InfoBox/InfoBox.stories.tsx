import { Meta, StoryObj } from '@storybook/react-vite';

import { InfoBox } from './InfoBox';

const meta: Meta<typeof InfoBox> = {
  title: 'Local/InfoBox',
  component: InfoBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Base: Story = {
  args: {
    children: 'Hello World',
  },
};
