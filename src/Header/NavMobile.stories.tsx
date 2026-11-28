import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Header } from './Header';
import { defaultLinks } from './data';
import { desktopBreakpoint } from './styles';

const desktopQuery = `(min-width: ${desktopBreakpoint}px)`;

/**
 * Replaces window.matchMedia so the play function can cross the desktop
 * breakpoint without resizing the iframe. Only the desktop query is faked;
 * every other query goes to the real matchMedia.
 */
const fakeDesktopQuery = () => {
  const realMatchMedia = window.matchMedia;
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  let matches = false;

  const fake = {
    get matches() {
      return matches;
    },
    media: desktopQuery,
    onchange: null,
    addEventListener: (_: string, listener: (e: MediaQueryListEvent) => void) =>
      listeners.add(listener),
    removeEventListener: (
      _: string,
      listener: (e: MediaQueryListEvent) => void
    ) => listeners.delete(listener),
    addListener: (listener: (e: MediaQueryListEvent) => void) =>
      listeners.add(listener),
    removeListener: (listener: (e: MediaQueryListEvent) => void) =>
      listeners.delete(listener),
    dispatchEvent: () => true,
  } as unknown as MediaQueryList;

  window.matchMedia = (query: string) =>
    query === desktopQuery ? fake : realMatchMedia.call(window, query);

  const setDesktop = (value: boolean) => {
    matches = value;
    const event = {
      matches: value,
      media: desktopQuery,
    } as MediaQueryListEvent;
    listeners.forEach((listener) => listener(event));
  };

  return {
    setDesktop,
    listenerCount: () => listeners.size,
    restore: () => {
      window.matchMedia = realMatchMedia;
    },
  };
};

let mediaQuery: ReturnType<typeof fakeDesktopQuery>;

const meta: Meta<typeof Header> = {
  title: 'Components/Header/NavMobile',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    // Behaviour test only: the final state is the closed tablet header,
    // which Header's Tablet stories already snapshot.
    chromatic: { disableSnapshot: true },
  },
  beforeEach: () => {
    mediaQuery = fakeDesktopQuery();
    return () => mediaQuery.restore();
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const ClosesAtDesktopBreakpoint: Story = {
  args: {
    theme: 'light',
    links: defaultLinks,
  },
  globals: {
    viewport: { value: 'md' },
  },
  decorators: [(storyFn) => <div style={{ height: '900px' }}>{storyFn()}</div>],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = await canvas.findByRole('button', { name: 'Toggle Menu' });

    await step('Open the menu and focus a link inside it', async () => {
      await userEvent.click(trigger);
      const menu = await body.findByLabelText('Menu');
      await expect(menu).toBeVisible();
      const pricing = within(menu).getByRole('link', { name: /Pricing/ });
      pricing.focus();
      await expect(pricing).toHaveFocus();
    });

    await step('Grow the viewport to desktop', async () => {
      mediaQuery.setDesktop(true);
      await waitFor(() => expect(body.queryByLabelText('Menu')).toBeNull());
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');
      // Focus is not sent back to the (now hidden) trigger.
      await expect(trigger).not.toHaveFocus();
      await expect(document.activeElement).toBe(document.body);
      // Nothing is left scroll-locked or click-blocked.
      await expect(document.body.style.overflow).not.toBe('hidden');
      await expect(document.body.style.pointerEvents).not.toBe('none');
    });

    await step('Shrinking back below desktop leaves it closed', async () => {
      mediaQuery.setDesktop(false);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await expect(body.queryByLabelText('Menu')).toBeNull();
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    await step('It still opens normally afterwards', async () => {
      await userEvent.click(trigger);
      await expect(await body.findByLabelText('Menu')).toBeVisible();
      await userEvent.click(trigger);
      await waitFor(() => expect(body.queryByLabelText('Menu')).toBeNull());
    });
  },
};
