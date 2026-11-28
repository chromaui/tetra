// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import React, { ReactNode, forwardRef } from 'react';
import { renderToString } from 'react-dom/server';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Header } from './Header';
import { HeaderProvider } from './context';
import { NavDesktopContent } from './NavDesktopContent';
import { NavDesktopLink } from './NavDesktopLink';
import { NavDesktopPipeline } from './NavDesktopPipeline';
import { NavMobileItem } from './NavMobileItem';
import { NavMobileSection } from './NavMobileSection';
import { createDesktopMenu, createMobileMenu, defaultLinks } from './data';
import type { HeaderLinks, HeaderLinksAll } from './data';
import type { LinkKeys } from './types';
import { Footer } from '../Footer';

/**
 * Behaves like Next's <Link legacyBehavior>, which marketing passes as
 * `linkWrapper`: a string child is wrapped in an anchor, anything else must
 * be exactly one element, or React.Children.only throws ("Multiple children
 * were passed to <Link>").
 */
const StrictLinkWrapper = forwardRef<
  HTMLAnchorElement,
  { href: string; children: ReactNode }
>(({ href, children }, ref) => {
  if (typeof children === 'string' || typeof children === 'number') {
    return (
      <a href={href} ref={ref}>
        {children}
      </a>
    );
  }
  const child = React.Children.only(children) as React.ReactElement<{
    href?: string;
  }>;
  return React.cloneElement(child, { href });
});
StrictLinkWrapper.displayName = 'StrictLinkWrapper';

const linkOverrides = Object.keys(defaultLinks).reduce((acc, key) => {
  acc[key as LinkKeys] = { linkWrapper: StrictLinkWrapper };
  return acc;
}, {} as HeaderLinks);

const strictLinks = Object.entries(defaultLinks).reduce((acc, [key, value]) => {
  acc[key as LinkKeys] = { ...value, linkWrapper: StrictLinkWrapper };
  return acc;
}, {} as HeaderLinksAll);

const inNavigationMenu = (node: ReactNode) => (
  <HeaderProvider theme="light">
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>{node}</NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </HeaderProvider>
);

describe('links rendered through a single-child linkWrapper', () => {
  it('renders the header bar (logo, Contact, sign in, sign up)', () => {
    for (const loggedIn of [false, true]) {
      expect(() =>
        renderToString(
          <Header
            links={linkOverrides}
            logoLinkWrapper={StrictLinkWrapper}
            loggedIn={loggedIn}
            TrackSignUp={({ children }) => <>{children}</>}
          />
        )
      ).not.toThrow();
    }
  });

  it('renders every mobile menu item', () => {
    const sections = createMobileMenu(strictLinks);
    for (const section of sections) {
      expect(() =>
        renderToString(<NavMobileSection section={section} isLast={false} />)
      ).not.toThrow();
      // Collapsed sections do not render their items, so render each one.
      for (const item of section.content) {
        expect(() => renderToString(<NavMobileItem {...item} />)).not.toThrow();
      }
    }
  });

  it('renders every desktop menu link, card and pipeline link', () => {
    const items = createDesktopMenu(strictLinks);
    for (const item of items) {
      if (item.href) {
        expect(() =>
          renderToString(inNavigationMenu(<NavDesktopLink item={item} />))
        ).not.toThrow();
      }
      if (item.menu) {
        expect(() =>
          renderToString(inNavigationMenu(<NavDesktopContent item={item} />))
        ).not.toThrow();
      }
      const { pipeline } = item;
      if (pipeline) {
        expect(() =>
          renderToString(
            inNavigationMenu(<NavDesktopPipeline pipeline={pipeline} />)
          )
        ).not.toThrow();
      }
    }
  });

  it('renders the footer', () => {
    for (const theme of ['light', 'dark'] as const) {
      expect(() =>
        renderToString(<Footer theme={theme} LinkWrapper={StrictLinkWrapper} />)
      ).not.toThrow();
    }
  });
});
