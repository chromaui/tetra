import React, { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Actions/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Base: Story = {
  args: {
    children: 'Hello World',
    size: 'md',
    color: 'blue500',
    leftIcon: undefined,
    rightIcon: undefined,
    href: undefined,
    target: undefined,
  },
};

export const Emphasis: Story = {
  args: {
    ...Base.args,
    emphasis: true,
  },
};

export const Sizes: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <>
      <Link href="#sm" size="sm">
        {children}
      </Link>
      <Link href="#md" size="md">
        {children}
      </Link>
      <Link href="#lg" size="lg">
        {children}
      </Link>
    </>
  ),
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};
