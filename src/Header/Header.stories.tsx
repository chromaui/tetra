import React, { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Header } from './Header';
import { Button } from '../Button';
import { desktopData, mobileData } from './data';
import { Link } from '../Link';

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
    logoHeightDesktop: 22,
    logoHeightMobile: 24,
    desktopActive: undefined,
    desktopData,
    mobileData,
    desktopBreakpoint: 940,
    desktopRight: (
      <>
        <Link>Sign in</Link>
        <Button size="sm" variant="outline" color="blue">
          Sign up
        </Button>
      </>
    ),
    mobileBottom: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button size="sm" variant="outline" color="blue">
          Sign in
        </Button>
        <Button size="sm" variant="solid" color="blue">
          Sign up
        </Button>
      </div>
    ),
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

export const DesktopLightActive: Story = {
  args: {
    ...DesktopLight.args,
    desktopActive: 'Pricing',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkActive: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActive: 'Customers',
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
    ...DesktopLight.parameters,
  },
  decorators: [(storyFn) => <div style={{ height: '800px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.getByRole('button', {
      name: 'Features',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
    await canvas.findByLabelText('Features');
  },
};

export const DesktopDarkOpen: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  parameters: {
    ...DesktopLight.parameters,
    backgrounds: { default: 'dark' },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.getByRole('button', {
      name: 'Customers',
    });
    await userEvent.click(MenuButton, { pointerType: 'mouse' } as any);
    await canvas.findByLabelText('Customers');
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
    const MenuButton = await canvas.getByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const TabletViewMore: Story = {
  ...TabletOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.getByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    await userEvent.keyboard('{enter}');
  },
};

export const TabletExpandSubMenu: Story = {
  ...TabletOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.getByRole('button', {
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
    const MenuButton = await canvas.getByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    await userEvent.keyboard('{enter}');
  },
};
