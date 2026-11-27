import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { expect, userEvent, within } from 'storybook/test';
import { NavDesktopPipeline } from './NavDesktopPipeline';
import { createDesktopMenu } from './data';

const platform = createDesktopMenu().find((item) => item.id === 'platform');

const meta: Meta<typeof NavDesktopPipeline> = {
  title: 'Components/Header/NavDesktopPipeline',
  component: NavDesktopPipeline,
  args: {
    pipeline: platform?.pipeline,
  },
  parameters: {
    layout: 'padded',
    chromatic: { viewports: [1024, 1200] },
  },
  // NavigationMenu.Link needs a NavigationMenu context.
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ listStyle: 'none', padding: 0 }}>
          <NavigationMenu.Item>{storyFn()}</NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavDesktopPipeline>;

export const Default: Story = {};

export const KeyboardFocusMainPage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    await expect(
      canvas.getByRole('link', { name: /Code UI with fewer tokens/ })
    ).toHaveFocus();
  },
};

export const KeyboardFocusIntegration: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'React Native' });
    link.focus();
    await expect(link).toHaveFocus();
  },
};
