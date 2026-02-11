import preview from '#.storybook/preview';

import { Spacings } from './Spacings';

const meta = preview.meta({
  title: 'Local/Spacings',
  component: Spacings,
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
