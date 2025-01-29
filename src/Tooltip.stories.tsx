import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import { Tooltip } from './Tooltip';
import { Icon } from './Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Portal Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (storyFn) => (
      <div style={{ width: '800px', height: '600px' }}>{storyFn()}</div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    trigger: <Icon name="alert" color="slate600" />,
    copy: 'Stories capture the “known good” states of UI components. They’re a pragmatic, reproducible way to keep track of UI edge cases. Reuse stories to power automated tests.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    button.focus();
  },
  name: 'Tooltip',
};
