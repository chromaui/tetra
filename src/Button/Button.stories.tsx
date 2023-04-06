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
    leftIcon: undefined,
    rightIcon: undefined,
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
          backgroundColor: colors.gray800,
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
          backgroundColor: colors.gray800,
          padding: '2rem 0',
        }}
      >
        <Button color="white">White Button</Button>
      </div>
    </div>
  ),
};

export const LeftIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
          padding: '4rem 0',
          gap: '1rem',
        }}
      >
        <Button size="sm" leftIcon="facehappy">
          Hello World
        </Button>
        <Button size="md" leftIcon="facehappy">
          Hello World
        </Button>
        <Button size="lg" leftIcon="facehappy">
          Hello World
        </Button>
        <Button size="sm" leftIcon="facehappy" variant="outline">
          Hello World
        </Button>
        <Button size="md" leftIcon="facehappy" variant="outline">
          Hello World
        </Button>
        <Button size="lg" leftIcon="facehappy" variant="outline">
          Hello World
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.gray800,
          padding: '4rem 0',
          gap: '1rem',
        }}
      >
        <Button size="sm" leftIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="md" leftIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="lg" leftIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="sm" leftIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
        <Button size="md" leftIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
        <Button size="lg" leftIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
      </div>
    </div>
  ),
};

export const RightIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
          padding: '4rem 0',
          gap: '1rem',
        }}
      >
        <Button size="sm" rightIcon="facehappy">
          Hello World
        </Button>
        <Button size="md" rightIcon="facehappy">
          Hello World
        </Button>
        <Button size="lg" rightIcon="facehappy">
          Hello World
        </Button>
        <Button size="sm" rightIcon="facehappy" variant="outline">
          Hello World
        </Button>
        <Button size="md" rightIcon="facehappy" variant="outline">
          Hello World
        </Button>
        <Button size="lg" rightIcon="facehappy" variant="outline">
          Hello World
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.gray800,
          padding: '4rem 0',
          gap: '1rem',
        }}
      >
        <Button size="sm" rightIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="md" rightIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="lg" rightIcon="facehappy" color="white">
          Hello World
        </Button>
        <Button size="sm" rightIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
        <Button size="md" rightIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
        <Button size="lg" rightIcon="facehappy" color="white" variant="outline">
          Hello World
        </Button>
      </div>
    </div>
  ),
};
