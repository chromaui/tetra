import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import {
  createDesktopMenu,
  createMobileMenu,
  defaultLinks,
} from './Header/data';
import { createFooterColumns, footerSocialLinks } from './Footer/data';

// Pages retired by the agentic messaging rollout (chromaui/marketing#239).
// Each one redirects permanently, so nav links must use the destination.
const RETIRED_URLS = [
  '/solutions/frontend',
  '/frontend-delivery-platform',
  '/design-system-platform',
  '/features/frontend-testing',
  '/features/regression-test',
  '/features/react-testing',
  '/features/functional-test',
  '/features/component-test',
  '/compare/netlify',
  '/compare/vercel',
  '/choose/storybook-deploy',
  '/compare/jest-image',
  '/compare/lost-pixel',
  '/compare/backstop',
  '/compare/testingbot',
  '/ai',
];

// The blog and docs are separate sites whose canonical URLs end in a slash;
// marketing (Next.js) pages do not.
const TRAILING_SLASH_SITES = ['/blog', '/docs'];

const collectHrefs = (value: unknown, hrefs: string[] = []): string[] => {
  if (Array.isArray(value)) {
    value.forEach((item) => collectHrefs(item, hrefs));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => {
      if (key === 'href' && typeof child === 'string') hrefs.push(child);
      else if (key !== 'customIcon' && key !== 'LinkWrapper')
        collectHrefs(child, hrefs);
    });
  }
  return hrefs;
};

const navHrefs = Array.from(
  new Set(
    collectHrefs([
      defaultLinks,
      createDesktopMenu(),
      createMobileMenu(),
      createFooterColumns('a'),
      footerSocialLinks,
    ])
  )
);

const pathOf = (href: string) => href.split(/[?#]/)[0];
const isInternal = (href: string) => href.startsWith('/');

describe('shared navigation links', () => {
  it('finds the header and footer hrefs', () => {
    expect(navHrefs.length).toBeGreaterThan(40);
  });

  it.each(navHrefs.filter(isInternal))('%s is not a retired URL', (href) => {
    expect(RETIRED_URLS).not.toContain(pathOf(href).replace(/\/$/, ''));
  });

  it.each(navHrefs.filter(isInternal))(
    '%s uses its canonical trailing slash',
    (href) => {
      const path = pathOf(href);
      if (path === '/') return;
      const onSlashSite = TRAILING_SLASH_SITES.some(
        (site) => path === site || path.startsWith(`${site}/`)
      );
      expect(path.endsWith('/')).toBe(onSlashSite);
    }
  );

  it('no source file links to a retired URL', () => {
    const srcDir = __dirname;
    const files: string[] = [];
    const walk = (dir: string) => {
      readdirSync(dir).forEach((name) => {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (/\.(tsx?|mdx)$/.test(name) && path !== __filename)
          files.push(path);
      });
    };
    walk(srcDir);

    const escaped = RETIRED_URLS.map((url) =>
      url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const pattern = new RegExp(`['"\`](${escaped.join('|')})/?(['"\`?#])`);
    const offenders = files
      .map((file) => {
        const match = readFileSync(file, 'utf8').match(pattern);
        return match ? `${relative(srcDir, file)}: ${match[1]}` : null;
      })
      .filter(Boolean);

    expect(offenders).toEqual([]);
  });
});
