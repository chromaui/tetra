import preview from '#.storybook/preview';
import React from 'react';

import { Testimonial } from './Testimonial';

const meta = preview.meta({
  title: 'Components/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
  },
});

export const Base = meta.story({
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
});

export const Inverse = meta.story({
  args: {
    ...Base.input.args,
    theme: 'dark',
    logo: './airbnb.svg',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const Compact = meta.story({
  args: {
    ...Inverse.input.args,
    variant: 'compact',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    layout: 'padded',
  },
});

export const LeftAlign = meta.story({
  args: {
    ...Base.input.args,
    variant: 'left-aligned',
  },
  parameters: {
    layout: 'padded',
  },
});

export const InverseLeftAlign = meta.story({
  args: {
    ...Inverse.input.args,
    variant: 'left-aligned',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    layout: 'padded',
  },
});

export const Balanced = meta.story({
  args: {
    ...Base.input.args,
    variant: 'compact',
    balanced: true,
  },
  parameters: {
    layout: 'padded',
  },
});
