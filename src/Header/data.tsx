import React from 'react';
import { BBCIcon } from './icons/bbc';
import { CollectiveIcon } from './icons/collective';
import { FigmaIcon } from './icons/figma';
import { MondayIcon } from './icons/monday';
import { HeaderProps } from './types';

export const desktopData: HeaderProps['desktopData'] = [
  {
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
            href: '/',
          },
          {
            type: 'link',
            title: 'Visual Test',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'eye',
            iconColor: 'purple500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Interaction Test',
            description:
              'Test user behavior like click, type, keyboard, and hover.',
            icon: 'pointerhand',
            iconColor: 'orange500',
            href: '/',
          },
          {
            type: 'link',
            title: 'TurboSnap',
            description:
              "Track changed components to only test what's necessary.",
            icon: 'dashboard',
            iconColor: 'blue500',
            href: '/',
          },
        ],
        backgroundColor: 'white',
      },
      {
        content: [
          {
            type: 'separator',
            title: 'Review',
            href: '/',
          },
          {
            type: 'link',
            title: 'UI Review',
            description: 'Streamline team sign-off and track change requests.',
            icon: 'batchaccept',
            iconColor: 'green500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Figma Plugin',
            description: 'Embed your stories right next to designs in Figma.',
            customIcon: <FigmaIcon />,
            href: '/',
          },
          {
            type: 'separator',
            title: 'Publish',
            href: '/',
          },
          {
            type: 'link',
            title: 'Publish Storybook',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'globe',
            iconColor: 'blue500',
            href: '/',
          },
        ],
        backgroundColor: 'blue50',
      },
    ],
  },
  {
    id: 'pricing',
    name: 'Pricing',
    href: '/pricing',
  },
  {
    id: 'customers',
    name: 'Customers',
    leftPosition: -140,
    menu: [
      {
        content: [
          {
            type: 'separator',
            title: 'Use Cases',
            href: '/',
          },
          {
            type: 'link',
            title: 'Design Systems',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'contrast',
            iconColor: 'cyan500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Web Apps',
            description:
              'Test user behavior like click, type, keyboard, and hover.',
            icon: 'browser',
            iconColor: 'orange500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Microfrontends',
            description: 'Check for accessibility compliance and regressions.',
            icon: 'grow',
            iconColor: 'purple500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Component Libraries',
            description:
              "Track changed components to only test what's necessary",
            icon: 'component',
            iconColor: 'blue500',
            href: '/',
          },
        ],
      },
      {
        content: [
          {
            type: 'separator',
            title: 'Customer Stories',
            href: '/',
          },
          {
            type: 'link',
            title: 'monday.com',
            description: 'How 300 developers speed up their frontend velocity.',
            customIcon: <MondayIcon />,
            href: '/',
          },
          {
            type: 'link',
            title: 'Collective.work',
            description:
              'How a global business creates  personalized customer UX.',
            customIcon: <CollectiveIcon />,
            href: '/',
          },
          {
            type: 'link',
            title: 'BBC',
            description:
              'How to build a new site for 400 million readers in 77 countries.',
            customIcon: <BBCIcon />,
            href: '/',
          },
        ],
        backgroundColor: 'blue50',
      },
    ],
  },
  {
    id: 'docs',
    name: 'Docs',
    href: '/',
  },
  {
    id: 'changelog',
    name: 'Changelog',
    href: '/',
  },
  {
    id: 'company',
    name: 'Company',
    leftPosition: -64,
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
            href: '/',
          },
          {
            type: 'link',
            title: 'Blog',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'star',
            iconColor: 'blue500',
            href: '/',
          },
          {
            type: 'link',
            title: 'Careers',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'user',
            iconColor: 'purple500',
            href: '/',
          },
        ],
        backgroundColor: 'white',
      },
    ],
  },
];

export const mobileData: HeaderProps['mobileData'] = [
  {
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
  {
    content: [
      {
        title: 'Pricing',
        icon: 'starhollow',
        iconColor: 'yellow500',
        href: '/',
      },
      {
        title: 'Docs',
        icon: 'browser',
        iconColor: 'orange500',
        href: '/',
      },
      {
        title: 'Changelog',
        icon: 'grow',
        iconColor: 'purple500',
        href: '/',
      },
    ],
  },
  {
    name: 'Use Cases',
    collapsible: true,
    content: [
      {
        title: 'Design Systems',
        icon: 'contrast',
        iconColor: 'cyan500',
        href: '/',
      },
      {
        title: 'Web Apps',
        icon: 'browser',
        iconColor: 'orange500',
        href: '/',
      },
      {
        title: 'Microfrontends',
        icon: 'grow',
        iconColor: 'purple500',
        href: '/',
      },
      {
        title: 'Component Libraries',
        icon: 'component',
        iconColor: 'blue500',
        href: '/',
      },
    ],
  },
  {
    name: 'Customer Stories',
    collapsible: true,
    content: [
      {
        title: 'monday.com',
        customIcon: <MondayIcon />,
        href: '/',
      },
      {
        title: 'Collective.work',
        customIcon: <CollectiveIcon />,
        href: '/',
      },
      {
        title: 'BBC',
        customIcon: <BBCIcon />,
        href: '/',
      },
    ],
  },
  {
    name: 'Company',
    collapsible: true,
    content: [
      {
        title: 'About Chromatic',
        icon: 'chromatic',
        iconColor: 'orange500',
        href: '/',
      },
      {
        title: 'Blog',
        icon: 'star',
        iconColor: 'blue500',
        href: '/',
      },
      {
        title: 'Careers',
        icon: 'user',
        iconColor: 'purple500',
        href: '/',
      },
    ],
  },
];
