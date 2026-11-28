import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      viewports: [320, 640, 800, 1024, 1200],
    },
  },
  args: {
    theme: 'light',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Base: Story = {};

export const Inverse: Story = {
  args: {
    theme: 'dark',
  },
};

// Tab from the top of the footer to the first directory link to show the
// focus-visible ring in each theme.
const focusFirstLink: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.tab();
  const link = canvas.getByRole('link', { name: 'Frontend-ready agents' });
  await expect(link).toHaveFocus();
};

export const FocusLight: Story = {
  play: focusFirstLink,
};

export const FocusInverse: Story = {
  args: {
    theme: 'dark',
  },
  play: focusFirstLink,
};

// Keeps the landmark, headings and link labels from regressing.
export const Semantics: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('contentinfo')).toBeInTheDocument();
    await expect(
      canvas.getByRole('navigation', { name: 'Footer' })
    ).toBeInTheDocument();
    const headings = canvas
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent);
    await expect(headings).toEqual([
      'Platform',
      'Features',
      'Integrations',
      'Learn',
      'Compare',
      'Customers',
      'Solutions',
      'Company',
    ]);
    await expect(
      canvas.getByRole('list', { name: 'Compare' })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: 'Chromatic on GitHub' })
    ).toBeInTheDocument();
  },
};
