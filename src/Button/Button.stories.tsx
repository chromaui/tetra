import preview from '#.storybook/preview';
import type { StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Button } from './Button';
import { color } from '../_tokens/tokens';

const meta = preview.meta({
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
});

type Story = StoryObj<typeof Button>;

export const Base = meta.story({
  args: {
    children: 'Hello World',
    size: 'md',
    variant: 'solid',
    color: 'blue',
    leftIcon: undefined,
    rightIcon: undefined,
    href: undefined,
    target: undefined,
  },
});

export const Sizes = meta.story({
  args: {
    ...Base.input.args,
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
});

export const Variants = meta.story({
  args: {
    ...Base.input.args,
  },
  render: ({ children }) => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: color.white,
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
          backgroundColor: color.slate800,
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
  parameters: {
    layout: 'fullscreen',
  },
});

export const Colors = meta.story({
  args: {
    ...Base.input.args,
  },
  render: ({ children }) => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.white,
          padding: '4rem 0',
          gap: 20,
          flexDirection: 'column',
        }}
      >
        <Button color="blue">{`Blue - ${children}`}</Button>
        <Button color="white">{`White - ${children}`}</Button>
        <Button color="slate">{`Slate - ${children}`}</Button>
        <Button color="blue" variant="outline">
          {`Blue - ${children}`}
        </Button>
        <Button color="white" variant="outline">
          {`White - ${children}`}
        </Button>
        <Button color="slate" variant="outline">
          {`Slate - ${children}`}
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.slate800,
          padding: '4rem 0',
          gap: 20,
          flexDirection: 'column',
        }}
      >
        <Button color="blue" inverted>{`Blue - ${children}`}</Button>
        <Button color="white" inverted>{`White - ${children}`}</Button>
        <Button color="slate" inverted>{`Slate - ${children}`}</Button>
        <Button
          color="blue"
          variant="outline"
          inverted
        >{`Blue - ${children}`}</Button>
        <Button color="white" variant="outline" inverted>
          {`White - ${children}`}
        </Button>
        <Button color="slate" variant="outline" inverted>
          {`Slate - ${children}`}
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
});

export const LeftIcon = meta.story({
  args: {
    ...Base.input.args,
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
          backgroundColor: color.white,
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
          backgroundColor: color.slate800,
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
  parameters: {
    layout: 'fullscreen',
  },
});

export const RightIcon = meta.story({
  args: {
    ...Base.input.args,
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
          backgroundColor: color.white,
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
          backgroundColor: color.slate800,
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
  parameters: {
    layout: 'fullscreen',
  },
});

export const FullWidth = meta.story({
  args: {
    ...Base.input.args,
  },
  render: ({ children }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4rem',
        gap: '1rem',
      }}
    >
      <Button size="lg" rightIcon="facehappy">
        {children}
      </Button>
      <Button size="lg" leftIcon="facehappy">
        {children}
      </Button>
      <Button size="lg" leftIcon="facehappy" rightIcon="facehappy">
        {children}
      </Button>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
});
