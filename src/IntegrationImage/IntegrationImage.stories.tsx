import React, { Meta, StoryObj } from '@storybook/react';

import { IntegrationImage } from './IntegrationImage';
import { Icon } from '../Icon';

const meta: Meta<typeof IntegrationImage> = {
  title: 'Components/IntegrationImage',
  component: IntegrationImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IntegrationImage>;

export const Base: Story = {
  args: {
    backgroundColor: 'black',
    withConnector: true,
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ backgroundColor, withConnector }) => (
    <IntegrationImage
      backgroundColor={backgroundColor}
      withConnector={withConnector}
    >
      <Icon name="github" size={44} color="white" />
    </IntegrationImage>
  ),
};
