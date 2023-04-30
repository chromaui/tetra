import React, { FC, ReactNode } from 'react';
import { DesktopLink, DesktopLinkProps } from './DesktopLink';
import { Desktop, DesktopProps } from './Desktop';
import { DesktopDropdown, DesktopDropdownProps } from './DesktopDropdown';
import { DesktopColumn, DesktopColumnProps } from './DesktopColumn';
import { DesktopItem, DesktopItemProps } from './DesktopItem';
import HeaderContext from './HeaderContext';
import { styled } from '@storybook/theming';
import { Logo } from '../Logo';
import { spacing } from '../_tokens';
import { Container } from '../Container';

// How to structure this component?
// - Header.NavDesktop
// -- Header.NavDesktopItem
// --- Header.NavDesktopLink
// --- Header.NavDesktopTrigger
// --- Header.NavDesktopContent
// - Header.NavMobile
// TBD

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
  navDesktop?: ReactNode;
  navMobile?: ReactNode;
  right?: ReactNode;
}

export const Header: FC<HeaderProps> & {
  Desktop: FC<DesktopProps>;
  DesktopDropdown: FC<DesktopDropdownProps>;
  DesktopLink: FC<DesktopLinkProps>;
  DesktopColumn: FC<DesktopColumnProps>;
  DesktopItem: FC<DesktopItemProps>;
} = ({ theme = 'light', logo = 'chromatic', navDesktop, right }) => {
  return (
    <HeaderContext.Provider value={{ theme }}>
      <Wrapper>
        <Left>
          <Logo name={logo} width={140} theme={theme} />
          {navDesktop}
        </Left>
        {right}
      </Wrapper>
    </HeaderContext.Provider>
  );
};

Header.Desktop = Desktop;
Header.DesktopDropdown = DesktopDropdown;
Header.DesktopLink = DesktopLink;
Header.DesktopColumn = DesktopColumn;
Header.DesktopItem = DesktopItem;
