import preview from '#.storybook/preview';
import { Icon } from './Icon';

const meta = preview.meta({
  title: 'Components/Icon',
  component: Icon,
});

export const IconComponent = meta.story({
  args: {
    size: 14,
    name: 'plus',
  },
  parameters: {
    layout: 'centered',
  },
});
