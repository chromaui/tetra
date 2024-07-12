import React, { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { spacing } from '../_tokens';
import {
  BlockWithOptionsForContainer,
  BlockWithOptionsForContainerProps,
} from '../_localHelpers';
import { min2xl, minSm, minXl } from '../_helpers';

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

const FullWidthInner = styled.div`
  padding-left: ${spacing[5]};
  padding-right: ${spacing[5]};
  margin-left: ${spacing[3]};
  margin-right: ${spacing[3]};
`;

const FullWidthOuter = styled(BlockWithOptionsForContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1800px;
`;

export const FullWidthContainer = ({
  children,
  ...props
}: BlockWithOptionsForContainerProps & {
  children: ReactNode;
}) => (
  <FullWidthOuter {...props}>
    <FullWidthInner>{children}</FullWidthInner>
  </FullWidthOuter>
);
