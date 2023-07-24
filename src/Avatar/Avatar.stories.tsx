import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: ({ src, ...args }) => (
    <div>
      <Avatar isLoading {...args} />
      <Avatar username="Tom Coleman" {...args} />
      <Avatar
        username="Tom Coleman"
        src={src || 'https://avatars2.githubusercontent.com/u/132554'}
        {...args}
      />
    </div>
  ),
};

export const Large = { args: { ...Base.args, size: 'large' } };

export const Medium = { args: Base.args };

export const Small = { args: { ...Base.args, size: 'small' } };

export const Tiny = { args: { ...Base.args, size: 'tiny' } };

export const Organization = {
  args: {
    type: 'organization',
    username: 'Chromatic',
    src: '/chromatic-logo-square.png',
  },
};
