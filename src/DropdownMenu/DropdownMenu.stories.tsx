import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem, DropdownMenuCheckboxItem } from './DropdownItems';
import { Icon } from '../Icon';
import { within } from 'storybook/test';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown',
  component: DropdownMenu,
  parameters: {
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
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button');
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const ClosedLight: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem>CLI</DropdownMenuItem>
      <DropdownMenuItem>Github Action</DropdownMenuItem>
      <DropdownMenuItem>Config File</DropdownMenuItem>
    </DropdownMenu>
  ),
  play: async () => {},
  args: {
    label: 'Filter config options',
  },
};

export const ClosedDark: Story = {
  ...ClosedLight,
  args: {
    ...ClosedLight.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const LabelWithIconLight: Story = {
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem>CLI</DropdownMenuItem>
      <DropdownMenuItem>Github Action</DropdownMenuItem>
      <DropdownMenuItem>Config File</DropdownMenuItem>
    </DropdownMenu>
  ),
  args: {
    label: (
      <>
        Filter config options
        <Icon name="filter" aria-hidden size={12} />
      </>
    ),
  },
};

export const LabelWithIconDark: Story = {
  ...LabelWithIconLight,
  args: {
    ...LabelWithIconLight.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async ({ canvasElement, userEvent }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button');
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const DisabledItemsLight: Story = {
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem>CLI</DropdownMenuItem>
      <DropdownMenuItem disabled>Github Action</DropdownMenuItem>
      <DropdownMenuItem>Config File</DropdownMenuItem>
    </DropdownMenu>
  ),
  args: LabelWithIconLight.args,
};

export const DisabledItemsDark: Story = {
  ...DisabledItemsLight,
  args: {
    ...DisabledItemsLight.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async ({ canvasElement, userEvent }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button');
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const CheckboxItemsLight: Story = {
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuCheckboxItem checked>CLI</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Github Action</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked>Config File</DropdownMenuCheckboxItem>
    </DropdownMenu>
  ),
  args: LabelWithIconLight.args,
};

export const CheckboxItemsDark: Story = {
  ...CheckboxItemsLight,
  args: {
    ...CheckboxItemsLight.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async ({ canvasElement, userEvent }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button');
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};
