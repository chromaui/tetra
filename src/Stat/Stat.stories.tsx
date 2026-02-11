import preview from '#.storybook/preview';
import React from 'react';

import { Stat } from './Stat';
import { HStack, VStack } from '../Stack';

const meta = preview.meta({
  title: 'Components/Stat',
  component: Stat,
});

export const Base = meta.story({
  args: {
    dimension: 'On average',
    value: '41%',
    unit: 'More efficient',
  },
});

export const Small = meta.story({
  args: {
    ...Base.input.args,
    size: 'small',
  },
});

export const Alignment = meta.story({
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
});

export const Variants = meta.story({
  render: (args) => (
    <HStack gap={12}>
      <VStack align="center">
        <Stat {...args} variant="default" />
        <code>default</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} variant="positive" />
        <code>positive</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} variant="negative" />
        <code>negative</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} variant="warning" />
        <code>warning</code>
      </VStack>
      <VStack align="center">
        <Stat {...args} variant="neutral" />
        <code>neutral</code>
      </VStack>
      <VStack align="center" style={{ background: '#000' }}>
        <Stat {...args} variant="inverse" />
        <code style={{ color: '#fff' }}>inverse</code>
      </VStack>
    </HStack>
  ),
  args: Base.input.args,
});

export const CustomColor = meta.story({
  args: {
    ...Base.input.args,
    valueColor: 'purple500',
  },
});

export const CustomColorInverse = meta.story({
  args: {
    ...CustomColor.input.args,
    variant: 'inverse',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const Loading = meta.story({
  args: {
    ...Base.input.args,
    isLoading: true,
  },
});
