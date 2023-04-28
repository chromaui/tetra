import React, { FC, ReactNode } from 'react';
import { DesktopLink, DesktopLinkProps } from './DesktopLink';
import { Desktop, DesktopProps } from './Desktop';
import { DesktopDropdown, DesktopDropdownProps } from './DesktopDropdown';
import { DesktopColumn, DesktopColumnProps } from './DesktopColumn';
import { DesktopItem, DesktopItemProps } from './DesktopItem';

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
  return <div>{navDesktop}</div>;
};

Header.Desktop = Desktop;
Header.DesktopDropdown = DesktopDropdown;
Header.DesktopLink = DesktopLink;
Header.DesktopColumn = DesktopColumn;
Header.DesktopItem = DesktopItem;
