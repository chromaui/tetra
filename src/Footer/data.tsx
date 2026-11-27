import { ElementType } from 'react';
import { FooterColumn, FooterSocialItem } from './types';

// Groups, labels and order follow the shared footer design (Figma node
// 7495-85642). Destinations follow the Notion "Shared site navigation" record.
export const createFooterColumns = (
  LinkWrapper: ElementType
): FooterColumn[] => [
  {
    title: 'Platform',
    links: [
      {
        title: 'Frontend-ready agents',
        href: '/features/agents',
        LinkWrapper,
      },
      { title: 'Self-correcting loop', href: '/features/test', LinkWrapper },
      { title: 'Human sign-off', href: '/features/review', LinkWrapper },
      {
        title: 'Code UI with fewer tokens',
        href: '/features/context',
        LinkWrapper,
      },
      { title: 'Pricing', href: '/pricing', LinkWrapper },
    ],
  },
  {
    title: 'Features',
    links: [
      { title: 'Visual test', href: '/features/visual-test', LinkWrapper },
      {
        title: 'Interaction test',
        href: '/features/interaction-test',
        LinkWrapper,
      },
      {
        title: 'Accessibility test',
        href: '/features/accessibility-test',
        LinkWrapper,
      },
      { title: 'TurboSnap', href: '/features/turbosnap', LinkWrapper },
      { title: 'SteadySnap', href: '/features/steadysnap', LinkWrapper },
      { title: 'Storybook Publish', href: '/features/publish', LinkWrapper },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { title: 'Storybook', href: '/storybook', LinkWrapper },
      { title: 'Vitest', href: '/vitest', LinkWrapper },
      { title: 'Playwright', href: '/playwright', LinkWrapper },
      { title: 'Cypress', href: '/cypress', LinkWrapper },
      { title: 'React Native', href: '/react-native', LinkWrapper },
      { title: 'Figma plugin', href: '/features/figma-plugin' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { title: 'Docs', href: '/docs' },
      { title: 'Changelog', href: '/blog/releases/' },
      { title: 'Live sessions', href: '/live-sessions', LinkWrapper },
      {
        title: 'Visual Testing',
        href: 'https://storybook.js.org/tutorials/visual-testing-handbook/',
      },
      {
        title: 'Component Driven UIs',
        href: 'https://www.componentdriven.org/',
      },
      {
        title: 'Frontend testing guide',
        href: '/frontend-testing-guide',
        LinkWrapper,
      },
      {
        title: 'Frontend workflow for AI',
        href: '/frontend-workflow-for-ai',
        LinkWrapper,
      },
      {
        title: 'Snapshot calculator',
        href: '/snapshot-calculator',
        LinkWrapper,
      },
      {
        title: 'A11y budget calculator',
        href: '/accessibility-budget-calculator',
        LinkWrapper,
      },
    ],
  },
  {
    title: 'Compare',
    links: [
      {
        title: 'Overview of tools',
        href: '/choose/visual-testing',
        LinkWrapper,
      },
      { title: 'Applitools', href: '/compare/applitools', LinkWrapper },
      { title: 'Percy', href: '/compare/percy', LinkWrapper },
      { title: 'Sauce Labs', href: '/compare/sauce-labs', LinkWrapper },
      { title: 'Katalon', href: '/compare/katalon', LinkWrapper },
      { title: 'TestMu SmartUI', href: '/compare/lambdatest', LinkWrapper },
      { title: 'SmartBear', href: '/compare/smartbear', LinkWrapper },
      { title: 'Playwright', href: '/compare/playwright', LinkWrapper },
      { title: 'Vitest', href: '/compare/vitest', LinkWrapper },
      { title: 'Axe', href: '/compare/axe', LinkWrapper },
      {
        title: 'Accessibility testing',
        href: '/compare/accessibility',
        LinkWrapper,
      },
    ],
  },
  {
    title: 'Customers',
    links: [
      { title: 'Netlify', href: '/customers/netlify', LinkWrapper },
      { title: 'Monday.com', href: '/customers/monday', LinkWrapper },
      { title: 'Collective.work', href: '/customers/collective', LinkWrapper },
      { title: 'ezCater', href: '/customers/ezcater', LinkWrapper },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Enterprise', href: '/enterprise', LinkWrapper },
      {
        title: 'Design systems',
        href: '/solutions/design-systems',
        LinkWrapper,
      },
      {
        title: 'Digital agencies',
        href: '/solutions/agencies',
        LinkWrapper,
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/company/about', LinkWrapper },
      { title: 'Careers', href: '/company/careers', LinkWrapper },
      { title: 'Terms of Service', href: '/docs/terms-of-service' },
      { title: 'Privacy', href: '/docs/privacy-policy' },
      { title: 'Security • SOC 2', href: '/security' },
      { title: 'Status', href: 'https://status.chromatic.com/' },
      { title: 'Contact Sales', href: '/sales', LinkWrapper },
    ],
  },
];

export const footerSocialLinks: FooterSocialItem[] = [
  { title: 'GitHub', icon: 'github', href: 'https://github.com/chromaui/' },
  {
    title: 'Twitter',
    icon: 'twitter',
    href: 'https://twitter.com/chromaticcom',
  },
  {
    title: 'BlueSky',
    icon: 'bluesky',
    href: 'https://bsky.app/profile/chromatic.com',
  },
  {
    title: 'YouTube',
    icon: 'youtube',
    href: 'https://youtube.com/@chromaticui',
  },
];
