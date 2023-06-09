import { styled } from '@storybook/theming';
import { BlockWithOptions, BlockWithOptionsProps } from '../_localHelpers';
import { spacing, color as tokenColor } from '../_tokens';

interface StackProps extends BlockWithOptionsProps {
  color?: keyof typeof tokenColor;
}

export const Divider = styled(BlockWithOptions)<StackProps>`
  height: ${spacing[0.25]};
  background-color: ${({ color }) =>
    color ? tokenColor[color] : tokenColor.slate300};
`;
