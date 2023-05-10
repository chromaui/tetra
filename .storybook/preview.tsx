import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { loadFontsForStorybook } from '@storybook/design-system';

const withGlobalStyle: Decorator = (storyFn) => <>{storyFn()}</>;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#171C23' },
      ],
    },
    viewport: {
      viewports: {
        smallMobile: {
          name: 'Mobile (Small)',
          styles: {
            width: '320px',
            height: '100%',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '440px',
            height: '100%',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '600px',
            height: '100%',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '900px',
            height: '100%',
          },
        },
        desktopXL: {
          name: 'DesktopXL',
          styles: {
            width: '1200px',
            height: '100%',
          },
        },
      },
    },
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
