import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem, DropdownMenuCheckboxItem } from './DropdownItems';
import { Icon } from '../Icon';
import { within } from '@storybook/test';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown',
  component: DropdownMenu,
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

// Simple closed
// Disabled
// Label with icon
// Checkbox item
// Checkbox Selected

// export const WithIcon: Story = {
//   args: {
//     items: features,
//     label: (
//       <>
//         Filter
//         <Icon name="filter" aria-hidden size={12} />
//       </>
//     ),
//   },
// };

// export const DarkClosed: Story = {
//   args: {
//     ...LightClosed.args,
//     variant: 'dark',
//   },
//   parameters: {
//     backgrounds: { default: 'dark' },
//   },
// };

// export const LightOpen: Story = {
//   args: {
//     label: 'Features',
//     items: features,
//   },
//   decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const MenuButton = await canvas.findByRole('button', {
//       name: 'Features',
//     });
//     MenuButton.focus();
//     await userEvent.keyboard('{enter}');
//   },
// };

// export const DarkOpen: Story = {
//   args: {
//     ...LightOpen.args,
//     variant: 'dark',
//   },
//   parameters: {
//     backgrounds: { default: 'dark' },
//   },
//   play: LightOpen.play,
// };
