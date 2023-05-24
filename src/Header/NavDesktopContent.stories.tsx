import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@storybook/theming';
import { NavDesktopContent } from './NavDesktopContent';
import { FigmaIcon } from './icons/figma';

const meta: Meta<typeof NavDesktopContent> = {
  title: 'Components/Header/NavDesktopContent',
  component: NavDesktopContent,
};

export default meta;
type Story = StoryObj<typeof NavDesktopContent>;

const List = styled(NavigationMenu.List)`
  all: unset;
`;

export const OneColumn: Story = {
  args: {
    item: {
      id: 'features',
      name: 'Features',
      menu: [
        {
          content: [
            {
              type: 'link',
              title: 'About Chromatic',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'chromatic',
              iconColor: 'orange500',
              href: '#',
            },
            {
              type: 'link',
              title: 'Blog',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'star',
              iconColor: 'blue500',
              href: '#',
            },
            {
              type: 'link',
              title: 'Careers',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'user',
              iconColor: 'purple500',
              href: '#',
            },
          ],
          backgroundColor: 'white',
        },
      ],
    },
  },
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <List>
          <div style={{ display: 'flex' }}>{storyFn()}</div>
        </List>
      </NavigationMenu.Root>
    ),
  ],
};

export const TwoColumn: Story = {
  args: {
    item: {
      id: 'features',
      name: 'Features',
      menu: [
        {
          content: [
            {
              type: 'separator',
              title: 'Test',
            },
            {
              type: 'link',
              title: 'UI Tests',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'contrast',
              iconColor: 'cyan500',
              href: '#',
            },
            {
              type: 'link',
              title: 'Visual Test',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'eye',
              iconColor: 'purple500',
              href: '#',
            },
            {
              type: 'link',
              title: 'Interaction Test',
              description:
                'Test user behavior like click, type, keyboard, and hover.',
              icon: 'pointerhand',
              iconColor: 'orange500',
              href: '#',
            },
            {
              type: 'link',
              title: 'TurboSnap',
              description:
                "Track changed components to only test what's necessary.",
              icon: 'dashboard',
              iconColor: 'blue500',
              href: '#',
            },
          ],
          backgroundColor: 'white',
        },
        {
          content: [
            {
              type: 'separator',
              title: 'Review',
              href: '#',
            },
            {
              type: 'link',
              title: 'UI Review',
              description:
                'Streamline team sign-off and track change requests.',
              icon: 'batchaccept',
              iconColor: 'green500',
              href: '#',
            },
            {
              type: 'link',
              title: 'Figma Plugin',
              description: 'Embed your stories right next to designs in Figma.',
              customIcon: <FigmaIcon />,
              href: '#',
            },
            {
              type: 'separator',
              title: 'Publish',
              href: '#',
            },
            {
              type: 'link',
              title: 'Publish Storybook',
              description:
                'Pinpoint UI bugs down to the pixel, viewport, and browser.',
              icon: 'globe',
              iconColor: 'blue500',
              href: '#',
            },
          ],
          backgroundColor: 'blue50',
        },
      ],
    },
  },
  decorators: [
    (storyFn) => (
      <NavigationMenu.Root>
        <List>
          <div style={{ display: 'flex' }}>{storyFn()}</div>
        </List>
      </NavigationMenu.Root>
    ),
  ],
};
