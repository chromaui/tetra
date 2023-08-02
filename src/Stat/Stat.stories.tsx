import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stat } from './Stat';
import { HStack, VStack } from '../Stack';

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Base: Story = {
  args: {
    dimension: 'On average',
    value: '41%',
    unit: 'More efficient',
  },
};

export const Small: Story = {
  args: {
    ...Base.args,
    size: 'small',
  },
};

export const Alignment: Story = {
  render: (args) => (
    <HStack gap={12}>
      <VStack align="center">
        <Stat {...args} alignment="left" />
        <code>left</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} alignment="center" />
        <code>center</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} alignment="right" />
        <code>right</code>
      </VStack>
    </HStack>
  ),
  args: {
    dimension: 'On average',
    value: '41%',
    unit: 'More efficient',
  },
};

export const Status: Story = {
  render: (args) => (
    <HStack gap={12}>
      <VStack align="center">
        <Stat {...args} status="default" />
        <code>default</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} status="positive" />
        <code>positive</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} status="negative" />
        <code>negative</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} status="warning" />
        <code>warning</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} status="neutral" />
        <code>neutral</code>
      </VStack>
      <VStack align="center" style={{ background: '#000' }}>
        <Stat {...args} status="inverse" />
        <code style={{ color: '#fff' }}>inverse</code>
      </VStack>
    </HStack>
  ),
  args: Base.args,
};

export const CustomColor: Story = {
  args: {
    ...Base.args,
    valueColor: 'purple500',
  },
};

export const Loading: Story = {
  args: {
    ...Base.args,
    isLoading: true,
  },
};
