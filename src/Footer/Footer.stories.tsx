import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Base: Story = {
  args: {
    text: (
      <span>
        “We use TurboSnap to identify the changed files and run only the
        relevant stories and visual tests, cutting down costs and making our
        CI/CD much much quicker.”
      </span>
    ),
    avatarUrl: 'https://avatars1.githubusercontent.com/u/263385?s=88&v=4',
    name: 'Dominic Nguyen',
    jobTitle: 'Engineering manager',
    logo: './atomic-design.svg',
  },
};

export const Inverse: Story = {
  args: {
    ...Base.args,
    inverse: true,
    logo: './airbnb.svg',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
