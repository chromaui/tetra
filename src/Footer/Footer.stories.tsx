import preview from '#.storybook/preview';
import React from 'react';

import { Footer } from './Footer';

const meta = preview.meta({
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
});

export const Base = meta.story();

export const Inverse = meta.story({
  args: {
    theme: 'dark',
  },
});
