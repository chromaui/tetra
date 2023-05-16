import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@storybook/theming';
import { within } from '@storybook/testing-library';
import { NavDesktopItem } from './NavDesktopItem';

const meta: Meta<typeof NavDesktopItem> = {
  title: 'Components/Header/NavDesktopItem',
  component: NavDesktopItem,
};

const { Root, List: RadixList } = NavigationMenu;

export default meta;
type Story = StoryObj<typeof NavDesktopItem>;

const List = styled(RadixList)`
  all: unset;
`;

export const Base: Story = {
  args: {
    content: {
      type: 'link',
      title: 'UI Tests',
      description: 'Pinpoint UI bugs down to the pixel, viewport, and browser.',
      icon: 'contrast',
      iconColor: 'teal500',
      href: '#',
    },
  },
  decorators: [
    (storyFn) => (
      <Root>
        <List>{storyFn()}</List>
      </Root>
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
      iconColor: 'teal500',
      href: '#',
    },
  },
  decorators: [
    (storyFn) => (
      <Root>
        <List>{storyFn()}</List>
      </Root>
    ),
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Focus link', async () => {
      const Link = await canvas.getByRole('link');
      await Link.focus();
    });
  },
};
