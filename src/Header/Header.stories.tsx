import React, { Decorator, Meta, StoryObj } from '@storybook/react';
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

const LightDecorator: Decorator = (Story, options) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '100vw',
      }}
      {...options.args}
    >
      <Story {...options} />
    </div>
  );
};

const DarkDecorator: Decorator = (Story, options) => {
  return (
    <div
      style={{
        backgroundColor: '#171C23',
        width: '100vw',
      }}
      {...options.args}
    >
      <Story {...options} />
    </div>
  );
};

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
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390, 1200] },
  },
};

export const Dark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  render: (props) => <Header {...props} />,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#171C23',
          width: '100vw',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390, 1200] },
  },
};

export const ActiveLight: Story = {
  args: {
    ...Light.args,
    desktopActive: 'Customers',
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390, 1200] },
  },
};

export const ActiveDark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
    desktopActive: 'Customers',
  },
  render: (props) => <Header {...props} />,
  decorators: [DarkDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390, 1200] },
  },
};

export const MobileLight: Story = {
  args: {
    ...Light.args,
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const MobileDark: Story = {
  args: {
    ...Light.args,
    theme: 'dark',
  },
  render: (props) => <Header {...props} />,
  decorators: [DarkDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const TabletLight: Story = {
  args: {
    ...Light.args,
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
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
  decorators: [DarkDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [834] },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileOpen: Story = {
  args: {
    ...Light.args,
    mobileOpen: true,
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390] },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const TabletOpen: Story = {
  args: {
    ...Light.args,
    mobileOpen: true,
  },
  render: (props) => <Header {...props} />,
  decorators: [LightDecorator],
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [834] },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
