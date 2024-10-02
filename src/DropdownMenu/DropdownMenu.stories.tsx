import React, { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem, DropdownMenuCheckboxItem } from './DropdownItems';
import { Icon } from '../Icon';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown',
  component: DropdownMenu,
  play: async ({ canvasElement }) => {
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
  parameters: {
    backgrounds: { default: 'dark' },
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
  parameters: {
    backgrounds: { default: 'dark' },
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
  parameters: {
    backgrounds: { default: 'dark' },
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
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const ItemsLight: Story = {
  // decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuCheckboxItem checked>Astro</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Remix</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Next.js</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Nuxt.js</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>SvelteKit</DropdownMenuCheckboxItem>
    </DropdownMenu>
  ),
  args: {
    label: (
      <>
        Select frameworks
        <Icon name="cog" aria-hidden size={12} />
      </>
    ),
  },
};
