import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { loadFontsForStorybook } from '@storybook/design-system';

const withGlobalStyle: Decorator = (storyFn) => <>{storyFn()}</>;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withGlobalStyle],
};

loadFontsForStorybook();

export default preview;
