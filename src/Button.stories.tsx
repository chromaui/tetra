import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Hello World',
    size: 'md',
    variant: 'solid',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="sm">Hello World</Button>
      <Button size="md">Hello World</Button>
      <Button size="lg">Hello World</Button>
    </>
  ),
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <>
      <Button variant="solid">Hello World</Button>
      <Button variant="outline">Hello World</Button>
    </>
  ),
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Story />
      </div>
    ),
  ],
};
