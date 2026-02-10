import preview from '#.storybook/preview';
import React from 'react';
import { within, userEvent } from 'storybook/test';
import { Header } from './Header';
import { defaultLinks } from './data';
import { SubNav } from '../SubNav';

const meta = preview.meta({
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
});

// Radix uses PointerEvent for all interactions
// see: https://github.com/radix-ui/primitives/issues/1220

export const DesktopLight = meta.story({
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
});

export const DesktopDark = meta.story({
  args: {
    ...DesktopLight.input.args,
    theme: 'dark',
  },
  globals: {
    ...DesktopLight.input.globals,
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.input.parameters,
  },
});

export const DesktopLightSticky = meta.story({
  args: {
    ...DesktopLight.input.args,
    isSticky: true,
  },
});

export const DesktopDarkSticky = meta.story({
  args: {
    ...DesktopLight.input.args,
    theme: 'dark',
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const DesktopLoggedOut = meta.story({
  args: {
    ...DesktopLight.input.args,
    loggedIn: false,
  },
});

export const DesktopLoggedIn = meta.story({
  args: {
    ...DesktopLight.input.args,
    loggedIn: true,
  },
});
export const DesktopDarkLoggedIn = meta.story({
  args: {
    ...DesktopLight.input.args,
    loggedIn: true,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
});

export const DesktopLoggedOutMaintenance = meta.story({
  args: {
    ...DesktopLight.input.args,
    maintenanceMode: true,
  },
});

export const DesktopLoggedInMaintenance = meta.story({
  args: {
    ...DesktopLight.input.args,
    loggedIn: true,
    maintenanceMode: true,
  },
});

export const WithSubNav = meta.story({
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
    ...DesktopLight.input.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.input.parameters,
  },
});

export const DesktopLightActive = meta.story({
  args: {
    ...DesktopLight.input.args,
    desktopActiveId: 'pricing',
  },
  parameters: {
    ...DesktopLight.input.parameters,
  },
});

export const DesktopDarkActive = meta.story({
  args: {
    ...DesktopLight.input.args,
    theme: 'dark',
    desktopActiveId: 'pricing',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.input.parameters,
  },
});

export const DesktopLightOpen = meta.story({
  args: {
    ...DesktopLight.input.args,
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
});

export const DesktopDarkOpen = meta.story({
  args: {
    ...DesktopLight.input.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: DesktopLightOpen.input.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
});

export const TabletLight = meta.story({
  args: {
    ...DesktopLight.input.args,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
});

export const TabletDark = meta.story({
  args: {
    ...DesktopLight.input.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
});

export const TabletOpen = meta.story({
  args: {
    ...DesktopLight.input.args,
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
});

export const TabletExpandSubMenu = meta.story({
  ...TabletOpen.input,
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
});

export const MobileOpen = meta.story({
  args: {
    ...DesktopLight.input.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
  decorators: DesktopLightOpen.input.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
});

export const DesktopFullWidth = meta.story({
  args: {
    ...DesktopLight.input.args,
    fullWidth: true,
  },
});

export const MobileFullWidth = meta.story({
  args: {
    ...DesktopLight.input.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  decorators: DesktopLightOpen.input.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
});
