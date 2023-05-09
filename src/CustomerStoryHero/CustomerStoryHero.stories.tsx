import React, { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { CustomerStoryHero } from './CustomerStoryHero';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof CustomerStoryHero> = {
  title: 'Components/CustomerStoryHero',
  component: CustomerStoryHero,
  tags: ['autodocs'],
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
      }
    ]
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ items }) => (
    <CustomerStoryHero items={items} />
  ),
};

export const OneByTwo: Story = {
  args: {
    items: [
      {
        imgPath: 'https://placehold.co/552x400',
        imgAlt: 'placeholder image',
        caption: 'Caption 1',
        position: 'first',
      },
      {
        imgPath: 'https://placehold.co/260x400',
        imgAlt: 'placeholder image',
        caption: 'Caption 2',
        position: 'last',
      },
      {
        imgPath: 'https://placehold.co/260x400',
        imgAlt: 'placeholder image',
        caption: 'Caption 3',
        position: 'last',
      },
    ]
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ items }) => (
    <CustomerStoryHero items={items} />
  ),
};
