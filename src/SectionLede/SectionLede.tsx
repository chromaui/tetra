import React, { FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { Text, TextProps } from '../Text/Text';
import { minMd } from '../_helpers';

import { Stack } from '../Stack/Stack';

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled(Stack)`
  align-items: flex-start;
`;

const InnerWrapper = styled(Stack)`
  ${minMd} {
    max-width: 66%;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

interface SectionLedeProps {
  heading: string;
  copy: string;
  actions?: React.ReactNode;
  inverse?: boolean;
  headingWrapper?: TextProps['as'];
  headingVariant?: TextProps['variant'];
  ledeParagraphVariant?: TextProps['variant'];
}

export const SectionLede: FC<SectionLedeProps> = ({
  inverse,
  heading,
  copy,
  actions,
  headingWrapper,
  headingVariant,
  ledeParagraphVariant,
  ...rest
}) => (
  <ContentContainer {...rest}>
    <ContentWrapper direction="column" gap={8}>
      <Text as={headingWrapper} variant={headingVariant}>
        {heading}
      </Text>
      <InnerWrapper direction="column" gap={8}>
        <Text variant={ledeParagraphVariant}>{copy}</Text>
        {actions && <Actions>{actions}</Actions>}
      </InnerWrapper>
    </ContentWrapper>
  </ContentContainer>
);

SectionLede.defaultProps = {
  heading: 'Lorem ipsum dolor sit amet',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante.',
  headingWrapper: 'h2',
  headingVariant: 'heading4xl',
  ledeParagraphVariant: 'bodyMd',
};
