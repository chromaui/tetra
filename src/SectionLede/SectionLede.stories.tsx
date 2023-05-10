import React, { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { SectionLede } from './SectionLede';

const meta: Meta<typeof SectionLede> = {
  title: 'Components/SectionLede',
  component: SectionLede,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionLede>;

export const Base: Story = {
  args: {
    heading: 'Please put pictures of cats everywhere and make the pink more pinkish',
    copy: 'It is all exactly as I said, but I don’t like it. Problem territories! Helicopter view! Drink the Kool-aid and cross-pollination. Our competitors are jumping the shark. Helicopter view cadence ramp up? We need to get all stakeholders up to speed and in the right place. Beef up our problem territories. Blue sky thinking mumbo jumbo post launch.',
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ heading, copy }) => (
    <SectionLede heading={heading} copy={copy} />
  ),
};

export const HeadingElement: Story = {
  args: {
    ...Base.args,
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ heading, copy }) => (
    <SectionLede headingWrapper="h1" heading={heading} copy={copy} />
  ),
};

export const HeadingSize: Story = {
  args: {
    ...Base.args,
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ heading, copy }) => (
    <SectionLede headingVariant="heading2xl" heading={heading} copy={copy} />
  ),
};

export const ParagraphVariant: Story = {
  args: {
    ...Base.args,
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ heading, copy }) => (
    <SectionLede ledeParagraphVariant="bodyLg" heading={heading} copy={copy} />
  ),
};

export const WithActions: Story = {
  args: {
    ...Base.args,
  },
  parameters: {
    layout: 'centered',
  },
  render: ({ heading, copy }) => (
    <SectionLede heading={heading} copy={copy} actions={(
      <>
        <Button appearance="secondary">Get started</Button>
        <Button appearance="outline">
          <Icon name="play" color="white" /> Watch video
        </Button>
      </>
    )} />
  ),
};
