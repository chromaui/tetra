import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Testimonial } from './Testimonial';

const meta: Meta<typeof Testimonial> = {
  title: 'Components/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

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
    jobTitle: 'Staff software engineer',
    logo: './homebound-logo.svg',
    companyName: 'Homebound',
  },
};

export const Inverse: Story = {
  args: {
    ...Base.args,
    theme: 'dark',
    logo: './airbnb.svg',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Compact: Story = {
  args: {
    ...Inverse.args,
    variant: 'compact',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const LeftAlign: Story = {
  args: {
    ...Base.args,
    variant: 'left-aligned',
  },
  parameters: {
    layout: 'padded',
  },
};

export const InverseLeftAlign: Story = {
  args: {
    ...Inverse.args,
    variant: 'left-aligned',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Balanced: Story = {
  args: {
    ...Base.args,
    variant: 'compact',
    balanced: true,
  },
  parameters: {
    layout: 'padded',
  },
};
