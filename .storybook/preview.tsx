import type { Preview } from '@storybook/react-vite';
import { MotionGlobalConfig } from 'framer-motion';

// Use framer-motion's global config to disable animations for visual tests
MotionGlobalConfig.skipAnimations = true; //isChromatic();
MotionGlobalConfig.useManualTiming = true; // isChromatic();

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800&display=swap';

// Load the font and avoid re-loading it when components change
const fontLinkId = 'storybook-font-link-tag';

export const loadFontsForStorybook = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement('link');

    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';

    document.head.appendChild(fontLink);
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    backgrounds: {
      default: 'light',
      options: {
        light: { name: 'light', value: '#fff' },
        dark: { name: 'dark', value: '#171C23' },
      },
    },

    viewport: {
      options: {
        xs: { name: 'XS', styles: { width: '320px', height: '100%' } },
        sm: { name: 'SM', styles: { width: '640px', height: '100%' } },
        md: { name: 'MD', styles: { width: '768px', height: '100%' } },
        lg: { name: 'LG', styles: { width: '1024px', height: '100%' } },
        xl: { name: 'XL', styles: { width: '1280px', height: '100%' } },
        xxl: { name: 'XXL', styles: { width: '1536px', height: '100%' } },
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      storySort: {
        order: [
          'Introduction',
          'Responsive Design',
          'Tokens',
          'Typography',
          'Layout',
          'Actions',
          'Components',
          'Utilities',
        ],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

loadFontsForStorybook();

export default preview;
