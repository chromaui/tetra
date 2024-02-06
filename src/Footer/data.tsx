import { FooterProps } from './Footer';

export const footerColumns: FooterProps['columns'] = [
  {
    title: 'Product',
    links: [
      { title: 'Pricing', href: '/pricing' },
      { title: 'About', href: '/company/about' },
      { title: 'Jobs', href: '/company/careers' },
      { title: 'Terms of Service', href: '/docs/terms-of-service' },
      { title: 'Privacy', href: '/docs/privacy-policy' },
      { title: 'Status', href: 'https://status.chromatic.com/' },
      { title: 'Security • SOC 2', href: '/security' },
      { title: 'Contact Sales', href: '/sales' },
    ],
  },
  {
    title: 'Features',
    links: [
      { title: 'UI Tests', href: '/features/test' },
      {
        title: 'Visual test',
        href: '/features/visual-test',
      },
      {
        title: 'Interaction test',
        href: '/features/interaction-test',
      },
      { title: 'TurboSnap', href: '/features/turbosnap' },
      { title: 'UI Review', href: '/features/review' },
      { title: 'Publish', href: '/features/publish' },
      { title: 'Figma plugin', href: '/features/figma-plugin' },
      {
        title: 'Storybook',
        href: '/storybook',
      },
      {
        title: 'Playwright',
        href: '/playwright',
      },
      {
        title: 'Cypress',
        href: '/cypress',
      },
    ],
  },
  {
    title: 'Customers',
    links: [
      { title: 'Made for Storybook', href: '/solutions/storybook' },
      {
        title: 'Frontend teams',
        href: '/solutions/frontend',
      },
      {
        title: 'Design systems',
        href: '/solutions/design-systems',
      },
      {
        title: 'Digital agencies',
        href: '/solutions/agencies',
      },
      {
        title: 'Netlify',
        href: '/customers/netlify',
      },
      {
        title: 'Monday.com',
        href: '/customers/monday',
      },
      {
        title: 'Collective.work',
        href: '/customers/collective',
      },
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
    ],
  },
  {
    title: 'Compare',
    links: [
      {
        title: 'Applitools',
        href: '/compare/applitools',
      },
      { title: 'Percy', href: '/compare/percy' },
      {
        title: 'Deploy Storybook',
        href: '/choose/storybook-deploy',
      },
      {
        title: 'Visual testing services',
        href: '/choose/visual-testing',
      },
    ],
  },
];

export const footerSocialLinks: FooterProps['socialLinks'] = [
  { title: 'github', icon: 'github', href: 'https://github.com/chromaui/' },
  {
    title: 'twitter',
    icon: 'twitter',
    href: 'https://twitter.com/chromaticcom',
  },
  {
    title: 'youtube',
    icon: 'youtube',
    href: 'https://youtube.com/@chromaticui',
  },
];

export const homeLink: FooterProps['homeLink'] = {
  href: '/',
};
