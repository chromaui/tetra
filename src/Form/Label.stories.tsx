import preview from '#.storybook/preview';
import React from 'react';

import { Label } from './Label';
import { color } from '../_tokens/tokens';

const meta = preview.meta({
  title: 'Forms/Label',
  component: Label,
});

export const Default = meta.story({
  args: {
    children: 'Email Address',
    htmlFor: 'example',
  },
});

export const Inverse = meta.story({
  args: {
    children: 'Email Address',
    htmlFor: 'example',
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});
