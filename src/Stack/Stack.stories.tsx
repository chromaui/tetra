import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Stack, HStack, VStack } from './Stack';
import { Placeholder } from '../_localComponents/Placeholder';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Base: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <>
        <Stack marginX={10} marginTop={10}>
          <Placeholder height={300} color="orange100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="purple100" />
          <Placeholder height={300} color="pink100" />
          <Placeholder height={300} color="cyan100" />
        </Stack>
        <Stack marginY={10} marginX={10}>
          <Placeholder height={300} color="yellow100" />
          <Placeholder height={300} color="blue100" />
          <Placeholder height={300} color="orange100" />
        </Stack>
        <Stack marginY={10} marginX={10}>
          <Placeholder height={300} color="cyan100" />
          <Placeholder height={300} color="pink100" />
        </Stack>
      </>
    );
  },
};

export const Align: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <Stack align="center" marginX={10} marginTop={10}>
        <Placeholder height={300} color="orange100" />
        <Placeholder height={400} color="blue100" />
        <Placeholder height={100} color="yellow100" />
        <Placeholder height={200} color="purple100" />
        <Placeholder height={100} color="pink100" />
        <Placeholder height={300} color="cyan100" />
      </Stack>
    );
  },
};

export const Justify: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <Stack justify="space-evenly" marginX={10} marginTop={10}>
        <Placeholder width={100} height={300} color="orange100" />
        <Placeholder width={100} height={400} color="blue100" />
        <Placeholder width={100} height={100} color="yellow100" />
      </Stack>
    );
  },
};

export const Horizontal: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <HStack marginX={10} marginTop={10}>
        <Placeholder width={100} height={300} color="orange100" />
        <Placeholder width={100} height={400} color="blue100" />
        <Placeholder width={100} height={100} color="yellow100" />
      </HStack>
    );
  },
};

export const Vertical: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <VStack marginX={10} marginTop={10}>
        <Placeholder width={100} height={300} color="orange100" />
        <Placeholder width={100} height={400} color="blue100" />
        <Placeholder width={100} height={100} color="yellow100" />
      </VStack>
    );
  },
};
