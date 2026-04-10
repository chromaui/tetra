import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { within, userEvent } from 'storybook/test';
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
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const Collapsed: Story = {
  ...Dark,
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320] },
    a11y: {
      config: {
        rules: [
          {
            // Radix portal adds aria-hidden to content behind the overlay,
            // making the trigger still focusable. This is a known Radix
            // implementation detail, not an issue in our component.
            id: 'aria-hidden-focus',
            enabled: false,
          },
        ],
      },
    },
  },
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};
