import React from 'react';
import { BBCIcon } from './icons/bbc';
import { CollectiveIcon } from './icons/collective';
import { FigmaIcon } from './icons/figma';
import { MondayIcon } from './icons/monday';
import { HeaderProps } from './Header';

export const navDesktop: HeaderProps['navDesktop'] = [
  {
    name: 'Features',
    menuWidth: 648,
    menuHeight: 411,
    menuLeftPosition: 0,
    menu: [
      {
        content: [
          {
            type: 'separator',
            title: 'Test',
            href: '#',
          },
          {
            type: 'link',
            title: 'UI Tests',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'contrast',
            iconColor: 'teal500',
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
            description: 'Streamline team sign-off and track change requests.',
            icon: 'batchaccept',
            iconColor: 'emerald500',
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
  {
    name: 'Customers',
    menuWidth: 648,
    menuHeight: 411,
    menuLeftPosition: 24,
    menu: [
      {
        content: [
          {
            type: 'separator',
            title: 'Use Cases',
            href: '#',
          },
          {
            type: 'link',
            title: 'Design Systems',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'contrast',
            iconColor: 'teal500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Web Apps',
            description:
              'Test user behavior like click, type, keyboard, and hover.',
            icon: 'browser',
            iconColor: 'orange500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Microfrontends',
            description: 'Check for accessibility compliance and regressions.',
            icon: 'grow',
            iconColor: 'purple500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Component Libraries',
            description:
              "Track changed components to only test what's necessary",
            icon: 'component',
            iconColor: 'blue500',
            href: '#',
          },
        ],
      },
      {
        content: [
          {
            type: 'separator',
            title: 'Customer Stories',
            href: '#',
          },
          {
            type: 'link',
            title: 'monday.com',
            description: 'How 300 developers speed up their frontend velocity.',
            customIcon: <MondayIcon />,
            href: '#',
          },
          {
            type: 'link',
            title: 'Collective.work',
            description:
              'How a global business creates  personalized customer UX.',
            customIcon: <CollectiveIcon />,
            href: '#',
          },
          {
            type: 'link',
            title: 'BBC',
            description:
              'How to build a new site for 400 million readers in 77 countries.',
            customIcon: <BBCIcon />,
            href: '#',
          },
        ],
        backgroundColor: 'blue50',
      },
    ],
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Docs',
    href: '#',
  },
  {
    name: 'Changelog',
    href: '#',
  },
  {
    name: 'Company',
    menuWidth: 324,
    menuHeight: 279,
    menuLeftPosition: 400,
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
];

export const navDesktop2: HeaderProps['navDesktop'] = [
  {
    name: 'Features',
    menuWidth: 648,
    menuHeight: 411,
    menuLeftPosition: 0,
    menu: [
      {
        content: [
          {
            type: 'separator',
            title: 'Test',
            href: '#',
          },
          {
            type: 'link',
            title: 'UI Tests',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'contrast',
            iconColor: 'teal500',
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
            description: 'Streamline team sign-off and track change requests.',
            icon: 'batchaccept',
            iconColor: 'emerald500',
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
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Customers',
    menuWidth: 648,
    menuHeight: 411,
    menuLeftPosition: 24,
    menu: [
      {
        content: [
          {
            type: 'separator',
            title: 'Use Cases',
            href: '#',
          },
          {
            type: 'link',
            title: 'Design Systems',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'contrast',
            iconColor: 'teal500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Web Apps',
            description:
              'Test user behavior like click, type, keyboard, and hover.',
            icon: 'browser',
            iconColor: 'orange500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Microfrontends',
            description: 'Check for accessibility compliance and regressions.',
            icon: 'grow',
            iconColor: 'purple500',
            href: '#',
          },
          {
            type: 'link',
            title: 'Component Libraries',
            description:
              "Track changed components to only test what's necessary",
            icon: 'component',
            iconColor: 'blue500',
            href: '#',
          },
        ],
      },
      {
        content: [
          {
            type: 'separator',
            title: 'Customer Stories',
            href: '#',
          },
          {
            type: 'link',
            title: 'monday.com',
            description: 'How 300 developers speed up their frontend velocity.',
            customIcon: <MondayIcon />,
            href: '#',
          },
          {
            type: 'link',
            title: 'Collective.work',
            description:
              'How a global business creates  personalized customer UX.',
            customIcon: <CollectiveIcon />,
            href: '#',
          },
          {
            type: 'link',
            title: 'BBC',
            description:
              'How to build a new site for 400 million readers in 77 countries.',
            customIcon: <BBCIcon />,
            href: '#',
          },
        ],
        backgroundColor: 'blue50',
      },
    ],
  },

  {
    name: 'Docs',
    href: '#',
  },
  {
    name: 'Changelog',
    href: '#',
  },
  {
    name: 'Company',
    menuWidth: 324,
    menuHeight: 279,
    menuLeftPosition: 400,
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
];

export const navMobile: HeaderProps['navMobile'] = [
  {
    name: 'Features',
    maxItems: 3,
    openByDefault: true,
    toggle: false,
    content: [
      {
        title: 'UI Tests',
        icon: 'contrast',
        iconColor: 'teal500',
        href: '#',
      },
      {
        title: 'UI Review',
        icon: 'batchaccept',
        iconColor: 'emerald500',
        href: '#',
      },
      {
        title: 'Publish Storybook',
        icon: 'globe',
        iconColor: 'blue500',
        href: '#',
      },
      {
        title: 'Visual Test',
        icon: 'eye',
        iconColor: 'purple500',
        href: '#',
      },
      {
        title: 'Interaction Test',
        icon: 'pointerhand',
        iconColor: 'orange500',
        href: '#',
      },
      {
        title: 'TurboSnap',
        icon: 'dashboard',
        iconColor: 'blue500',
        href: '#',
      },
      {
        title: 'Figma Plugin',
        customIcon: <FigmaIcon />,
        href: '#',
      },
    ],
  },
  {
    openByDefault: true,
    content: [
      {
        title: 'Pricing',
        icon: 'starhollow',
        iconColor: 'yellow500',
        href: '#',
      },
      {
        title: 'Docs',
        icon: 'browser',
        iconColor: 'orange500',
        href: '#',
      },
      {
        title: 'Changelog',
        icon: 'grow',
        iconColor: 'purple500',
        href: '#',
      },
    ],
  },
  {
    name: 'Use Cases',
    content: [
      {
        title: 'Design Systems',
        icon: 'contrast',
        iconColor: 'teal500',
        href: '#',
      },
      {
        title: 'Web Apps',
        icon: 'browser',
        iconColor: 'orange500',
        href: '#',
      },
      {
        title: 'Microfrontends',
        icon: 'grow',
        iconColor: 'purple500',
        href: '#',
      },
      {
        title: 'Component Libraries',
        icon: 'component',
        iconColor: 'blue500',
        href: '#',
      },
    ],
  },
  {
    name: 'Customer Stories',
    content: [
      {
        title: 'monday.com',
        customIcon: <MondayIcon />,
        href: '#',
      },
      {
        title: 'Collective.work',
        customIcon: <CollectiveIcon />,
        href: '#',
      },
      {
        title: 'BBC',
        customIcon: <BBCIcon />,
        href: '#',
      },
    ],
  },
  {
    name: 'Company',
    content: [
      {
        title: 'About Chromatic',
        icon: 'chromatic',
        iconColor: 'orange500',
        href: '#',
      },
      {
        title: 'Blog',
        icon: 'star',
        iconColor: 'blue500',
        href: '#',
      },
      {
        title: 'Careers',
        icon: 'user',
        iconColor: 'purple500',
        href: '#',
      },
    ],
  },
];
