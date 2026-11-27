import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { within, userEvent, expect, waitFor } from 'storybook/test';
import { Header } from './Header';
import { defaultLinks } from './data';
import { SubNav } from '../SubNav';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
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
  globals: {
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { viewports: [940, 1024, 1280, 1536] },
  },
};

export const DesktopDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    ...DesktopLight.globals,
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const DesktopLightSticky: Story = {
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
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
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
export const DesktopDarkLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
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
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const DesktopLightActive: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'pricing',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopLightEnterpriseActive: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'enterprise',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkEnterpriseActive: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActiveId: 'enterprise',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const DesktopDarkActive: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActiveId: 'pricing',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const DesktopLightOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
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
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

// Keyboard only: tab to Platform, open it with Enter, move into the menu with
// the arrow key, then close it with Escape and check focus goes back.
export const DesktopDarkKeyboardFocus: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole('button', { name: 'Platform' });
    trigger.focus();
    await userEvent.keyboard('{enter}');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{arrowdown}');
    await waitFor(() =>
      expect(
        canvas.getByRole('link', { name: /Frontend-ready agents/ })
      ).toHaveFocus()
    );
    await userEvent.keyboard('{escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    // Leave the trigger focused to show the focus ring.
  },
};

export const DesktopLightKeyboardFocusInMenu: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole('button', { name: 'Platform' });
    trigger.focus();
    await userEvent.keyboard('{enter}');
    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{arrowdown}');
    await waitFor(() =>
      expect(
        canvas.getByRole('link', { name: /Code UI with fewer tokens/ })
      ).toHaveFocus()
    );
  },
};

export const TabletLight: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    backgrounds: { value: 'light' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const TabletDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
  play: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

export const TabletOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
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
    const body = within(document.body);
    const integrations = await body.findByRole('button', {
      name: 'Integrations',
    });
    integrations.focus();
    await userEvent.keyboard('{enter}');
    await expect(integrations).toHaveAttribute('aria-expanded', 'true');
  },
};

export const MobileOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
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

export const MobileOpenTall: Story = {
  ...MobileOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);

    const sections = [
      'View all features',
      'Integrations',
      'Use cases',
      'Customer stories',
      'Company',
    ];
    for (const section of sections) {
      const buttons = document.querySelectorAll('button');
      for (const btn of buttons) {
        if (btn.textContent?.trim().startsWith(section)) {
          await userEvent.click(btn);
          break;
        }
      }
    }
  },
};

export const MobileViewAllFeatures: Story = {
  ...MobileOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    await expect(MenuButton).toHaveAttribute('aria-expanded', 'true');
    const body = within(document.body);
    await userEvent.click(
      await body.findByRole('button', { name: 'View all features' })
    );
  },
};

export const MobileIntegrationsOpen: Story = {
  ...MobileOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    const body = within(document.body);
    await userEvent.click(
      await body.findByRole('button', { name: 'Integrations' })
    );
  },
};

export const DesktopFullWidth: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
  },
};

export const MobileFullWidth: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'xs' },
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
