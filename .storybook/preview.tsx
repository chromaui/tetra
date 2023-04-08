import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import {
  global as designSystemGlobal,
  loadFontsForStorybook,
} from '@storybook/design-system';

const { GlobalStyle: StorybookDSGlobalStyle } = designSystemGlobal;

const withGlobalStyle: Decorator = (storyFn) => (
  <>
    {/* I removed the global style to make sure we are setting every elements on each components instead of relying on global styles. */}
    {/* <StorybookDSGlobalStyle /> */}
    {storyFn()}
  </>
);

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
