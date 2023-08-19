import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Placeholder } from '../_localComponents/Placeholder';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const PanelContent = ({ inverse }) => {
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
    triggerCopy: 'Accordion trigger',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion>
          <Accordion.Item id="1">
            <Accordion.Trigger iconName={args.iconName}>
              {args.triggerCopy}
            </Accordion.Trigger>
            <Accordion.Panel>
              <PanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
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
  },
  render: (args) => (
    <Stack direction="column" marginY={10} marginX={10} gap={2}>
      <Accordion inverse={args.inverse}>
        <Accordion.Item id="1" inverse={args.inverse}>
          <Accordion.Trigger iconName={args.iconName} inverse={args.inverse}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel inverse={args.inverse}>
            <PanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
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
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion defaultValue="1">
          <Accordion.Item id="1">
            <Accordion.Trigger iconName={args.iconName}>
              {args.triggerCopy}
            </Accordion.Trigger>
            <Accordion.Panel>
              <PanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
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
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion>
          <Accordion.Item id="1">
            <Accordion.Trigger iconName={args.iconName}>
              {args.triggerCopy}
            </Accordion.Trigger>
            <Accordion.Panel>
              <PanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
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
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion>
          <Accordion.Item id="1">
            <Accordion.Trigger iconName={args.iconName}>
              {args.triggerCopy}
            </Accordion.Trigger>
            <Accordion.Panel>
              <PanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    );
  },
};

export const Reversed: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion>
          <Accordion.Item id="1">
            <Accordion.Panel>
              <PanelContent inverse={args.inverse} />
            </Accordion.Panel>
            <Accordion.Trigger iconName={args.iconName}>
              {args.triggerCopy}
            </Accordion.Trigger>
          </Accordion.Item>
        </Accordion>
      </Stack>
    );
  },
};

export const ReversedInverse: Story = {
  ...Base,
  name: 'Reversed and Inverse',
  args: {
    ...Base.args,
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <Stack direction="column" marginY={10} marginX={10} gap={2}>
      <Accordion inverse={args.inverse}>
        <Accordion.Item id="1" inverse={args.inverse}>
          <Accordion.Panel inverse={args.inverse}>
            <PanelContent inverse={args.inverse} />
          </Accordion.Panel>
          <Accordion.Trigger iconName={args.iconName} inverse={args.inverse}>
            {args.triggerCopy}
          </Accordion.Trigger>
        </Accordion.Item>
      </Accordion>
    </Stack>
  ),
};

export const Group: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    const accordionIds = [0, 1, 2, 3];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion>
          {accordionIds.map((id, i) => (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {args.triggerCopy} {`  ${id + 1}`}
              </Accordion.Trigger>
              <Accordion.Panel>
                <PanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
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
  },
  render: (args) => {
    const accordionIds = [0, 1, 2, 3];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion inverse={args.inverse}>
          {accordionIds.map((id, i) => (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {args.triggerCopy} {`  ${id + 1}`}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <PanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
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
    const accordionIds = [0, 1, 2, 3];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion defaultValue="item-2" inverse={args.inverse}>
          {accordionIds.map((id, i) => (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {args.triggerCopy} {`  ${id + 1}`}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <PanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
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
    const accordionIds = [0, 1, 2, 3];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion defaultValue="item-0" inverse={args.inverse}>
          {accordionIds.map((id, i) => (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {args.triggerCopy} {`  ${id + 1}`}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <PanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    );
  },
};

export const GroupReverse: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: (args) => {
    const accordionIds = [0, 1, 2, 3];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion inverse={args.inverse}>
          {accordionIds.map((id, i) => (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Panel inverse={args.inverse}>
                <PanelContent inverse={args.inverse} />
              </Accordion.Panel>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {args.triggerCopy} {`  ${id + 1}`}
              </Accordion.Trigger>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
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
    const accordions = [
      { id: 0, icon: 'cloudhollow' },
      { id: 1, icon: 'facehappy' },
      { id: 2, icon: 'accessibilityalt' },
      { id: 3, icon: 'heart' },
    ];

    return (
      <Stack direction="column" marginY={10} marginX={10} gap={2}>
        <Accordion inverse={args.inverse}>
          {accordions.map((acc, i) => {
            const { id, icon } = acc;

            return (
              <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
                <Accordion.Trigger inverse={args.inverse} iconName={icon}>
                  {args.triggerCopy} {`  ${id + 1}`}
                </Accordion.Trigger>
                <Accordion.Panel inverse={args.inverse}>
                  <PanelContent inverse={args.inverse} />
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Stack>
    );
  },
};
