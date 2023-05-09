import React, { FC, ReactNode } from 'react';
import { color, spacing } from '../_tokens';
import { minLg, minMd } from '../_helpers';

import { Text } from '../Text/Text';
import { styled } from '@storybook/theming';

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing[5]};

    ${minMd} {
      margin-top: ${spacing[8]};
    }
  }
`;

const SectionHeading = styled(Text)<{
  inverse?: boolean;
  as?: React.ComponentType | string;
}>`
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  flex: 1;
  min-width: 0;
`;

const InnerWrapper = styled.div`
  ${minMd} {
    text-align: left;
    max-width: 66%;
  }

  & > * + * {
    margin-top: ${spacing[5]};

    ${minMd} {
      margin-top: ${spacing[8]};
    }
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
  headingWrapper?: React.ComponentType | string;
  headingVariant?: string;
  ledeParagraphVariant?: string;
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
    <ContentWrapper>
      <Text as={headingWrapper} variant={headingVariant}>
        {heading}
      </Text>
      <InnerWrapper>
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
  ledeParagraphVariant: 'BodyMd',
};
