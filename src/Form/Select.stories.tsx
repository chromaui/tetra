import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Select } from './Select';
import { Label } from './Label';
import { VStack } from '../Stack';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: ({ inverse }) => (
    <VStack gap={5} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label inverse={inverse} htmlFor="default-select">
          Default
        </Label>
        <Select inverse={inverse} id="default-select">
          <option value="">Select an option</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </Select>
      </div>
      <div>
        <Label inverse={inverse} htmlFor="selected">
          With Selection
        </Label>
        <Select inverse={inverse} id="selected" defaultValue="banana">
          <option value="">Select an option</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </Select>
      </div>
      <div>
        <Label inverse={inverse} htmlFor="disabled-select">
          Disabled
        </Label>
        <Select inverse={inverse} id="disabled-select" disabled>
          <option value="">Select an option</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </Select>
      </div>
      <div>
        <Label inverse={inverse} htmlFor="error-select">
          Error
        </Label>
        <Select
          inverse={inverse}
          id="error-select"
          aria-invalid="true"
          defaultValue="invalid"
        >
          <option value="invalid">Invalid selection</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </Select>
      </div>
    </VStack>
  ),
};

export const Inverse: Story = {
  ...Default,

  args: {
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
