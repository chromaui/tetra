import { styled } from '@storybook/theming';
import { BlockWithOptions, BlockWithOptionsProps } from '../_localHelpers';
import { spacing, color as tokenColor } from '../_tokens';

interface StackProps extends BlockWithOptionsProps {
  color?: keyof typeof tokenColor;
  inverse?: boolean;
}

export const Divider = styled(BlockWithOptions)<StackProps>`
  height: ${spacing[0.25]};
  background-color: ${({ color, inverse }) => {
    if (color) {
      return tokenColor[color];
    }
    return inverse ? tokenColor.whiteTr10 : tokenColor.blackTr10;
  }};
`;
