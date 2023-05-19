import { styled } from '@storybook/theming';
import React, { FC, Fragment } from 'react';
import { color, spacing } from '../_tokens';
import { NavDesktopItem } from './NavDesktopItem';
import { HeaderDesktopItem } from './types';
import { Text } from '../Text';

interface Props {
  item: HeaderDesktopItem;
}

const Inside = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 304px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.slate300}` : 'none'};
`;

const Separator = styled.div<{ index: number }>`
  padding-top: ${({ index }) => (index > 0 ? spacing[5] : spacing[3])};
  padding-left: ${spacing[3]};
  padding-right: ${spacing[3]};
  padding-bottom: ${spacing[2]};
`;

export const NavDesktopContent: FC<Props> = ({ item }) => {
  return (
    <Inside>
      {item.menu?.map((column, i) => (
        <Column key={i} bg={column?.backgroundColor || 'white'} index={i}>
          {column.content.map((content) => (
            <Fragment key={content.title}>
              {content.type === 'separator' && (
                <Separator index={i}>
                  <Text variant="subheading" color="slate500">
                    {content.title}
                  </Text>
                </Separator>
              )}
              {content.type === 'link' && <NavDesktopItem content={content} />}
            </Fragment>
          ))}
        </Column>
      ))}
    </Inside>
  );
};
