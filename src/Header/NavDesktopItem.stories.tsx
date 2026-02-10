import preview from '#.storybook/preview';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from '@emotion/styled';
import { NavDesktopItem } from './NavDesktopItem';

const meta = preview.meta({
  title: 'Components/Header/NavDesktopItem',
  component: NavDesktopItem,
});

const List = styled(NavigationMenu.List)`
  all: unset;
`;

export const Base = meta.story({
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
});

export const Focused = meta.story({
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
});
