import preview from '#.storybook/preview';
import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import styled from '@emotion/styled';
import { getPlaceholderImgUrl } from '../../.storybook/getPlaceholderImgUrl';
import { AspectRatio } from './AspectRatio';

const Demo = styled.div`
  max-width: 20rem;

  & > * {
    background-color: #eee;
  }
`;

const meta = preview.meta({
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
});
type Story = StoryObj<typeof AspectRatio>;

export const Default = meta.story({
  args: {
    children: <img src={getPlaceholderImgUrl(1000, 1000)} alt="" />,
    ratio: '4/3',
  },
});

export const TallRatio = meta.story({
  args: {
    ...Default.input.args,
    ratio: '3/4',
  },
});
