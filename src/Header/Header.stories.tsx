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
  render: () => (
    <div
      style={{
        backgroundColor: '#fff',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header
        theme="light"
        navDesktop={navDesktop}
        navMobile={navMobile}
        breakpoint={1024}
        right={
          <>
            <Button size="sm" variant="outline" color="blue">
              Sign up
            </Button>
          </>
        }
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const Dark: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: '#171C23',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header
        theme="dark"
        navDesktop={navDesktop}
        navMobile={navMobile}
        breakpoint={980}
        right={
          <>
            <Button size="sm" variant="outline" color="white">
              Sign up
            </Button>
          </>
        }
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
