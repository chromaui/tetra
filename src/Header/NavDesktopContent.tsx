import { styled } from '@storybook/theming';
import React, { FC, Fragment } from 'react';
import { color, spacing } from '../_tokens';
import { NavDesktopItem } from './NavDesktopItem';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { slideIn, slideOut } from './styles';
import { Text } from '../Text';

interface Props {
  item: HeaderDesktopItem;
}

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: auto;
  display: flex;
  flex-direction: row;
  animation-duration: 2000ms;
  animation-timing-function: ease;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border-radius: 6px;
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease;
  }
  &[data-state='closed'] {
    animation: ${slideOut} 200ms ease;
  }
`;

const Column = styled.div<{ bg: keyof typeof color; index: number }>`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: ${spacing[3]};
  background-color: ${({ bg }) => (bg ? color[bg] : 'white')};
  border-left: ${({ index }) =>
    index > 0 ? `1px solid ${color.gray200}` : 'none'};
`;

const Separator = styled.div`
  padding-top: ${spacing[5]};
  padding-left: ${spacing[3]};
  padding-right: ${spacing[3]};
  padding-bottom: ${spacing[3]};
`;

export const NavDesktopContent: FC<Props> = ({ item }) => {
  return (
    <NavigationMenuContent>
      {item.menu?.map((column, i) => (
        <Column key={i} bg={column?.backgroundColor || 'white'} index={i}>
          {column.content.map((content, i) => (
            <Fragment key={i}>
              {content.type === 'separator' && (
                <Separator>
                  <Text variant="subheading" color="gray400">
                    {content.title}
                  </Text>
                </Separator>
              )}
              {content.type === 'link' && <NavDesktopItem content={content} />}
            </Fragment>
          ))}
        </Column>
      ))}
    </NavigationMenuContent>
  );
};
