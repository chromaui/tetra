import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Range } from './Range';
import { Label } from './Label';
import { VStack } from '../Stack';

const meta: Meta<typeof Range> = {
  title: 'Forms/Range',
  component: Range,
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  render: ({ inverse }) => {
    const [value1, setValue1] = useState(30);
    const [value2, setValue2] = useState(60);

    return (
      <VStack gap={5} paddingX={6} paddingY={6} style={{ maxWidth: 600 }}>
        <div>
          <Label inverse={inverse} htmlFor="range-default">
            Default (<strong>{value1}</strong>)
          </Label>
          <Range
            inverse={inverse}
            id="range-default"
            min={0}
            max={100}
            value={value1}
            onChange={(e) => setValue1(Number(e.target.value))}
          />
        </div>
        <div>
          <Label inverse={inverse} htmlFor="range-custom">
            Custom Range 20-80 (<strong>{value2}</strong>)
          </Label>
          <Range
            inverse={inverse}
            id="range-custom"
            min={20}
            max={80}
            value={value2}
            onChange={(e) => setValue2(Number(e.target.value))}
          />
        </div>
        <div>
          <Label inverse={inverse} htmlFor="range-step">
            With Step (50)
          </Label>
          <Range
            inverse={inverse}
            id="range-step"
            min={0}
            max={100}
            step={10}
            defaultValue={50}
          />
        </div>
        <div>
          <Label inverse={inverse} htmlFor="range-disabled">
            Disabled
          </Label>
          <Range
            inverse={inverse}
            id="range-disabled"
            min={0}
            max={100}
            defaultValue={50}
            disabled
          />
        </div>
      </VStack>
    );
  },
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
