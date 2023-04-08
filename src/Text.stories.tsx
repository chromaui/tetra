import React, { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    children: 'Hello World',
    variant: 'bodyMd',
    alignment: 'start',
    fontWeight: 'regular',
    as: 'p',
    color: 'black',
  },
};

export const Heading: Story = {
  args: {
    ...Base.args,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, velit vel egestas rutrum, arcu ante suscipit mauris, eu eleifend mi ipsum et tellus.',
  },
  render: ({ children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Text as="h1" variant="heading4xl">{`Heading 4Xl - ${children}`}</Text>
      <Text as="h1" variant="heading3xl">{`Heading 3Xl - ${children}`}</Text>
      <Text as="h1" variant="heading2xl">{`Heading 2Xl - ${children}`}</Text>
      <Text as="h1" variant="headingXl">{`Heading Xl - ${children}`}</Text>
      <Text as="h1" variant="headingLg">{`Heading Lg - ${children}`}</Text>
      <Text as="h1" variant="headingMd">{`Heading Md - ${children}`}</Text>
      <Text as="h1" variant="headingSm">{`Heading Sm - ${children}`}</Text>
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
      <Text variant="bodyLg">{children}</Text>
      <Text variant="bodyMd">{children}</Text>
      <Text variant="bodySm">{children}</Text>
    </div>
  ),
};
