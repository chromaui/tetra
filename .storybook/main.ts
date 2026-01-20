import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    {
      name: '@storybook/addon-mcp',
      options: {
        toolsets: {
          dev: true, // Tools for story URL retrieval and UI building instructions (default: true)
          docs: true, // Tools for component manifest and documentation (default: true, requires experimental feature flag below 👇)
        },
        experimentalFormat: 'markdown', // Output format: 'markdown' (default) or 'xml'
      },
    },
  ],

  features: { experimentalComponentsManifest: true },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['./assets', '../public'],
};
export default config;
