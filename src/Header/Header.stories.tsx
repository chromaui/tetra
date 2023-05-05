import React, { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../Button';
import { navDesktop, navMobile } from './data';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  args: {
    theme: 'light',
    activeSection: 'Features',
    navDesktop: navDesktop,
    navMobile: navMobile,
    breakpoint: 1024,
    right: (
      <>
        <Button size="sm" variant="outline" color="blue">
          Sign up
        </Button>
      </>
    ),
  },
  render: (props) => <Header {...props} />,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
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
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const ActiveSection: Story = {
  args: {
    ...Light.args,
    activeSection: 'Customers',
  },
  render: (props) => <Header {...props} />,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};
