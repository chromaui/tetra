import React, { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../Button';
import { navDesktop } from './data';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
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
        right={
          <>
            <Button size="md" variant="outline" color="blue">
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
        right={
          <>
            <Button size="md" variant="outline" color="white">
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
