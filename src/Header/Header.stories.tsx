import React, { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../Button';
import { navDesktop, navMobile } from './data';
import { Link } from '../Link';
import { LinksContextProvider } from '../_contexts/linkContexts';
import { FC, ReactNode } from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

const navLinks = {
  home: { url: '/', linkWrapper: Wrapper },
  whyStorybook: {
    url: '/docs/react/get-started/why-storybook',
    linkWrapper: Wrapper,
  },
  guides: { url: '/docs', linkWrapper: Wrapper },
  changelog: { url: '/releases', linkWrapper: Wrapper },
  telemetry: { url: '/telemetry/', linkWrapper: Wrapper },
  integrations: { url: '/integrations/', linkWrapper: Wrapper },
  getInvolved: { url: '/community/', linkWrapper: Wrapper },
};

export const Light: Story = {
  args: {
    theme: 'light',
    activeSection: undefined,
    navDesktop: navDesktop,
    navMobile: navMobile,
    breakpoint: 1024,
    right: (
      <>
        <Link>Sign in</Link>
        <Button size="sm" variant="outline" color="blue">
          Sign up
        </Button>
      </>
    ),
  },
  render: (props) => <Header {...props} />,
  decorators: [
    (Story) => (
      <LinksContextProvider value={navLinks}>
        <div
          style={{
            backgroundColor: '#fff',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Story />
        </div>
      </LinksContextProvider>
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
