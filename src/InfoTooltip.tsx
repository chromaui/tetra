import React from 'react';
import styled from '@emotion/styled';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { Tooltip } from './Tooltip';
import { VStack, Stack } from './Stack/Stack';
import { Icon } from './Icon';
import { Link } from './Link/Link';

const DetailLinkWrapper = styled.div`
  text-align: center;
`;

const StyledTooltip = styled(Tooltip)`
  display: inline-flex;
  align-items: center;
`;

interface InfoTooltipProps {
  copy: string;
  link: { title: string; href: string };
  contentProps?: RadixTooltip.TooltipContentProps;
}

export const InfoTooltip = ({
  copy,
  link,
  contentProps = { sideOffset: 5, side: 'right' },
}: InfoTooltipProps) => (
  <StyledTooltip
    trigger={<Icon name="info" color="slate600" />}
    copy={
      <VStack align="flex-start">
        {copy}
        {link && (
          <DetailLinkWrapper>
            <Link href={link.href} rightIcon="arrowright">
              {link.title}
            </Link>
          </DetailLinkWrapper>
        )}
      </VStack>
    }
    contentProps={contentProps}
  />
);
