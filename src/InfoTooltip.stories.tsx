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
  name: 'InfoTooltip',
};
