import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComponent: Story = {
  args: {
    size: 14,
    name: 'plus',
  },
  parameters: {
    layout: 'centered',
  },
};
