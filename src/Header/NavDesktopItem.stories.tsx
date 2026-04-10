import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from '@emotion/styled';
import { NavDesktopItem } from './NavDesktopItem';

const meta: Meta<typeof NavDesktopItem> = {
  title: 'Components/Header/NavDesktopItem',
  component: NavDesktopItem,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Each story renders a single nav item in isolation,
            // outside of the full nav list structure, so the list
            // role hierarchy is incomplete by design.
            id: 'list',
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavDesktopItem>;

const List = styled(NavigationMenu.List)`
  all: unset;
`;

export const Base: Story = {
  args: {
    content: {
      type: 'link',
      title: 'UI Tests',
      description: 'Pinpoint UI bugs down to the pixel, viewport, and browser.',
      icon: 'contrast',
      iconColor: 'cyan500',
      href: '#',
    },
  },
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <List>{storyFn()}</List>
      </NavigationMenu.Root>
    ),
  ],
};

export const Focused: Story = {
  args: {
    content: {
      type: 'link',
      title: 'UI Tests',
      description: 'Pinpoint UI bugs down to the pixel, viewport, and browser.',
      icon: 'contrast',
      iconColor: 'cyan500',
      href: '#',
    },
  },
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <List>{storyFn()}</List>
      </NavigationMenu.Root>
    ),
  ],
  play: async ({ canvas, step }) => {
    await step('Focus link', async () => {
      const Link = await canvas.getByRole('link');
      await Link.focus();
    });
  },
};
