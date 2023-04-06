import React, { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { colors } from './tokens';

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
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <>
      <Button size="sm">{children}</Button>
      <Button size="md">{children}</Button>
      <Button size="lg">{children}</Button>
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
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
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
          {children}
        </Button>
        <Button variant="outline" color="blue">
          {children}
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
          {children}
        </Button>
        <Button variant="outline" color="white">
          {children}
        </Button>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
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
        <Button color="blue">{children}</Button>
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
        <Button color="white">{children}</Button>
      </div>
    </div>
  ),
};

export const LeftIcon: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
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
          {children}
        </Button>
        <Button size="md" leftIcon="facehappy">
          {children}
        </Button>
        <Button size="lg" leftIcon="facehappy">
          {children}
        </Button>
        <Button size="sm" leftIcon="facehappy" variant="outline">
          {children}
        </Button>
        <Button size="md" leftIcon="facehappy" variant="outline">
          {children}
        </Button>
        <Button size="lg" leftIcon="facehappy" variant="outline">
          {children}
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
          {children}
        </Button>
        <Button size="md" leftIcon="facehappy" color="white">
          {children}
        </Button>
        <Button size="lg" leftIcon="facehappy" color="white">
          {children}
        </Button>
        <Button size="sm" leftIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
        <Button size="md" leftIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
        <Button size="lg" leftIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
      </div>
    </div>
  ),
};

export const RightIcon: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
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
          {children}
        </Button>
        <Button size="md" rightIcon="facehappy">
          {children}
        </Button>
        <Button size="lg" rightIcon="facehappy">
          {children}
        </Button>
        <Button size="sm" rightIcon="facehappy" variant="outline">
          {children}
        </Button>
        <Button size="md" rightIcon="facehappy" variant="outline">
          {children}
        </Button>
        <Button size="lg" rightIcon="facehappy" variant="outline">
          {children}
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
          {children}
        </Button>
        <Button size="md" rightIcon="facehappy" color="white">
          {children}
        </Button>
        <Button size="lg" rightIcon="facehappy" color="white">
          {children}
        </Button>
        <Button size="sm" rightIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
        <Button size="md" rightIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
        <Button size="lg" rightIcon="facehappy" color="white" variant="outline">
          {children}
        </Button>
      </div>
    </div>
  ),
};
