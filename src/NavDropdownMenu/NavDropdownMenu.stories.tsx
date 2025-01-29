import React, { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import { NavDropdownMenu } from './NavDropdownMenu';

const meta: Meta<typeof NavDropdownMenu> = {
  title: 'Portal Components/NavDropdownMenu',
  component: NavDropdownMenu,
};

export default meta;
type Story = StoryObj<typeof NavDropdownMenu>;

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
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
    await userEvent.keyboard('{arrowDown}');
    await userEvent.keyboard('{arrowDown}');
  },
};

export const Dark: Story = {
  args: {
    ...Light.args,
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  play: Light.play,
};
