import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from '@emotion/styled';
import { getPlaceholderImgUrl } from '../../.storybook/getPlaceholderImgUrl';
import { AspectRatio } from './AspectRatio';

const Demo = styled.div`
  max-width: 20rem;

  & > * {
    background-color: #eee;
  }
`;

const meta: Meta<typeof AspectRatio> = {
  title: 'Utilities/AspectRatio',
  component: AspectRatio,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    children: <img src={getPlaceholderImgUrl(1000, 1000)} alt="" />,
    ratio: '4/3',
  },
};

export const TallRatio: Story = {
  args: {
    ...Default.args,
    ratio: '3/4',
  },
};
