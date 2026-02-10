import preview from '#.storybook/preview';
import React from 'react';
import { NavMobileSection } from './NavMobileSection';
import { FigmaIcon } from './icons/figma';

const meta = preview.meta({
  title: 'Components/Header/NavMobileSection',
  component: NavMobileSection,
});

export const NotCollapsible = meta.story({
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
});

export const Max3items = meta.story({
  args: {
    ...NotCollapsible.input.args,
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
});

export const Collapsible = meta.story({
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
});
