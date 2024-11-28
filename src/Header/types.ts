import { ReactNode } from 'react';
import type { Icons } from '../Icon/Icon';
import { color } from '../_tokens';
import { HeaderLinks } from './data';

export interface HeaderMobileSection {
  name?: string;
  maxItems?: number;
  collapsible?: boolean;
  content: {
    title: string;
    href: string;
    linkWrapper?: any;
    icon?: Icons;
    iconColor?: keyof typeof color;
    customIcon?: ReactNode;
  }[];
}

export interface HeaderDesktopItemContent {
  type: 'link' | 'separator' | 'card';
  title: string;
  description?: string;
  href?: string;
  linkWrapper?: any;
  icon?: Icons;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
  image?: string;
}

export interface HeaderDesktopItem {
  id: string;
  name: string;
  href?: string;
  linkWrapper?: any;
  leftPosition?: number;
  menu?: {
    content: HeaderDesktopItemContent[];
    backgroundColor?: keyof typeof color;
  }[];
}

export interface HeaderProps {
  theme?: 'light' | 'dark';
  logoLinkWrapper?: any;
  desktopRight?: ReactNode;
  desktopActiveId?: string;
  mobileTop?: ReactNode;
  mobileBottom?: ReactNode;
  fullWidth?: boolean;
  loggedIn?: boolean;
  maintenanceMode?: boolean;
  links: HeaderLinks;
}
