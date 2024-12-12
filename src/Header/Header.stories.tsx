import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Header } from './Header';
import { defaultLinks } from './data';
import { SubNav } from '../SubNav';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

// Radix uses PointerEvent for all interactions
// see: https://github.com/radix-ui/primitives/issues/1220

export const DesktopLight: Story = {
  args: {
    theme: 'light',
    links: defaultLinks,
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [940, 1024, 1280, 1536] },
    viewport: {
      defaultViewport: 'lg',
    },
  },
};

export const DesktopDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  parameters: {
    ...DesktopLight.parameters,
    backgrounds: { default: 'dark' },
  },
};

export const DesktopLightSticky: Story = {
  ...DesktopLight,
  args: {
    ...DesktopLight.args,
    isSticky: true,
  },
};

export const DesktopDarkSticky: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    isSticky: true,
  },
  parameters: {
    ...DesktopLight.parameters,
    backgrounds: { default: 'dark' },
  },
};

export const DesktopLoggedOut: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: false,
  },
};

export const DesktopLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
  },
};

export const DesktopLoggedOutMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    maintenanceMode: true,
  },
};

export const DesktopLoggedInMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    maintenanceMode: true,
  },
};

export const WithSubNav: Story = {
  render: (args) => (
    <>
      <Header {...args} />
      <SubNav
        theme="dark"
        label="features"
        items={[
          { id: '1', label: 'UI Tests', href: '/ui-tests' },
          {
            id: '2',
            label: 'Visual test',
            href: '/visual-tests',
            isActive: true,
          },
          { id: '3', label: 'Interaction test', href: '/interaction-tests' },
          { id: '4', label: 'TurboSnap', href: '/turbosnap', external: true },
        ]}
      />
    </>
  ),
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  parameters: {
    ...DesktopLight.parameters,
    backgrounds: { default: 'dark' },
  },
};

export const DesktopLightActive: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'features',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkActive: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActiveId: 'pricing',
  },
  parameters: {
    ...DesktopLight.parameters,
    backgrounds: { default: 'dark' },
  },
};

export const DesktopLightOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
    viewport: {
      defaultViewport: 'lg',
    },
  },
  decorators: [(storyFn) => <div style={{ height: '800px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const DesktopDarkOpen: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
    viewport: {
      defaultViewport: 'lg',
    },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const TabletLight: Story = {
  args: {
    ...DesktopLight.args,
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
    viewport: {
      defaultViewport: 'md',
    },
  },
};

export const TabletDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
    viewport: {
      defaultViewport: 'md',
    },
    backgrounds: { default: 'dark' },
  },
};

export const TabletOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
    viewport: {
      defaultViewport: 'md',
    },
  },
  decorators: [(storyFn) => <div style={{ height: '900px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const TabletExpandSubMenu: Story = {
  ...TabletOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard('{enter}');
  },
};

export const MobileOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 640, 768, 939] },
    viewport: {
      defaultViewport: 'xsm',
    },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const DesktopFullWidth: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const MobileFullWidth: Story = {
  args: {
    ...DesktopLight.args,
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'xsm',
    },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};
