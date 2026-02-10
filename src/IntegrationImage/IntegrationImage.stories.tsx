import preview from '#.storybook/preview';
import React from 'react';

import { IntegrationImage } from './IntegrationImage';
import { Icon } from '../Icon';

const meta = preview.meta({
  title: 'Components/IntegrationImage',
  component: IntegrationImage,
  tags: ['autodocs'],
});

export const Base = meta.story({
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
});
