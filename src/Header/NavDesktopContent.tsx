import { styled } from '@storybook/theming';
import React, { FC, Fragment } from 'react';
import { color, spacing } from '../_tokens';
import { NavDesktopItem } from './NavDesktopItem';
import { NavDesktopSeparator } from './NavDesktopSeparator';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
} from './styles';

interface Props {
  item: HeaderDesktopItem;
}

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  display: flex;
  flex-direction: row;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }
  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }
  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }
  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.gray200}` : 'none'};
`;

export const NavDesktopContent: FC<Props> = ({ item }) => {
  return (
    <NavigationMenuContent>
      {item.menu?.map((column, i) => (
        <Column key={i} bg={column?.backgroundColor || 'white'} index={i}>
          {column.content.map((content, i) => (
            <Fragment key={i}>
              {content.type === 'separator' && (
                <NavDesktopSeparator title={content.title} />
              )}
              {content.type === 'link' && (
                <NavDesktopItem
                  icon={content.icon}
                  iconColor={content.iconColor}
                  customIcon={content.customIcon}
                  title={content.title}
                  description={content.description}
                />
              )}
            </Fragment>
          ))}
        </Column>
      ))}
    </NavigationMenuContent>
  );
};
