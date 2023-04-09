import React, { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';
import { Placeholder } from '../Placeholder';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Base: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <Grid mt={4} mb={4}>
        <Grid.Column start={1} width={4}>
          <Placeholder color="orange100" />
        </Grid.Column>
        <Grid.Column start={5} width={4}>
          <Placeholder color="blue100" />
        </Grid.Column>
        <Grid.Column start={9} width={4}>
          <Placeholder color="yellow100" />
        </Grid.Column>
      </Grid>
      <Grid mb={4}>
        <Grid.Column start={1} width={6}>
          <Placeholder color="purple100" />
        </Grid.Column>
        <Grid.Column start={7} width={6}>
          <Placeholder color="pink100" />
        </Grid.Column>
      </Grid>
      <Grid mb={4}>
        <Grid.Column>
          <Placeholder color="teal100" />
        </Grid.Column>
      </Grid>
    </>
  ),
};
