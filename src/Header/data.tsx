import React from 'react';
import { CollectiveIcon } from './icons/collective';
import { FigmaIcon } from './icons/figma';
import { NetlifyIcon } from './icons/netlify';
import { MondayIcon } from './icons/monday';
import { HeaderDesktopItem, HeaderMobileSection, LinkKeys } from './types';
import { color } from '../_tokens';
import { Icons } from '../Icon/Icon';
import { PlaywrightIcon } from './icons/playwright';
import { CypressIcon } from './icons/cypress';
import { EzCaterIcon } from './icons/ezcater';

interface HeaderLink {
  title: string;
  icon?: Icons; // Replace by iconProps when tetra is updated
  iconColor?: keyof typeof color;
  customIcon?: React.ReactNode;
  href: string;
  linkWrapper?: any;
}

export type HeaderLinks = Partial<Record<LinkKeys, Partial<HeaderLink>>>;
export type HeaderLinksAll = Record<LinkKeys, HeaderLink>;

export const defaultLinks: HeaderLinksAll = {
  signin: {
    title: 'Sign in',
    href: 'https://app.chromatic.com/start',
  },
  signup: {
    title: 'Sign up',
    href: 'https://app.chromatic.com/signup',
  },
  uiTest: {
    title: 'UI Tests',
    icon: 'contrast',
    iconColor: 'cyan500',
    href: '/features/test',
  },
  visualTest: {
    title: 'Visual test',
    icon: 'eye',
    iconColor: 'purple500',
    href: '/features/visual-test',
  },
  interactionTest: {
    title: 'Interaction test',
    icon: 'pointerhand',
    iconColor: 'orange500',
    href: '/features/interaction-test',
  },
  accessibilityTest: {
    title: 'Accessibility test',
    icon: 'accessibility',
    iconColor: 'green500',
    href: '/features/accessibility-test',
  },
  storybook: {
    title: 'Storybook',
    icon: 'storybook',
    iconColor: 'pink500',
    href: '/storybook',
  },
  playwright: {
    title: 'Playwright',
    customIcon: <PlaywrightIcon />,
    iconColor: 'green500',
    href: '/playwright',
  },
  cypress: {
    title: 'Cypress',
    customIcon: <CypressIcon />,
    iconColor: 'green500',
    href: '/cypress',
  },
  turboSnap: {
    title: 'TurboSnap',
    icon: 'dashboard',
    iconColor: 'blue500',
    href: '/features/turbosnap',
  },
  steadySnap: {
    title: 'SteadySnap',
    icon: 'photostabilize',
    iconColor: 'yellow500',
    href: '/features/steadysnap',
  },
  uiReview: {
    title: 'UI Review',
    icon: 'batchaccept',
    iconColor: 'green500',
    href: '/features/review',
  },
  publish: {
    title: 'Publish',
    icon: 'document',
    iconColor: 'pink500',
    href: '/features/publish',
  },
  figmaPlugin: {
    title: 'Figma plugin',
    customIcon: <FigmaIcon />,
    href: '/features/figma-plugin',
  },
  frontendTeams: {
    title: 'Frontend teams',
    icon: 'browser',
    iconColor: 'orange500',
    href: '/solutions/frontend',
  },
  designSystems: {
    title: 'Design systems',
    icon: 'grow',
    iconColor: 'purple500',
    href: '/solutions/design-systems',
  },
  digitalAgencies: {
    title: 'Digital agencies',
    icon: 'component',
    iconColor: 'blue500',
    href: '/solutions/agencies',
  },
  aboutChromatic: {
    title: 'About Chromatic',
    icon: 'chromatic',
    iconColor: 'orange500',
    href: '/company/about',
  },
  careers: {
    title: 'Careers',
    icon: 'user',
    iconColor: 'purple500',
    href: '/company/careers',
  },
  security: {
    title: 'Security',
    icon: 'lock',
    iconColor: 'green500',
    href: '/security',
  },
  enterprise: {
    title: 'Enterprise',
    icon: 'admin',
    iconColor: 'green500',
    href: '/enterprise',
  },
  netlify: {
    title: 'Netlify',
    customIcon: <NetlifyIcon />,
    href: '/customers/netlify',
  },
  monday: {
    title: 'monday.com',
    customIcon: <MondayIcon />,
    href: '/customers/monday',
  },
  collective: {
    title: 'Collective.work',
    customIcon: <CollectiveIcon />,
    href: '/customers/collective',
  },
  ezcater: {
    title: 'ezCater',
    customIcon: <EzCaterIcon />,
    href: '/customers/ezcater',
  },
  blog: {
    title: 'Blog',
    icon: 'starhollow',
    iconColor: 'purple500',
    href: '/blog',
  },
  changelog: {
    title: 'Changelog',
    icon: 'book',
    iconColor: 'green500',
    href: '/blog/releases',
  },
  frontendTestingGuide: {
    title: 'Frontend testing guide',
    href: '/frontend-testing-guide',
    icon: 'contrast',
    iconColor: 'green500',
  },
  docs: {
    title: 'Docs',
    icon: 'browser',
    iconColor: 'orange500',
    href: '/docs',
  },
  pricing: {
    title: 'Pricing',
    href: '/pricing',
    icon: 'starhollow',
    iconColor: 'yellow500',
  },
  sales: {
    title: 'Contact sales',
    icon: 'email',
    iconColor: 'blue500',
    href: '/sales',
  },
  snapshotCalculator: {
    title: 'Snapshot calculator',
    icon: 'photo',
    iconColor: 'blue500',
    href: '/snapshot-calculator',
  },
  accessibilityBudgetCalculator: {
    title: 'Accessibility budget calculator',
    icon: 'accessibility',
    iconColor: 'green500',
    href: '/accessibility-budget-calculator',
  },
  frontendWorkflowForAI: {
    title: 'Frontend workflow for AI',
    href: '/frontend-workflow-for-ai',
    icon: 'wand',
    iconColor: 'pink500',
  },
};

export const createDesktopMenu = (
  links: HeaderLinksAll = defaultLinks,
  fullWidth?: boolean
): HeaderDesktopItem[] => {
  return [
    {
      id: 'platform',
      name: 'Platform',
      leftPosition: fullWidth ? -120 : -220,
      menu: [
        {
          content: [
            {
              type: 'separator',
              title: 'Test',
            },
            {
              ...links.uiTest,
              type: 'link',
              description: 'Test how UIs look & function',
            },
            {
              ...links.visualTest,
              type: 'link',
              description:
                'Pinpoint bugs down to the browser, viewport, and pixel',
            },
            {
              ...links.accessibilityTest,
              type: 'link',
              description: 'Catch accessibility issues at the component level',
            },
            {
              ...links.interactionTest,
              type: 'link',
              description: 'Verify behavior of all screens and components',
            },
            {
              ...links.turboSnap,
              type: 'link',
              description:
                "Track changed components to only test what's necessary",
            },
            {
              ...links.steadySnap,
              type: 'link',
              description:
                'Eliminate flakiness in tests by stabilizing frontend rendering',
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
              ...links.uiReview,
              type: 'link',
              description: 'Speed up team sign-off and manage change requests',
            },
            {
              ...links.publish,
              type: 'link',
              description: 'Index & version components to reuse existing work',
            },
            {
              ...links.figmaPlugin,
              type: 'link',
              description: 'Embed your stories right next to designs in Figma',
            },
          ],
          backgroundColor: 'white',
        },
        {
          content: [
            {
              type: 'separator',
              title: 'Integrations',
            },
            {
              ...links.storybook,
              type: 'link',
              description: 'Run visual tests directly inside Storybook',
            },
            {
              ...links.playwright,
              type: 'link',
              description:
                'Visual tests for every page in your Playwright E2E suite',
            },
            {
              ...links.cypress,
              type: 'link',
              description:
                'Visual tests for every page in your Cypress E2E suite',
            },
          ],
          backgroundColor: 'white',
        },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      leftPosition: -120,
      menu: [
        {
          content: [
            {
              type: 'separator',
              title: 'Use cases',
            },
            {
              ...links.frontendTeams,
              type: 'link',
              description: 'Boost efficiency by streamlining review and QA',
            },
            {
              ...links.designSystems,
              type: 'link',
              description: 'Ensure UI consistency and quality every commit',
            },
            {
              ...links.digitalAgencies,
              type: 'link',
              description: 'Increase margins by speeding up client sign-off',
            },
            {
              ...links.enterprise,
              type: 'link',
              title: 'Enterprise',
              description: 'Scale frontend development & testing',
            },
          ],
        },
        {
          content: [
            {
              type: 'separator',
              title: 'Customer Stories',
            },
            {
              ...links.netlify,
              type: 'link',
              description: 'How Netlify rebranded in six weeks without bugs',
            },
            {
              ...links.monday,
              type: 'link',
              description:
                'How 200 developers speed up their frontend velocity',
            },
            {
              ...links.collective,
              type: 'link',
              description:
                'How to deliver personalized UX across borders & devices',
            },
            {
              ...links.ezcater,
              type: 'link',
              description:
                'How to simultaneously test UI appearance & functionality',
            },
          ],
          backgroundColor: 'white',
        },
      ],
    },
    {
      id: 'docs',
      name: 'Docs',
      ...links.docs,
    },
    {
      id: 'resources',
      name: 'Resources',
      leftPosition: -220,
      menu: [
        {
          content: [
            {
              ...links.blog,
              type: 'link',
              description: 'News and feature updates from our team',
            },
            {
              ...links.snapshotCalculator,
              type: 'link',
              description:
                'Calculate monthly usage based on project-specific needs',
            },
            {
              ...links.accessibilityBudgetCalculator,
              type: 'link',
              description: 'Calculate the true cost of accessibility testing',
            },
          ],
          backgroundColor: 'white',
        },
        {
          content: [
            {
              ...links.frontendTestingGuide,
              type: 'link',
              title: 'Frontend testing guide',
              description:
                'We researched dozens of teams to figure out which testing strategies actually work.',
            },
            {
              ...links.frontendWorkflowForAI,
              type: 'link',
              description:
                'How humans and agents build together without breaking prod',
            },
          ],
          backgroundColor: 'blue50',
        },
      ],
    },
    {
      id: 'pricing',
      name: 'Pricing',
      ...links.pricing,
    },
  ];
};

export const createMobileMenu = (
  links: HeaderLinksAll = defaultLinks
): HeaderMobileSection[] => {
  return [
    {
      name: 'Platform',
      maxItems: 3,
      content: [
        links.uiTest,
        links.uiReview,
        links.publish,
        links.visualTest,
        links.accessibilityTest,
        links.interactionTest,
        links.turboSnap,
        links.steadySnap,
        links.figmaPlugin,
      ],
    },
    {
      content: [links.pricing, links.docs, links.blog, links.sales],
    },
    {
      name: 'Integrations',
      collapsible: true,
      content: [links.storybook, links.playwright, links.cypress],
    },
    {
      name: 'Use cases',
      collapsible: true,
      content: [
        links.frontendTeams,
        links.designSystems,
        links.digitalAgencies,
        links.enterprise,
      ],
    },
    {
      name: 'Customer Stories',
      collapsible: true,
      content: [links.netlify, links.monday, links.collective, links.ezcater],
    },
    {
      name: 'Company',
      collapsible: true,
      content: [links.aboutChromatic, links.careers, links.security],
    },
  ];
};
