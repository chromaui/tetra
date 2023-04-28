import React, { FC, ReactNode } from 'react';
import { DesktopLink, DesktopLinkProps } from './DesktopLink';
import { Desktop, DesktopProps } from './Desktop';
import { DesktopDropdown, DesktopDropdownProps } from './DesktopDropdown';
import { DesktopColumn, DesktopColumnProps } from './DesktopColumn';
import { DesktopItem, DesktopItemProps } from './DesktopItem';
import HeaderContext from './HeaderContext';

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
// - [ ] Add logo
// - [ ] Add right component

export interface HeaderProps {
  theme?: 'light' | 'dark';
  navDesktop?: ReactNode;
  navMobile?: ReactNode;
}

export const Header: FC<HeaderProps> & {
  Desktop: FC<DesktopProps>;
  DesktopDropdown: FC<DesktopDropdownProps>;
  DesktopLink: FC<DesktopLinkProps>;
  DesktopColumn: FC<DesktopColumnProps>;
  DesktopItem: FC<DesktopItemProps>;
} = ({ theme = 'light', navDesktop }) => {
  return (
    <HeaderContext.Provider value={{ theme }}>
      {navDesktop}
    </HeaderContext.Provider>
  );
};

Header.Desktop = Desktop;
Header.DesktopDropdown = DesktopDropdown;
Header.DesktopLink = DesktopLink;
Header.DesktopColumn = DesktopColumn;
Header.DesktopItem = DesktopItem;
