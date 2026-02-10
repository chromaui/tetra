import preview from '#.storybook/preview';

import { InfoBox } from './InfoBox';

const meta = preview.meta({
  title: 'Local/InfoBox',
  component: InfoBox,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {
    children: 'Hello World',
  },
});
