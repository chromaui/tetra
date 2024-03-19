import React, { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { SubNav } from './SubNav';

const meta: Meta<typeof SubNav> = {
  title: 'Components/SubNav',
  component: SubNav,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SubNav>;

const features = [
  { id: '1', label: 'UI Tests', href: '/ui-tests' },
  { id: '2', label: 'Visual test', href: '/visual-tests', isActive: true },
  { id: '3', label: 'Interaction test', href: '/interaction-tests' },
  { id: '4', label: 'TurboSnap', href: '/turbosnap', external: true },
];

export const Light: Story = {
  args: {
    label: 'Features',
    items: features,
  },
};

export const Dark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Collapsed: Story = {
  ...Dark,
  parameters: {
    backgrounds: { default: 'dark' },
    chromatic: {
      cropToViewport: true,
      modes: {
        short_xsm: {
          viewport: {
            width: 320,
            height: 150,
          },
        },
      },
    },
    viewport: {
      viewports: {
        short_xsm: {
          name: 'short_xsm',
          styles: { width: '320px', height: '150px' },
        },
      },
      defaultViewport: 'short_xsm',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const Collapsed2: Story = {
  ...Dark,
  parameters: {
    backgrounds: { default: 'dark' },
    chromatic: {
      cropToViewport: true,
      modes: {
        short_xsm: {
          viewport: {
            width: 320,
            height: 150,
          },
        },
      },
    },
    viewport: {
      viewports: {
        short_xsm: {
          name: 'short_xsm',
          styles: { width: '320px', height: '150px' },
        },
      },
      defaultViewport: 'short_xsm',
    },
  },
  decorators: [
    (StoryFn) => <div style={{ width: 320, height: 150 }}>{StoryFn()}</div>,
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};
