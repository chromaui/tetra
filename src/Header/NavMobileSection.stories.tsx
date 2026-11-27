import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NavMobileSection } from './NavMobileSection';
import { expect, userEvent, within } from 'storybook/test';
import { FigmaIcon } from './icons/figma';
import { createMobileMenu } from './data';

const meta: Meta<typeof NavMobileSection> = {
  title: 'Components/Header/NavMobileSection',
  component: NavMobileSection,
};

export default meta;
type Story = StoryObj<typeof NavMobileSection>;

export const NotCollapsible: Story = {
  args: {
    section: {
      name: 'Features',
      content: [
        {
          title: 'UI Tests',
          icon: 'contrast',
          iconColor: 'cyan500',
          href: '/features/ui-tests',
        },
        {
          title: 'UI Review',
          icon: 'batchaccept',
          iconColor: 'green500',
          href: '/',
        },
        {
          title: 'Publish Storybook',
          icon: 'globe',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Visual Test',
          icon: 'eye',
          iconColor: 'purple500',
          href: '/',
        },
        {
          title: 'Interaction Test',
          icon: 'pointerhand',
          iconColor: 'orange500',
          href: '/',
        },
        {
          title: 'TurboSnap',
          icon: 'dashboard',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Figma Plugin',
          customIcon: <FigmaIcon />,
          href: '/',
        },
      ],
    },
    isLast: false,
  },
  decorators: [(storyFn) => <>{storyFn()}</>],
};

export const Max3items: Story = {
  args: {
    ...NotCollapsible.args,
    section: {
      name: 'Features',
      maxItems: 3,
      content: [
        {
          title: 'UI Tests',
          icon: 'contrast',
          iconColor: 'cyan500',
          href: '/features/ui-tests',
        },
        {
          title: 'UI Review',
          icon: 'batchaccept',
          iconColor: 'green500',
          href: '/',
        },
        {
          title: 'Publish Storybook',
          icon: 'globe',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Visual Test',
          icon: 'eye',
          iconColor: 'purple500',
          href: '/',
        },
        {
          title: 'Interaction Test',
          icon: 'pointerhand',
          iconColor: 'orange500',
          href: '/',
        },
        {
          title: 'TurboSnap',
          icon: 'dashboard',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Figma Plugin',
          customIcon: <FigmaIcon />,
          href: '/',
        },
      ],
    },
    isLast: false,
  },
  decorators: [(storyFn) => <>{storyFn()}</>],
};

export const Collapsible: Story = {
  args: {
    section: {
      name: 'Features',
      collapsible: true,
      content: [
        {
          title: 'UI Tests',
          icon: 'contrast',
          iconColor: 'cyan500',
          href: '/features/ui-tests',
        },
        {
          title: 'UI Review',
          icon: 'batchaccept',
          iconColor: 'green500',
          href: '/',
        },
        {
          title: 'Publish Storybook',
          icon: 'globe',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Visual Test',
          icon: 'eye',
          iconColor: 'purple500',
          href: '/',
        },
        {
          title: 'Interaction Test',
          icon: 'pointerhand',
          iconColor: 'orange500',
          href: '/',
        },
        {
          title: 'TurboSnap',
          icon: 'dashboard',
          iconColor: 'blue500',
          href: '/',
        },
        {
          title: 'Figma Plugin',
          customIcon: <FigmaIcon />,
          href: '/',
        },
      ],
    },
    isLast: false,
  },
  decorators: [(storyFn) => <>{storyFn()}</>],
};

export const PlatformWithViewAllFeatures: Story = {
  args: {
    section: createMobileMenu()[0],
    isLast: false,
  },
};

export const PlatformViewAllFeaturesOpen: Story = {
  ...PlatformWithViewAllFeatures,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button', {
      name: 'View all features',
    });
    button.focus();
    await userEvent.keyboard('{enter}');
    await expect(
      await canvas.findByRole('link', { name: 'Visual testing' })
    ).toHaveFocus();
  },
};
