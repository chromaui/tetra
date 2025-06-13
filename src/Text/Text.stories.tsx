import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text Component',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, velit vel egestas rutrum, arcu ante suscipit mauris, eu eleifend mi ipsum et tellus.',
    variant: 'body16',
    alignment: 'start',
    fontWeight: 'regular',
    as: 'p',
    color: 'black',
  },
};

export const Responsive: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <Text
      as="h1"
      variant={{
        base: 'body16',
        sm: 'heading56',
        md: 'body18',
        xl: 'heading20',
      }}
    >
      {children}
    </Text>
  ),
};

export const Heading: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Text as="h1" variant="heading56">{`Heading 56 - ${children}`}</Text>
      <Text as="h1" variant="heading40">{`Heading 40 - ${children}`}</Text>
      <Text as="h1" variant="heading36">{`Heading 36 - ${children}`}</Text>
      <Text as="h1" variant="heading30">{`Heading 30 - ${children}`}</Text>
      <Text as="h1" variant="heading24">{`Heading 24 - ${children}`}</Text>
      <Text as="h1" variant="heading20">{`Heading 20 - ${children}`}</Text>
      <Text as="h1" variant="heading18">{`Heading 18 - ${children}`}</Text>
      <Text as="h1" variant="heading16">{`Heading 16 - ${children}`}</Text>
    </div>
  ),
};

export const Body: Story = {
  args: {
    ...Base.args,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, velit vel egestas rutrum, arcu ante suscipit mauris, eu eleifend mi ipsum et tellus. Integer pharetra diam interdum egestas consectetur. Sed mollis in lectus eget commodo. Cras non sodales elit. Ut ultricies porta ante, sit amet elementum urna commodo nec. Donec volutpat sed massa ac maximus. Curabitur nec imperdiet felis. Vivamus et velit non erat scelerisque rutrum vitae ac purus. Mauris congue facilisis orci scelerisque fermentum. Aenean viverra, felis id lobortis consectetur, lacus dolor cursus metus, ac volutpat lorem est ac risus. Aliquam ultricies massa vel sagittis vestibulum. Integer placerat, lacus id ultrices posuere, felis neque tristique est, a pretium justo urna faucibus dui. Etiam quis justo tempor, facilisis erat at, suscipit lacus.',
  },
  render: ({ children }) => (
    <div>
      <Text as="h1" variant="body18">{`Body 18 - ${children}`}</Text>
      <Text as="h1" variant="body16">{`Body 16 - ${children}`}</Text>
      <Text as="h1" variant="body14">{`Body 14 - ${children}`}</Text>
    </div>
  ),
};

export const Subheading: Story = {
  args: {
    ...Base.args,
    children: 'Lorem ipsum dolor sit amet',
  },
  render: ({ children }) => <Text variant="subheading">{children}</Text>,
};

export const Alignments: Story = {
  args: {
    ...Base.args,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, velit vel egestas rutrum, arcu ante suscipit mauris, eu eleifend mi ipsum et tellus. Integer pharetra diam interdum egestas consectetur. Sed mollis in lectus eget commodo. Cras non sodales elit. Ut ultricies porta ante, sit amet elementum urna commodo nec. Donec volutpat sed massa ac maximus. Curabitur nec imperdiet felis. Vivamus et velit non erat scelerisque rutrum vitae ac purus. Mauris congue facilisis orci scelerisque fermentum. Aenean viverra, felis id lobortis consectetur, lacus dolor cursus metus, ac volutpat lorem est ac risus. Aliquam ultricies massa vel sagittis vestibulum. Integer placerat, lacus id ultrices posuere, felis neque tristique est, a pretium justo urna faucibus dui. Etiam quis justo tempor, facilisis erat at, suscipit lacus.',
  },
  render: ({ children }) => (
    <div>
      <Text variant="body16" alignment="start">
        {children}
      </Text>
      <Text variant="body16" alignment="center">
        {children}
      </Text>
      <Text variant="body16" alignment="end">
        {children}
      </Text>
      <Text variant="body16" alignment="justify">
        {children}
      </Text>
    </div>
  ),
};
