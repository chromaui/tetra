import React, { Meta, StoryObj } from '@storybook/react';
import { CustomerStoryHero } from './CustomerStoryHero';

const meta: Meta<typeof CustomerStoryHero> = {
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
};

export default meta;
type Story = StoryObj<typeof CustomerStoryHero>;

export const Base: Story = {
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
  render: ({ items }) => <CustomerStoryHero items={items} />,
};
