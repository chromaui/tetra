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
    variant: 'solid',
    color: 'blue500',
    leftIcon: undefined,
    rightIcon: undefined,
    href: undefined,
    target: undefined,
  },
};

export const Sizes: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <>
      <Link size="sm">{children}</Link>
      <Link size="md">{children}</Link>
      <Link size="lg">{children}</Link>
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
