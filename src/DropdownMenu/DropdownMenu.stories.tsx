import preview from '#.storybook/preview';
import React from 'react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem, DropdownMenuCheckboxItem } from './DropdownItems';
import { Icon } from '../Icon';
import { within } from 'storybook/test';

const meta = preview.meta({
  title: 'Components/Dropdown',
  component: DropdownMenu,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button');
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
});

export const ClosedLight = meta.story({
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
});

export const ClosedDark = meta.story({
  ...ClosedLight.input,
  args: {
    ...ClosedLight.input.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const LabelWithIconLight = meta.story({
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
});

export const LabelWithIconDark = meta.story({
  ...LabelWithIconLight.input,
  args: {
    ...LabelWithIconLight.input.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const DisabledItemsLight = meta.story({
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem>CLI</DropdownMenuItem>
      <DropdownMenuItem disabled>Github Action</DropdownMenuItem>
      <DropdownMenuItem>Config File</DropdownMenuItem>
    </DropdownMenu>
  ),
  args: LabelWithIconLight.input.args,
});

export const DisabledItemsDark = meta.story({
  ...DisabledItemsLight.input,
  args: {
    ...DisabledItemsLight.input.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const CheckboxItemsLight = meta.story({
  decorators: [(storyFn) => <div style={{ height: '400px' }}>{storyFn()}</div>],
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuCheckboxItem checked>CLI</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Github Action</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked>Config File</DropdownMenuCheckboxItem>
    </DropdownMenu>
  ),
  args: LabelWithIconLight.input.args,
});

export const CheckboxItemsDark = meta.story({
  ...CheckboxItemsLight.input,
  args: {
    ...CheckboxItemsLight.input.args,
    variant: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

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
//   globals: {
//     backgrounds: { value: 'dark' },
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
//   globals: {
//     backgrounds: { value: 'dark' },
//   },
//   play: LightOpen.play,
// };
