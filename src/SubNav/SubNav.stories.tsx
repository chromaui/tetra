import preview from '#.storybook/preview';
import React from 'react';
import { within, userEvent } from 'storybook/test';
import { SubNav } from './SubNav';

const meta = preview.meta({
  title: 'Components/SubNav',
  component: SubNav,
  parameters: {
    layout: 'fullscreen',
  },
});

const features = [
  { id: '1', label: 'UI Tests', href: '/ui-tests' },
  { id: '2', label: 'Visual test', href: '/visual-tests', isActive: true },
  { id: '3', label: 'Interaction test', href: '/interaction-tests' },
  { id: '4', label: 'TurboSnap', href: '/turbosnap', external: true },
];

export const Light = meta.story({
  args: {
    label: 'Features',
    items: features,
  },
});

export const Dark = meta.story({
  args: {
    ...Light.input.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const Collapsed = meta.story({
  ...Dark.input,
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
});
