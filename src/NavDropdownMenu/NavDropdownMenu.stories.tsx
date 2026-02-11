import preview from '#.storybook/preview';
import React from 'react';
import { within, userEvent } from 'storybook/test';
import { NavDropdownMenu } from './NavDropdownMenu';

const meta = preview.meta({
  title: 'Components/NavDropdownMenu',
  component: NavDropdownMenu,
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
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
});

export const Dark = meta.story({
  args: {
    ...Light.input.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: Light.play,
});
