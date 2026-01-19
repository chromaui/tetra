import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';
import { Autocomplete, AutocompleteOption } from './Autocomplete';
import { Label } from '../Form/Label';
import { VStack } from '../Stack';

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
  component: Autocomplete,
  title: 'Forms/Autocomplete',
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: airports,
    placeholder: 'Search for an airport',
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="airport">Select airport</Label>
        <Autocomplete {...args} id="airport" />
      </div>
    </VStack>
  ),
};

export const WithValue: Story = {
  args: {
    options: airports,
    value: 'SYD',
    placeholder: 'Search for an airport',
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="airport-value">Select airport</Label>
        <Autocomplete {...args} id="airport-value" />
      </div>
    </VStack>
  ),
};

export const Disabled: Story = {
  args: {
    options: airports,
    placeholder: 'Search for an airport',
    disabled: true,
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="airport-disabled">Select airport</Label>
        <Autocomplete {...args} id="airport-disabled" />
      </div>
    </VStack>
  ),
};

export const Error: Story = {
  args: {
    options: airports,
    placeholder: 'Search for an airport',
    'aria-invalid': true,
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="airport-error">Select airport</Label>
        <Autocomplete {...args} id="airport-error" />
      </div>
    </VStack>
  ),
};

export const Inverse: Story = {
  args: {
    options: airports,
    placeholder: 'Search for an airport',
    inverse: true,
  },
  render: (args) => (
    <div style={{ background: '#1a1d23', padding: '24px', minHeight: '300px' }}>
      <VStack gap={4} style={{ maxWidth: 600 }}>
        <div>
          <Label htmlFor="airport-inverse" inverse>
            Select airport
          </Label>
          <Autocomplete {...args} id="airport-inverse" />
        </div>
      </VStack>
    </div>
  ),
};
