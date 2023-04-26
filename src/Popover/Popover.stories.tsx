import React, { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../Button';
import { styled } from '@storybook/theming';

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Base: Story = {
  render: () => (
    <Popover trigger={<Button>I'm a button</Button>}>
      <Container>
        <Left>
          <Button size="sm">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="sm">Hello</Button>
        </Left>
        <Right>
          <Button size="sm">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="sm">Hello</Button>
        </Right>
      </Container>
    </Popover>
  ),
  parameters: {
    layout: 'centered',
  },
};
