import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Input } from './Input';
import { Label } from './Label';
import { VStack } from '../Stack';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: ({ inverse }) => (
    <VStack gap={4} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
      <div>
        <Label htmlFor="default" inverse={inverse}>
          Default
        </Label>
        <Input id="default" placeholder="Default input" inverse={inverse} />
      </div>
      <div>
        <Label htmlFor="disabled" inverse={inverse}>
          Disabled
        </Label>
        <Input
          id="disabled"
          placeholder="Disabled input"
          disabled
          inverse={inverse}
        />
      </div>
      <div>
        <Label htmlFor="error" inverse={inverse}>
          Error
        </Label>
        <Input
          id="error"
          placeholder="Error input"
          aria-invalid="true"
          defaultValue="invalid@"
          inverse={inverse}
        />
      </div>
      <div>
        <Label htmlFor="filled" inverse={inverse}>
          Filled
        </Label>
        <Input
          id="filled"
          placeholder="Filled input"
          defaultValue="example@email.com"
          inverse={inverse}
        />
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
