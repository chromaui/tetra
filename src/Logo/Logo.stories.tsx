import type { Meta, StoryObj } from '@storybook/react';
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
    return <Logo name={name} theme={theme} variant={variant} />;
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
        <Logo name="chromatic" theme="light" width={240} />
        <Logo name="chromatic" theme="light" variant="monochrome" width={240} />
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
        <Logo name="chromatic" theme="dark" width={240} />
        <Logo name="chromatic" theme="dark" variant="monochrome" width={240} />
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
        <Logo name="storybook" theme="light" width={240} />
        <Logo name="storybook" theme="light" variant="monochrome" width={240} />
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
        <Logo name="storybook" theme="dark" width={240} />
        <Logo name="storybook" theme="dark" variant="monochrome" width={240} />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
