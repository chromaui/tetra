import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';
import { colors } from '../tokens';

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
    color: 'blue',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.white,
          padding: '2rem 0',
          gap: '1rem',
        }}
      >
        <Button variant="solid" color="blue">
          Blue Button
        </Button>
        <Button variant="outline" color="blue">
          Blue Button
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.gray['800'],
          padding: '2rem 0',
          gap: '1rem',
        }}
      >
        <Button variant="solid" color="white">
          White Button
        </Button>
        <Button variant="outline" color="white">
          White Button
        </Button>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.white,
          padding: '2rem 0',
        }}
      >
        <Button color="blue">Blue Button</Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.gray['800'],
          padding: '2rem 0',
        }}
      >
        <Button color="white">White Button</Button>
      </div>
    </div>
  ),
};
