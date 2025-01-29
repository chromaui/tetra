import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Portal Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (storyFn) => (
      <div style={{ width: '1200px', height: '900px' }}>{storyFn()}</div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    copy: 'Stories capture the “known good” states of UI components. They’re a pragmatic, reproducible way to keep track of UI edge cases. Reuse stories to power automated tests.',
    link: {
      title: 'Learn more',
      href: '/features/stories',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    button.click();
  },
  name: 'AlertDialog',
};
