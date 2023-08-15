import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { footerColumns, footerSocialLinks, homeLink } from './data';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Base: Story = {
  args: {
    columns: footerColumns,
    socialLinks: footerSocialLinks,
    homeLink,
  },
};

export const Inverse: Story = {
  args: {
    ...Base.args,
    theme: 'dark',
  },
};
