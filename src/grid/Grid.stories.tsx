import React, { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Base: Story = {
  args: {},
};

export const Sizes: Story = {
  args: {
    ...Base.args,
  },
  render: ({ children }) => (
    <>
      <Grid>
        <Grid.Column start={8}>Hello World</Grid.Column>
      </Grid>
    </>
  ),
};
