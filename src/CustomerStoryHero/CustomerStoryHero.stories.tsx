import preview from '#.storybook/preview';
import { StoryObj } from '@storybook/react-vite';
import React from 'react';
import { CustomerStoryHero } from './CustomerStoryHero';

const meta = preview.meta({
  title: 'Components/CustomerStoryHero',
  component: CustomerStoryHero,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: '90vw' }}>
        <Story />
      </div>
    ),
  ],
});

type Story = StoryObj<typeof CustomerStoryHero>;

export const Base = meta.story({
  args: {
    items: [
      {
        imgPath: 'https://placehold.co/900x400',
        imgAlt: 'placeholder image',
        caption: 'Caption 1',
        position: 'first',
      },
      {
        imgPath: 'https://placehold.co/300x400',
        imgAlt: 'placeholder image',
        caption: 'Caption 2',
        position: 'last',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => <CustomerStoryHero items={args.items} />,
});
