import React, { FC, ReactNode, useState } from 'react';
import HeaderContext from './HeaderContext';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { color, spacing } from '../_tokens';
import { Container } from '../Container';
import { IconType } from '../Icon/Icon';
import { NavDesktop } from './NavDesktop';

// TODO
// - [ ] Add gridalt icon for the use cases
// - [ ] Create new text variant for separators
// - [ ] Add context to be able to share theme between components

const Wrapper = styled(Container)`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: ${spacing[10]};
`;

export interface HeaderProps {
  theme?: 'light' | 'dark';
  logo?: 'chromatic' | 'storybook';
  navMobile?: ReactNode;
  right?: ReactNode;
  navDesktop: {
    name: string;
    menuWidth?: number;
    menuHeight?: number;
    menuLeftPosition?: number;
    href?: string;
    menu?: {
      content: (
        | {
            type: 'separator';
            title: string;
            href: string;
          }
        | {
            type: 'link';
            title: string;
            description: string;
            href: string;
            icon?: IconType;
            iconColor?: keyof typeof color;
            customIcon?: ReactNode;
          }
      )[];
      backgroundColor?: keyof typeof color;
    }[];
  }[];
  triggerType?: 'click' | 'hover';
}

export const Header: FC<HeaderProps> = ({
  theme = 'light',
  logo = 'chromatic',
  navDesktop,
  right,
  triggerType,
}) => {
  const [active, setActive] = useState<string | null>('');

  return (
    <HeaderContext.Provider
      value={{ theme, triggerType, navDesktop, active, setActive }}
    >
      <Wrapper>
        <Left>
          <Logo name={logo} width={140} theme={theme} />
          {navDesktop && <NavDesktop />}
        </Left>
        {right}
      </Wrapper>
    </HeaderContext.Provider>
  );
};
