import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Logo } from './Logo';
import { color } from '../_tokens';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Base: Story = {
  args: {
    name: 'chromatic',
    theme: 'light',
    variant: 'default',
  },
  render: ({ name, theme, variant }) => {
    return (
      <Logo name={name} theme={theme} variant={variant} alt="chromatic logo" />
    );
  },
};

export const Chromatic: Story = {
  args: {
    ...Base.args,
  },
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.white,
          padding: '4rem 0',
          gap: 48,
          flexDirection: 'column',
        }}
      >
        <Logo name="chromatic" theme="light" width={240} alt="chromatic logo" />
        <Logo
          name="chromatic"
          theme="light"
          variant="monochrome"
          width={240}
          alt="chromatic logo"
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.slate800,
          padding: '4rem 0',
          gap: 48,
          flexDirection: 'column',
        }}
      >
        <Logo name="chromatic" theme="dark" width={240} alt="chromatic logo" />
        <Logo
          name="chromatic"
          theme="dark"
          variant="monochrome"
          width={240}
          alt="chromatic logo"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const Storybook: Story = {
  args: {
    ...Base.args,
  },
  render: () => (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.white,
          padding: '4rem 0',
          gap: 48,
          flexDirection: 'column',
        }}
      >
        <Logo name="storybook" theme="light" width={240} alt="storybook logo" />
        <Logo
          name="storybook"
          theme="light"
          variant="monochrome"
          width={240}
          alt="storybook logo"
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color.slate800,
          padding: '4rem 0',
          gap: 48,
          flexDirection: 'column',
        }}
      >
        <Logo name="storybook" theme="dark" width={240} alt="storybook logo" />
        <Logo
          name="storybook"
          theme="dark"
          variant="monochrome"
          width={240}
          alt="storybook logo"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
