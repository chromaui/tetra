import { ReactNode } from 'react';
import type { IconProps } from '../Icon';
import { color } from '../_tokens';

export interface HeaderMobileSection {
  name?: string;
  maxItems?: number;
  collapsible?: boolean;
  content: {
    title: string;
    href: string;
    linkWrapper?: any;
    icon?: IconProps;
    iconColor?: keyof typeof color;
    customIcon?: ReactNode;
  }[];
}

export interface HeaderDesktopItemContent {
  type: 'link' | 'separator';
  title: string;
  description?: string;
  href?: string;
  linkWrapper?: any;
  icon?: IconProps;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
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
  logo?: 'chromatic' | 'storybook';
  logoHeightDesktop?: number;
  logoHeightMobile?: number;
  logoHref?: string;
  logoLinkWrapper?: any;
  desktopBreakpoint?: number;
  desktopData: HeaderDesktopItem[];
  desktopRight?: ReactNode;
  desktopActiveId?: string;
  mobileData: HeaderMobileSection[];
  mobileTop?: ReactNode;
  mobileBottom?: ReactNode;
}
