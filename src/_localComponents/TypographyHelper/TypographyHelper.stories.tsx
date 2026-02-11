import preview from '#.storybook/preview';

import { TypographyHelper } from './TypographyHelper';

const meta = preview.meta({
  title: 'Local/Typography Helpers',
  component: TypographyHelper,
  tags: ['autodocs'],
});

export const Base = meta.story({
  args: {
    variant: 'heading20',
  },
});
