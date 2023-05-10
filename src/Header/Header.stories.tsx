import React, { Meta, StoryObj } from '@storybook/react';
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

export const Light: Story = {
  args: {
    theme: 'light',
    desktopActive: undefined,
    desktopData: desktopData,
    mobileData: mobileData,
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
        <Button size="sm" variant="solid" color="blue">
          Sign up
        </Button>
        <Button size="sm" variant="outline" color="blue">
          Sign In
        </Button>
      </div>
    ),
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 440, 600, 900] },
  },
};

export const Dark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 440, 600, 900] },
    backgrounds: { default: 'dark' },
  },
};

export const ActiveLight: Story = {
  args: {
    ...Light.args,
    desktopActive: 'Customers',
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 440, 600, 900] },
  },
};

export const ActiveDark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
    desktopActive: 'Customers',
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [320, 440, 600, 900] },
    backgrounds: { default: 'dark' },
  },
};

export const MobileLight: Story = {
  args: {
    ...Light.args,
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const MobileDark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile',
    },
    backgrounds: { default: 'dark' },
  },
};

export const TabletLight: Story = {
  args: {
    ...Light.args,
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [834] },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const TabletDark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [834] },
    viewport: {
      defaultViewport: 'tablet',
    },
    backgrounds: { default: 'dark' },
  },
};

export const MobileOpen: Story = {
  args: {
    ...Light.args,
    mobileOpen: true,
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const TabletOpen: Story = {
  args: {
    ...Light.args,
    mobileOpen: true,
  },
  render: (props) => <Header {...props} />,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [834] },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
