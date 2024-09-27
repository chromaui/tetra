import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import { NormalizeArea } from './NormalizeArea';

const Demo = styled.div`
  background-color: #333;
  padding: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));

  img {
    filter: brightness(0) invert(1);
  }
`;

const projects = [
  {
    height: 288,
    width: 746,
    logoAlt: 'Monday.com',
    logoUrl: 'https://media.graphassets.com/BBM6cBTiTuLlPvAGtXab',
  },
  {
    height: 33,
    width: 118,
    logoAlt: 'Shopify',
    logoUrl: 'https://media.graphassets.com/GNpyBL6rTJyyruBSsG4v',
  },
  {
    height: 32,
    width: 130,
    logoAlt: 'Adobe',
    logoUrl: 'https://media.graphassets.com/voJpj5ySbjALyJ7RUlfw',
  },
  {
    height: 32,
    width: 120,
    logoAlt: 'BBC',
    logoUrl: 'https://media.graphassets.com/To5iQm5VRRGdr5upBBml',
  },
  {
    height: 99,
    width: 284,
    logoAlt: 'Audi',
    logoUrl: 'https://media.graphassets.com/rdYLCbE5Qgm5xGeUfxxJ',
  },
  {
    height: 80,
    width: 80,
    logoAlt: 'WordPress',
    logoUrl: 'https://media.graphassets.com/b6N8K1VSuym28UndT2wW',
  },
];

const meta: Meta<typeof NormalizeArea> = {
  title: 'Utilities/NormalizeArea',
  component: NormalizeArea,
  argTypes: {
    height: { control: false },
    width: { control: false },
  },
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
  render: (args) => (
    <>
      {projects.map(({ height, logoAlt, logoUrl, width }) => (
        <NormalizeArea key={logoAlt} {...args} height={height} width={width}>
          <img src={logoUrl} alt={logoAlt} />
        </NormalizeArea>
      ))}
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof NormalizeArea>;

export const Default: Story = {
  args: {
    idealArea: 10000,
  },
};

export const SmallerIdealArea: Story = {
  args: {
    idealArea: 5000,
  },
};

export const LargerIdealArea: Story = {
  args: {
    idealArea: 20000,
  },
};

export const CSSVarIdealArea: Story = {
  render: (args) => (
    <div
      style={
        { '--ideal-area': 2000, display: 'contents' } as React.CSSProperties
      }
    >
      {projects.map(({ height, logoAlt, logoUrl, width }) => (
        <NormalizeArea key={logoAlt} {...args} height={height} width={width}>
          <img src={logoUrl} alt={logoAlt} />
        </NormalizeArea>
      ))}
    </div>
  ),
  args: {
    idealArea: 20000,
  },
};

export const None = {
  render: () => (
    <>
      {projects.map(({ logoAlt, logoUrl }) => (
        <img
          key={logoAlt}
          src={logoUrl}
          alt={logoAlt}
          style={{ maxWidth: 100 }}
        />
      ))}
    </>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
