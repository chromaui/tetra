import React, { Meta, StoryObj } from '@storybook/react';
import { NavMobile as NavMobileComp } from './NavMobile';

const meta: Meta<typeof NavMobileComp> = {
  title: 'Components/Header',
  component: NavMobileComp,
};

export default meta;
type Story = StoryObj<typeof NavMobileComp>;

export const NavMobile: Story = {
  render: (props) => <NavMobileComp {...props} />,
};
