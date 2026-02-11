import preview from '#.storybook/preview';
import { StoryObj } from '@storybook/react-vite';
import React from 'react';

import { color } from '../_tokens/tokens';
import { Link } from './Link';
import { Text } from '../Text';
import { VStack } from '../Stack';

const meta = preview.meta({
  title: 'Actions/Link',
  component: Link,
  tags: ['autodocs'],
});

type Story = StoryObj<typeof Link>;

export const Base = meta.story({
  args: {
    children: 'Hello World',
    size: 'md',
    leftIcon: undefined,
    rightIcon: undefined,
    href: undefined,
    target: undefined,
  },
});

export const Emphasis = meta.story({
  args: {
    ...Base.input.args,
    weight: 'semibold',
  },
});

export const Sizes = meta.story({
  args: {
    ...Base.input.args,
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
});

export const Inverted = meta.story({
  args: {
    ...Base.input.args,
    inverted: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '4rem',
          backgroundColor: color.slate800,
        }}
      >
        <Story />
      </div>
    ),
  ],
});

export const InlineSize = meta.story({
  args: {
    ...Base.input.args,
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
});

export const RightIcon = meta.story({
  args: {
    children: 'Hello World',
    rightIcon: 'arrowright',
  },
  render: ({ children, ...args }) => (
    <>
      <Link href="#default" size="default" {...args}>
        {children}
      </Link>
      <Link href="#sm" size="sm" {...args}>
        {children}
      </Link>
      <Link href="#md" size="md" {...args}>
        {children}
      </Link>
      <Link href="#lg" size="lg" {...args}>
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
});

export const LeftIcon = meta.story({
  ...RightIcon.input,
  args: {
    ...Base.input.args,
    leftIcon: 'arrowleft',
  },
});
