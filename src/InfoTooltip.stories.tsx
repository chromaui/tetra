import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, within } from '@storybook/test';

import { InfoTooltip } from './InfoTooltip';

const meta: Meta<typeof InfoTooltip> = {
  title: 'Portal Components/InfoTooltip',
  component: InfoTooltip,
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
type Story = StoryObj<typeof InfoTooltip>;

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
    button.focus();
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  },
  name: 'InfoTooltip',
};
