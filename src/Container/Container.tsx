import { styled } from '@storybook/theming';
import {
  BlockWithOptionsForContainer,
  min2xl,
  minSm,
  minXl,
} from '../_helpers';
import { spacing } from '../_tokens';

export const pageMargin = 5.55555;

export const Container = styled(BlockWithOptionsForContainer)`
  padding-left: ${spacing[5]};
  padding-right: ${spacing[5]};

  ${minSm} {
    margin-left: ${pageMargin}%;
    margin-right: ${pageMargin}%;
  }

  ${minXl} {
    margin-left: ${pageMargin * 2}%;
    margin-right: ${pageMargin * 2}%;
  }

  ${min2xl} {
    margin-left: ${pageMargin * 3}%;
    margin-right: ${pageMargin * 3}%;
  }

  // To review if this is needed
  @media (min-width: 2400px) {
    margin-left: ${pageMargin * 4}%;
    margin-right: ${pageMargin * 4}%;
  }
`;
