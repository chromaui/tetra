import React from 'react';
import { CollectiveIcon } from './icons/collective';
import { NetlifyIcon } from './icons/netlify';
import { MondayIcon } from './icons/monday';
import { HeaderDesktopItem, HeaderMobileSection, LinkKeys } from './types';
import { color } from '../_tokens';
import { Icons } from '../Icon/Icon';
import { EzCaterIcon } from './icons/ezcater';
import { StorybookTile } from './icons/storybook-tile';
import { ReactNativeTile } from './icons/react-native-tile';
import { VitestTile } from './icons/vitest-tile';
import { PlaywrightTile } from './icons/playwright-tile';
import { CypressTile } from './icons/cypress-tile';
import { FigmaTile } from './icons/figma-tile';

interface HeaderLink {
  title: string;
  icon?: Icons; // Replace by iconProps when tetra is updated
  iconColor?: keyof typeof color;
  /** CSS colour for a round tile behind the icon (Platform pages). */
  iconBackground?: string;
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
  agents: {
    title: 'Frontend-ready agents',
    icon: 'wand',
    iconColor: 'purple500',
    iconBackground: '#F5EEFF',
    href: '/features/agents',
  },
  context: {
    title: 'Code UI with fewer tokens',
    icon: 'component',
    iconColor: 'blue500',
    iconBackground: '#ECF3FD',
    href: '/features/context',
  },
  uiTest: {
    title: 'Self-correcting loop',
    icon: 'contrast',
    iconColor: 'cyan500',
    iconBackground: '#E6F6F4',
    href: '/features/test',
  },
  visualTest: {
    title: 'Visual testing',
    icon: 'eye',
    iconColor: 'purple500',
    href: '/features/visual-test',
  },
  interactionTest: {
    title: 'Interaction testing',
    icon: 'pointerhand',
    iconColor: 'orange500',
    href: '/features/interaction-test',
  },
  accessibilityTest: {
    title: 'Accessibility testing',
    icon: 'accessibility',
    iconColor: 'green500',
    href: '/features/accessibility-test',
  },
  storybook: {
    title: 'Storybook',
    icon: 'storybook',
    iconColor: 'pink500',
    customIcon: <StorybookTile />,
    href: '/storybook',
  },
  vitest: {
    title: 'Vitest',
    href: '/vitest',
    customIcon: <VitestTile />,
    iconColor: 'green500',
  },
  reactNative: {
    title: 'React Native',
    href: '/react-native',
    customIcon: <ReactNativeTile />,
    iconColor: 'cyan500',
  },
  playwright: {
    title: 'Playwright',
    customIcon: <PlaywrightTile />,
    iconColor: 'green500',
    href: '/playwright',
  },
  cypress: {
    title: 'Cypress',
    customIcon: <CypressTile />,
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
    title: 'Human sign-off',
    icon: 'batchaccept',
    iconColor: 'green500',
    iconBackground: '#ECF8E7',
    href: '/features/review',
  },
  publish: {
    title: 'Storybook Publish',
    icon: 'storybook',
    iconColor: 'pink500',
    href: '/features/publish',
  },
  figmaPlugin: {
    title: 'Figma',
    customIcon: <FigmaTile />,
    href: '/features/figma-plugin',
  },
  // Deprecated: no longer shown in the navigation. Kept so existing link
  // overrides keep type-checking. /solutions/frontend is retired and
  // redirects to the homepage, so point straight at it.
  frontendTeams: {
    title: 'Frontend teams',
    icon: 'browser',
    iconColor: 'orange500',
    href: '/',
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
    href: '/blog/',
  },
  changelog: {
    title: 'Changelog',
    icon: 'book',
    iconColor: 'green500',
    href: '/blog/releases/',
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
    href: '/docs/',
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
  // Deprecated: no longer shown in the navigation. /ai is retired and
  // redirects to /features/agents.
  ai: {
    title: 'AI & Agents',
    href: '/features/agents',
    icon: 'wand',
    iconColor: 'purple500',
  },
  liveSessions: {
    title: 'Live sessions',
    href: '/live-sessions',
    icon: 'video',
    iconColor: 'orange500',
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
      pipeline: {
        steps: [
          {
            icon: 'wand',
            iconColor: 'purple500',
            iconBackground: links.agents.iconBackground,
            links: [
              {
                ...links.agents,
                description:
                  'Give agents your components, patterns, and tools.',
              },
              {
                ...links.context,
                description: 'Compact UI context that refreshes on merge.',
              },
            ],
          },
          {
            icon: 'contrast',
            iconColor: 'cyan500',
            iconBackground: links.uiTest.iconBackground,
            links: [
              {
                ...links.uiTest,
                description: 'Make agents fix UI failures before review.',
              },
            ],
            subpages: [
              links.visualTest,
              links.interactionTest,
              links.accessibilityTest,
            ],
          },
          {
            icon: 'batchaccept',
            iconColor: 'green500',
            iconBackground: links.uiReview.iconBackground,
            links: [
              {
                ...links.uiReview,
                description: 'Review affected UI and decide what ships.',
              },
            ],
            subpages: [links.publish],
          },
        ],
        sidebar: {
          title: 'Integrations',
          links: [
            links.storybook,
            links.reactNative,
            links.vitest,
            links.playwright,
            links.cypress,
            links.figmaPlugin,
          ],
        },
      },
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
              ...links.liveSessions,
              type: 'link',
              description:
                'Deep dives into frontend testing, Storybook, and shipping better UI',
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
      id: 'docs',
      name: 'Docs',
      ...links.docs,
    },
    {
      id: 'pricing',
      name: 'Pricing',
      ...links.pricing,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      ...links.enterprise,
    },
  ];
};

export const createMobileMenu = (
  links: HeaderLinksAll = defaultLinks
): HeaderMobileSection[] => {
  return [
    {
      name: 'Platform',
      maxItems: 4,
      moreLabel: 'View all features',
      moreTitle: 'Features',
      content: [
        links.agents,
        links.context,
        links.uiTest,
        links.uiReview,
        links.visualTest,
        links.interactionTest,
        links.accessibilityTest,
        links.turboSnap,
        links.steadySnap,
        links.publish,
      ],
    },
    {
      content: [links.pricing, links.docs, links.blog, links.sales],
    },
    {
      name: 'Integrations',
      collapsible: true,
      content: [
        links.storybook,
        links.reactNative,
        links.vitest,
        links.playwright,
        links.cypress,
        links.figmaPlugin,
      ],
    },
    {
      name: 'Use cases',
      collapsible: true,
      content: [links.designSystems, links.digitalAgencies, links.enterprise],
    },
    {
      name: 'Customer stories',
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
