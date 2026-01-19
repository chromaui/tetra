import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';
import { DatePicker } from './DatePicker';
import { Label } from '../Form/Label';
import { VStack } from '../Stack';

const meta = {
  component: DatePicker,
  title: 'Forms/DatePicker',
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date">Select date</Label>
        <DatePicker {...args} id="date" />
      </div>
    </VStack>
  ),
};

export const WithValue: Story = {
  args: {
    value: new Date('2026-02-15'),
    placeholder: 'Select date',
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date-value">Select date</Label>
        <DatePicker {...args} id="date-value" />
      </div>
    </VStack>
  ),
};

export const WithMinDate: Story = {
  args: {
    placeholder: 'Select date',
    minDate: new Date(),
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date-min">Select date (no past dates)</Label>
        <DatePicker {...args} id="date-min" />
      </div>
    </VStack>
  ),
};

export const WithMinAndMaxDate: Story = {
  args: {
    placeholder: 'Select date',
    minDate: new Date('2026-01-01'),
    maxDate: new Date('2026-12-31'),
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date-range">Select date (2026 only)</Label>
        <DatePicker {...args} id="date-range" />
      </div>
    </VStack>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Select date',
    disabled: true,
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date-disabled">Select date</Label>
        <DatePicker {...args} id="date-disabled" />
      </div>
    </VStack>
  ),
};

export const Error: Story = {
  args: {
    placeholder: 'Select date',
    'aria-invalid': true,
  },
  render: (args) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="date-error">Select date</Label>
        <DatePicker {...args} id="date-error" />
      </div>
    </VStack>
  ),
};

export const Inverse: Story = {
  args: {
    placeholder: 'Select date',
    inverse: true,
  },
  render: (args) => (
    <div style={{ background: '#1a1d23', padding: '24px', minHeight: '300px' }}>
      <VStack gap={4} style={{ maxWidth: 600 }}>
        <div>
          <Label htmlFor="date-inverse" inverse>
            Select date
          </Label>
          <DatePicker {...args} id="date-inverse" />
        </div>
      </VStack>
    </div>
  ),
};
