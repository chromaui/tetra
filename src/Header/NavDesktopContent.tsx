import styled from '@emotion/styled';
import React, { FC, Fragment } from 'react';
import { color, spacing } from '../_tokens';
import { NavDesktopItem } from './NavDesktopItem';
import { HeaderDesktopItem, HeaderDesktopItemContent } from './types';
import { Text } from '../Text';
import { VStack } from '../Stack/Stack';
import { LinkWithWrapper } from '../LinkWithWrapper';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

interface Props {
  item: HeaderDesktopItem;
}

const Inside = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  display: flex;
  flex-direction: column;
  width: 304px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.slate300}` : 'none'};
`;

const Separator = styled.div<{ index: number }>`
  padding-top: ${spacing[3]};
  padding-left: ${spacing[3]};
  padding-right: ${spacing[3]};
  padding-bottom: ${spacing[2]};
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;

const CardLink = styled(LinkWithWrapper)`
  cursor: pointer;
  text-decoration: none;
  border-radius: ${spacing[1]};

  &:hover {
    background-color: ${color.blue100};
  }

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

const NavDesktopItemCard = ({
  title,
  description,
  image,
  linkWrapper,
  href,
}: HeaderDesktopItemContent) => (
  <NavigationMenu.Link asChild>
    <CardLink href={href!} LinkWrapper={linkWrapper}>
      <VStack paddingX={3} paddingY={3} gap={5}>
        <VStack gap={0.5}>
          <Text as="div" lineHeightAuto variant="body14" fontWeight="bold">
            {title}
          </Text>
          <Text as="div" variant="body14" color="slate600">
            {description}
          </Text>
        </VStack>
        <CardImage src={image} alt="" />
      </VStack>
    </CardLink>
  </NavigationMenu.Link>
);

export const NavDesktopContent: FC<Props> = ({ item }) => {
  return (
    <Inside>
      {item.menu?.map((column, i) => (
        <Column key={i} bg={column?.backgroundColor || 'white'} index={i}>
          {column.content.map((content) => (
            <Fragment key={content.title}>
              {content.type === 'separator' && (
                <Separator index={i}>
                  <Text variant="subheading" color="slate600">
                    {content.title}
                  </Text>
                </Separator>
              )}
              {content.type === 'link' && <NavDesktopItem content={content} />}
              {content.type === 'card' && <NavDesktopItemCard {...content} />}
            </Fragment>
          ))}
        </Column>
      ))}
    </Inside>
  );
};
