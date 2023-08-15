import React from 'react';
import { FooterColumn, FooterSocialItem, HomeItem } from './types';

const FakeLinkWrapper = (props: any) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a data-fake-link-wrapper="true" {...props} />
);

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { title: 'Pricing', href: '/pricing', LinkWrapper: FakeLinkWrapper },
      { title: 'About', href: '/company/about', LinkWrapper: FakeLinkWrapper },
      { title: 'Jobs', href: '/company/careers', LinkWrapper: FakeLinkWrapper },
      {
        title: 'Terms of Service',
        href: '/docs/terms-of-service',
        LinkWrapper: FakeLinkWrapper,
      },
      {
        title: 'Privacy',
        href: '/docs/privacy-policy',
        LinkWrapper: FakeLinkWrapper,
      },
      {
        title: 'Status',
        href: 'http://status.chromatic.com/',
        LinkWrapper: FakeLinkWrapper,
      },
      {
        title: 'Security • SOC 2',
        href: '/docs/security',
        LinkWrapper: FakeLinkWrapper,
      },
      { title: 'Contact Sales', href: '/sales', LinkWrapper: FakeLinkWrapper },
    ],
  },
  {
    title: 'Features',
    links: [
      { title: 'UI Tests', href: '/features/test' },
      { title: 'UI Review', href: '/features/publish' },
      { title: 'Document', href: '/features/document' },
      { title: 'Visual test', href: '/features/test' },
      { title: 'Interaction test', href: '/docs/interactions' },
      { title: 'TurboSnap', href: '/docs/turbosnap' },
      { title: 'Figma plugin', href: '/features/figma-plugin' },
    ],
  },
  {
    title: 'Customers',
    links: [
      { title: 'Made for Storybook', href: '/solutions/storybook' },
      { title: 'Frontend teams', href: '/solutions/frontend' },
      { title: 'Design systems', href: '/solutions/design-systems' },
      { title: 'Digital agencies', href: '/solutions/agencies' },
      {
        title: 'Monday.com',
        href: '/customers/monday',
      },
      { title: 'Collective.work', href: '/customers/collective' },
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

export const footerSocialLinks: FooterSocialItem[] = [
  { title: 'github', icon: 'github', href: 'https://github.com/chromaui/' },
  { title: 'twitter', icon: 'twitter', href: 'https://twitter.com/chromaui' },
  {
    title: 'youtube',
    icon: 'youtube',
    href: 'https://youtube.com/@chromaticui',
  },
];

export const homeLink: HomeItem = {
  href: '/',
  LinkWrapper: FakeLinkWrapper,
};
