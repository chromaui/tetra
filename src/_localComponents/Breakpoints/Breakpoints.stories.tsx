import preview from '#.storybook/preview';

import { Breakpoints } from './Breakpoints';

const meta = preview.meta({
  title: 'Local/Breakpoints',
  component: Breakpoints,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {
    list: [
      { name: '0', value: 0 },
      { name: '0.25', value: 1 },
    ],
  },
});
