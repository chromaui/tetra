import React, { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { Text } from '../Text';
import { VStack } from '../Stack';

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
    weight: 'semibold',
  },
};

export const Sizes: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <>
      <Link href="#default" size="default">
        {children}
      </Link>
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

export const InlineSize: Story = {
  args: {
    ...Base.args,
  },
  render: () => (
    <VStack gap={6}>
      <Text variant="body20">
        Storybook is an industry-standard tool for UI development that hundreds
        of thousands of developers rely on. Chromatic supercharges{' '}
        <Link href="#default" size="default">
          Storybook
        </Link>{' '}
        with automated testing and review workflows.
      </Text>
      <Text variant="body16">
        Storybook is an industry-standard tool for UI development that hundreds
        of thousands of developers rely on. Chromatic supercharges{' '}
        <Link href="#default" size="default">
          Storybook
        </Link>{' '}
        with automated testing and review workflows.
      </Text>
      <Text variant="body14">
        Storybook is an industry-standard tool for UI development that hundreds
        of thousands of developers rely on. Chromatic supercharges{' '}
        <Link href="#default" size="default">
          Storybook
        </Link>{' '}
        with automated testing and review workflows.
      </Text>
    </VStack>
  ),
};
