import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Fieldset, Form, Legend, Field } from './Form';
import { Label } from './Label';
import { Input } from './Input';
import { Range } from './Range';

import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { color } from '../_tokens';

const meta: Meta<typeof Form> = {
  title: 'Forms/Form',
  component: Form,
};

export default meta;
type Story = StoryObj<{ inverse?: boolean }>;

export const Default: Story = {
  render: ({ inverse }) => (
    <Form
      marginX={6}
      marginY={6}
      paddingX={6}
      paddingY={6}
      style={{
        maxWidth: 600,
        border: `1px solid ${inverse ? color.whiteTr10 : color.blackTr10}`,
        borderRadius: 8,
      }}
    >
      <Field>
        <Label inverse={inverse} htmlFor="email-light">
          Email
        </Label>
        <Input
          inverse={inverse}
          id="email-light"
          type="email"
          placeholder="you@example.com"
        />
      </Field>
      <Field>
        <Label inverse={inverse} htmlFor="plan-select">
          Plan
        </Label>
        <Select inverse={inverse} id="plan-select">
          <option value="">Select an option</option>
          <option value="free">Free</option>
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Select>
      </Field>
      <Field>
        <Label inverse={inverse} htmlFor="name-light">
          Full Name
        </Label>
        <Input
          inverse={inverse}
          id="name-light"
          type="text"
          placeholder="John Doe"
          defaultValue="Jane Smith"
        />
      </Field>
      <Fieldset overhang={6} inverse={inverse}>
        <Legend inverse={inverse}>Parameters</Legend>
        <Field>
          <Label inverse={inverse} htmlFor="stories">
            Stories
          </Label>
          <Range inverse={inverse} id="stories" min={0} max={100} />
        </Field>
        <Field>
          <Label inverse={inverse} htmlFor="turbosnap">
            TurboSnap Efficiency
          </Label>
          <Range inverse={inverse} id="turbosnap" min={0} max={100} />
        </Field>
        <Field gap={2} align="center" direction="row">
          <Checkbox id="sc-accessibility" />
          <Label inverse={inverse} htmlFor="sc-accessibility">
            Accessibility tests
          </Label>
        </Field>
      </Fieldset>
    </Form>
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
