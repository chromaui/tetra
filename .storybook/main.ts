import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  storySorts: [
    {
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
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-mcp',
    'storybook-addon-colab',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['./assets', '../public'],
};
export default config;
