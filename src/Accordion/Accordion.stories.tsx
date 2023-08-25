import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordions = [
  {
    id: 0,
    triggerCopy: 'Does Chromatic replace Jest or Enzyme?',
    icon: 'cloudhollow',
  },
  {
    id: 1,
    triggerCopy: 'Can I get rid of my BrowserStack or Sauce subscription?',
    icon: 'facehappy',
  },
  {
    id: 2,
    triggerCopy: 'How is this compared to Selenium, Cypress, or Playwright?',
    icon: 'accessibilityalt',
  },
  {
    id: 3,
    triggerCopy: 'Why run visual tests in the cloud?',
    icon: 'heart',
  },
];

const ExamplePanelContent = ({ inverse }) => {
  const color = inverse ? 'white' : 'slate800';

  return (
    <Text color={color}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, autem
      expedita, in explicabo inventore quasi enim iusto voluptate quibusdam
      eius, quas corporis. Aperiam vel minima nulla sint animi in ducimus.
    </Text>
  );
};

export const Base: Story = {
  args: {
    inverse: false,
    iconName: 'arrowdown',
    iconSize: 14,
    triggerCopy: 'How is this compared to Selenium, Cypress, or Playwright?',
  },
  parameters: {
    backgrounds: { default: 'light' },
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Inverse: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => (
    <Accordion inverse={args.inverse}>
      <Accordion.Item id="1" inverse={args.inverse}>
        <Accordion.Trigger iconName={args.iconName} inverse={args.inverse}>
          {args.triggerCopy}
        </Accordion.Trigger>
        <Accordion.Panel inverse={args.inverse}>
          <ExamplePanelContent inverse={args.inverse} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const StartingOpen: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion defaultValue="1">
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithAlternateIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'heart',
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithNoIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: false,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};
export const Group: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  parameters: {
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupInverse: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupOpenStart: Story = {
  ...Base,
  name: 'Group: Starting Open',
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion defaultValue="item-2" inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupOpenStartInverse: Story = {
  ...Base,
  name: 'Group: Starting Open and Inverse',
  args: {
    ...Base.args,
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => {
    return (
      <Accordion defaultValue="item-0" inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupWithAlternateIcons: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy, icon } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger inverse={args.inverse} iconName={icon}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};
