import { ElementType } from 'react';
import { FooterColumn, FooterSocialItem } from './types';

export const createFooterColumns = (
  LinkWrapper: ElementType
): FooterColumn[] => [
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
  {
    title: 'Platform',
    links: [
      { title: 'UI Tests', href: '/features/test', LinkWrapper },
      {
        title: 'Visual test',
        href: '/features/visual-test',
        LinkWrapper,
      },
      {
        title: 'Interaction test',
        href: '/features/interaction-test',
        LinkWrapper,
      },
      { title: 'TurboSnap', href: '/features/turbosnap', LinkWrapper },
      { title: 'UI Review', href: '/features/review', LinkWrapper },
      { title: 'Publish', href: '/features/publish', LinkWrapper },
      { title: 'Storybook', href: '/storybook', LinkWrapper },
      { title: 'Playwright', href: '/playwright', LinkWrapper },
      { title: 'Cypress', href: '/cypress', LinkWrapper },
      { title: 'Figma plugin', href: '/features/figma-plugin' },
      { title: 'Pricing', href: '/pricing', LinkWrapper },
    ],
  },
  {
    title: 'Customers',
    links: [
      { title: 'Enterprise', href: '/enterprise', LinkWrapper },
      {
        title: 'Frontend teams',
        href: '/solutions/frontend',
        LinkWrapper,
      },
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
      {
        title: 'Netlify',
        href: '/customers/netlify',
        LinkWrapper,
      },
      {
        title: 'Monday.com',
        href: '/customers/monday',
        LinkWrapper,
      },
      {
        title: 'Collective.work',
        href: '/customers/collective',
        LinkWrapper,
      },
      { title: 'ezCater', href: '/customers/ezcater', LinkWrapper },
    ],
  },
  {
    title: 'Learn',
    links: [
      { title: 'Docs', href: '/docs' },
      { title: 'Changelog', href: '/blog' },
      {
        title: 'Visual Testing',
        href: 'https://storybook.js.org/tutorials/visual-testing-handbook/',
      },
      {
        title: 'Design Systems',
        href: 'https://storybook.js.org/tutorials/design-systems-for-developers/',
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
      {
        title: 'Applitools',
        href: '/compare/applitools',
        LinkWrapper,
      },
      { title: 'Percy', href: '/compare/percy', LinkWrapper },
      { title: 'Sauce Labs', href: '/compare/sauce-labs', LinkWrapper },
      { title: 'Katalon', href: '/compare/katalon', LinkWrapper },
      { title: 'LambdaTest', href: '/compare/lambdatest', LinkWrapper },
      { title: 'SmartBear', href: '/compare/smartbear', LinkWrapper },
      { title: 'TestingBot', href: '/compare/testingbot', LinkWrapper },
      { title: 'Lost Pixel', href: '/compare/lost-pixel', LinkWrapper },
      { title: 'Backstop', href: '/compare/backstop', LinkWrapper },
      { title: 'Playwright', href: '/compare/playwright', LinkWrapper },
      { title: 'Axe', href: '/compare/axe', LinkWrapper },
      {
        title: 'Accessibility testing',
        href: '/compare/accessibility',
        LinkWrapper,
      },
      {
        title: 'Deploy Storybook',
        href: '/choose/storybook-deploy',
        LinkWrapper,
      },
    ],
  },
];

export const footerSocialLinks: FooterSocialItem[] = [
  { title: 'github', icon: 'github', href: 'https://github.com/chromaui/' },
  {
    title: 'twitter',
    icon: 'twitter',
    href: 'https://twitter.com/chromaticcom',
  },
  {
    title: 'BlueSky',
    icon: 'bluesky',
    href: 'https://bsky.app/profile/chromatic.com',
  },
  {
    title: 'youtube',
    icon: 'youtube',
    href: 'https://youtube.com/@chromaticui',
  },
];
