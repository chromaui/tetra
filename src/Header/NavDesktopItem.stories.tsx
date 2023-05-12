import { Meta, StoryObj } from '@storybook/react';
import { NavDesktopItem } from './NavDesktopItem';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@storybook/theming';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof NavDesktopItem> = {
  title: 'Components/Header/NavDesktopItem',
  component: NavDesktopItem,
};

export default meta;
type Story = StoryObj<typeof NavDesktopItem>;

const List = styled(NavigationMenu.List)`
  all: unset;
`;

export const Base: Story = {
  args: {
    content: {
      type: 'link',
      title: 'UI Tests',
      description: 'Pinpoint UI bugs down to the pixel, viewport, and browser.',
      icon: 'contrast',
      iconColor: 'teal500',
      href: '#',
    },
  },
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <List>{storyFn()}</List>
      </NavigationMenu.Root>
    ),
  ],
};

// export const Hover: Story = {
//   args: {
//     content: {
//       type: 'link',
//       title: 'UI Tests',
//       description: 'Pinpoint UI bugs down to the pixel, viewport, and browser.',
//       icon: 'contrast',
//       iconColor: 'teal500',
//       href: '#',
//     },
//   },
//   decorators: [
//     (storyFn) => (
//       <NavigationMenu.Root>
//         <List>{storyFn()}</List>
//       </NavigationMenu.Root>
//     ),
//   ],
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const Link = await canvas.getByRole('link');
//     // await userEvent.hover(Link);
//     // await userEvent.keyboard('{enter}');
//     // await canvas.findByLabelText('Features');
//   },
// };
