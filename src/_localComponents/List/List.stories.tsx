import preview from '#.storybook/preview';

import { List } from './List';

const meta = preview.meta({
  title: 'Local/List',
  component: List,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {
    list: [
      { name: '0', value: '0px' },
      { name: '0.25', value: '1px' },
    ],
  },
});
