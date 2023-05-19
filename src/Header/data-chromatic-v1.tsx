import React from 'react';

// import { BBCIcon } from './icons/bbc';
// import { CollectiveIcon } from './icons/collective';
import { FigmaIcon } from './icons/figma';
import { HeaderProps } from './types';
// import { MondayIcon } from './icons/monday';

export const desktopDataChromaticV1: HeaderProps['desktopData'] = [
  {
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
            href: '/features/test',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Interaction Test',
            description:
              'Test user behavior like click, type, keyboard, and hover.',
            icon: 'pointerhand',
            iconColor: 'orange500',
            href: '/docs/interactions',
          },
          {
            type: 'link',
            title: 'TurboSnap',
            description:
              "Track changed components to only test what's necessary.",
            icon: 'dashboard',
            iconColor: 'blue500',
            href: '/docs/turbosnap',
          },
        ],
        backgroundColor: 'white',
      },
      {
        content: [
          {
            type: 'separator',
            title: 'Review',
          },
          {
            type: 'link',
            title: 'UI Review',
            description: 'Streamline team sign-off and track change requests.',
            icon: 'batchaccept',
            iconColor: 'green500',
            href: '/features/publish',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Figma Plugin',
            description: 'Embed your stories right next to designs in Figma.',
            customIcon: <FigmaIcon />,
            href: '/features/figma-plugin',
            // linkWrapper: Link,
          },
        ],
        backgroundColor: 'blue50',
      },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
    // linkWrapper: Link,
  },
  {
    // name: 'Customers',
    name: 'Use Cases',
    leftPosition: -140,
    menu: [
      {
        content: [
          // {
          //   type: 'separator',
          //   title: 'Use Cases',
          //   href: '#',
          // },
          {
            type: 'link',
            title: 'Made for Storybook',
            description: 'Ship UI components with less manual work',
            icon: 'contrast',
            iconColor: 'cyan500',
            href: '/solutions/storybook',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Frontend teams',
            description: 'Boost efficiency by streamlining review and QA',
            icon: 'browser',
            iconColor: 'orange500',
            href: '/solutions/frontend',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Design systems',
            description: 'Ensure UI consistency and quality every commit',
            icon: 'grow',
            iconColor: 'purple500',
            href: '/solutions/design-systems',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Digital agencies',
            description: 'Improve margins by automating UI review and test',
            icon: 'component',
            iconColor: 'blue500',
            href: '/solutions/agencies',
            // linkWrapper: Link,
          },
        ],
      },
      // {
      //   content: [
      //     {
      //       type: 'separator',
      //       title: 'Customer Stories',
      //       href: '#',
      //     },
      //     {
      //       type: 'link',
      //       title: 'monday.com',
      //       description: 'How 300 developers speed up their frontend velocity.',
      //       customIcon: <MondayIcon />,
      //       href: '#',
      //     },
      //     {
      //       type: 'link',
      //       title: 'Collective.work',
      //       description: 'How a global business creates  personalized customer UX.',
      //       customIcon: <CollectiveIcon />,
      //       href: '#',
      //     },
      //     {
      //       type: 'link',
      //       title: 'BBC',
      //       description: 'How to build a new site for 400 million readers in 77 countries.',
      //       customIcon: <BBCIcon />,
      //       href: '#',
      //     },
      //   ],
      //   backgroundColor: 'blue50',
      // },
    ],
  },
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'Changelog',
    href: '/blog/releases',
  },
  {
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
            href: '/company/about',
            // linkWrapper: Link,
          },
          {
            type: 'link',
            title: 'Blog',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'star',
            iconColor: 'blue500',
            href: '/blog',
          },
          {
            type: 'link',
            title: 'Careers',
            description:
              'Pinpoint UI bugs down to the pixel, viewport, and browser.',
            icon: 'user',
            iconColor: 'purple500',
            href: '/company/careers',
            // linkWrapper: Link,
          },
        ],
        backgroundColor: 'white',
      },
    ],
  },
];

export const mobileDataChromaticV1: HeaderProps['mobileData'] = [
  {
    name: 'Features',
    maxItems: 3,
    content: [
      {
        title: 'UI Tests',
        icon: 'contrast',
        iconColor: 'cyan500',
        href: '/features/test',
        // linkWrapper: Link,
      },
      {
        title: 'UI Review',
        icon: 'batchaccept',
        iconColor: 'green500',
        href: '/features/publish',
        // linkWrapper: Link,
      },
      {
        title: 'Interaction Test',
        icon: 'pointerhand',
        iconColor: 'orange500',
        href: '/features/test',
        // linkWrapper: Link,
      },
      {
        title: 'TurboSnap',
        icon: 'dashboard',
        iconColor: 'blue500',
        href: '/docs/turbosnap',
      },
      {
        title: 'Figma Plugin',
        customIcon: <FigmaIcon />,
        href: '/features/figma-plugin',
        // linkWrapper: Link,
      },
    ],
  },
  {
    content: [
      {
        title: 'Pricing',
        icon: 'starhollow',
        iconColor: 'yellow500',
        href: '/pricing',
        // linkWrapper: Link,
      },
      {
        title: 'Docs',
        icon: 'browser',
        iconColor: 'orange500',
        href: '/docs',
      },
      {
        title: 'Changelog',
        icon: 'grow',
        iconColor: 'purple500',
        href: '/blog/releases',
      },
    ],
  },
  {
    name: 'Use Cases',
    collapsible: true,
    content: [
      {
        title: 'Made for Storybook',
        icon: 'contrast',
        iconColor: 'cyan500',
        href: '/solutions/storybook',
        // linkWrapper: Link,
      },
      {
        title: 'Frontend teams',
        icon: 'browser',
        iconColor: 'orange500',
        href: '/solutions/frontend',
        // linkWrapper: Link,
      },
      {
        title: 'Design systems',
        icon: 'grow',
        iconColor: 'purple500',
        href: '/solutions/design-systems',
        // linkWrapper: Link,
      },
      {
        title: 'Digital agencies',
        icon: 'component',
        iconColor: 'blue500',
        href: '/solutions/agencies',
        // linkWrapper: Link,
      },
    ],
  },
  // {
  //   name: 'Customer Stories',
  //   collapsible: true,
  //   content: [
  //     {
  //       title: 'monday.com',
  //       customIcon: <MondayIcon />,
  //       href: '/',
  //     },
  //     {
  //       title: 'Collective.work',
  //       customIcon: <CollectiveIcon />,
  //       href: '/',
  //     },
  //     {
  //       title: 'BBC',
  //       customIcon: <BBCIcon />,
  //       href: '/',
  //     },
  //   ],
  // },
  {
    name: 'Company',
    collapsible: true,
    content: [
      {
        title: 'About Chromatic',
        icon: 'chromatic',
        iconColor: 'orange500',
        href: '/company/about',
        // linkWrapper: Link,
      },
      {
        title: 'Blog',
        icon: 'star',
        iconColor: 'blue500',
        href: '/blog',
      },
      {
        title: 'Careers',
        icon: 'user',
        iconColor: 'purple500',
        href: '/company/careers',
        // linkWrapper: Link,
      },
    ],
  },
];
