import React from 'react';
import styled from '@emotion/styled';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { color, spacing } from '../_tokens';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { HeaderDesktopItemContent } from './types';

export interface DesktopItemProps {
  content: HeaderDesktopItemContent;
}

const Container = styled(LinkWithWrapper)`
  cursor: pointer;
  text-decoration: none;
  border-radius: ${spacing[1]};

  &:focus {
    box-shadow: 0 0 0 2px rgba(30, 167, 253, 0.3);
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px rgba(30, 167, 253, 0.3);
    background-color: ${color.blue100};
    outline: 2px solid crimson;
    outline: none;
  }
`;

const Inside = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: calc(100% - ${spacing[3] + spacing[8]});
  padding: ${spacing[3]};
  padding-right: ${spacing[12]};
  gap: ${spacing[3]};
  border-radius: ${spacing[1]};

  &:hover {
    background-color: ${color.blue100};

    .arrow {
      right: ${spacing[4]};
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  width: ${spacing[4]};
  padding-top: ${spacing[0.25]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[0.5]};
`;

const ArrowWrapper = styled.div`
  position: absolute;
  width: ${spacing[4]};
  height: ${spacing[4]};
  top: ${spacing[4]};
  right: ${spacing[5]};
  opacity: 0;
  transition:
    right 250ms ease,
    opacity 0.2s ease;
`;

export const NavDesktopItem = React.forwardRef<
  HTMLAnchorElement,
  DesktopItemProps
>(({ content, ...props }, forwardedRef) => {
  return (
    <NavigationMenu.Link asChild>
      <Container
        href={content.href || ''}
        LinkWrapper={content.linkWrapper}
        ref={forwardedRef}
        {...props}
      >
        <Inside>
          <ArrowWrapper className="arrow">
            <Icon name="arrowrightalt" color="blue300" />
          </ArrowWrapper>
          <IconWrapper>
            {!content.customIcon && content.icon && (
              <Icon name={content.icon} size={16} color={content.iconColor} />
            )}
            {content.customIcon}
          </IconWrapper>
          <TextWrapper>
            <Text as="div" lineHeightAuto variant="body14" fontWeight="bold">
              {content.title}
            </Text>
            <Text as="div" variant="body14" color="slate600">
              {content.description}
            </Text>
          </TextWrapper>
        </Inside>
      </Container>
    </NavigationMenu.Link>
  );
});

NavDesktopItem.displayName = 'NavDesktopItem';
