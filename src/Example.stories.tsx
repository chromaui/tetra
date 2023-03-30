import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Example } from '.';

export default {
  title: 'Example',
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

export const Default = {
  args: {
    text: 'Clicked this many times:',
  },
};
export const Primary = {
  args: {
    ...Default.args,
    primary: true,
  },
};
