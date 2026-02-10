import preview from '#.storybook/preview';
import React from 'react';

import { Avatar } from './Avatar';

const meta = preview.meta({
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
});

export const Base = meta.story({
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
});

export const Large = meta.story({
  args: { ...Base.input.args, size: 'large' },
});

export const Medium = meta.story({ args: Base.input.args });

export const Small = meta.story({
  args: { ...Base.input.args, size: 'small' },
});

export const Tiny = meta.story({ args: { ...Base.input.args, size: 'tiny' } });

export const Organization = meta.story({
  args: {
    type: 'organization',
    username: 'Chromatic',
    src: '/chromatic-logo-square.png',
  },
});
