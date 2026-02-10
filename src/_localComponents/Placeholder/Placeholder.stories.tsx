import preview from '#.storybook/preview';

import { Placeholder } from './Placeholder';

const meta = preview.meta({
  title: 'Local/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {
    height: 400,
    color: 'slate100',
  },
});
