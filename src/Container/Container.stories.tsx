import React, { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';
import { Placeholder } from '../Placeholder';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <Container marginTop={10} marginBottom={10}>
        <Placeholder height={600} color="orange100" />
      </Container>
    );
  },
};
