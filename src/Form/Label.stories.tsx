import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Label } from './Label';
import { color } from '../_tokens/tokens';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'example',
  },
};

export const Inverse: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'example',
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
