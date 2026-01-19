import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';
import { FlightBooking } from './FlightBooking';
import { AutocompleteOption } from '../Autocomplete';

const airports: AutocompleteOption[] = [
  { value: 'SYD', label: 'SYD – Sydney Airport, Australia' },
  { value: 'MEL', label: 'MEL – Melbourne Airport (Tullamarine), Australia' },
  { value: 'LAX', label: 'LAX – Los Angeles International Airport, USA' },
  {
    value: 'JFK',
    label: 'JFK – John F. Kennedy International Airport, New York, USA',
  },
  { value: 'LHR', label: 'LHR – Heathrow Airport, London, UK' },
  { value: 'CDG', label: 'CDG – Charles de Gaulle Airport, Paris, France' },
  {
    value: 'ATL',
    label: 'ATL – Hartsfield–Jackson Atlanta International Airport, USA',
  },
  { value: 'DXB', label: 'DXB – Dubai International Airport, UAE' },
  { value: 'HKG', label: 'HKG – Hong Kong International Airport, Hong Kong' },
  { value: 'BNE', label: 'BNE – Brisbane Airport, Australia' },
  { value: 'PER', label: 'PER – Perth Airport, Australia' },
  { value: 'DFW', label: 'DFW – Dallas Fort Worth International Airport, USA' },
];

const meta = {
  component: FlightBooking,
  title: 'Components/FlightBooking',
  tags: ['autodocs'],
  args: {
    airports,
    onSearch: fn(),
  },
} satisfies Meta<typeof FlightBooking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
      <FlightBooking {...args} />
    </div>
  ),
};

export const Inverse: Story = {
  args: {
    inverse: true,
  },
  render: (args) => (
    <div style={{ background: '#0f1114', padding: '48px', minHeight: '600px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FlightBooking {...args} />
      </div>
    </div>
  ),
};

export const Mobile: Story = {
  args: {},
  render: (args) => (
    <div style={{ maxWidth: 375, margin: '0 auto', padding: '16px' }}>
      <FlightBooking {...args} />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
