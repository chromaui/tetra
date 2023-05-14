import { FC, ReactNode } from 'react';
import { IconType } from '../Icon/Icon';
import { color } from '../_tokens';

export interface HeaderMobileGroup {
  name?: string;
  maxItems?: number;
  collapsible?: boolean;
  content: {
    title: string;
    href: string;
    icon?: IconType;
    iconColor?: keyof typeof color;
    customIcon?: ReactNode;
  }[];
}

export interface HeaderDesktopItemContent {
  type: 'link' | 'separator';
  title: string;
  description?: string;
  href?: string;
  linkWrapper?: FC<{ children: ReactNode }>;
  icon?: IconType;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
}

export interface HeaderDesktopItem {
  name: string;
  href?: string;
  linkWrapper?: FC<{ children: ReactNode }>;
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
  desktopBreakpoint?: number;
  desktopData: HeaderDesktopItem[];
  desktopActive?: string;
  desktopRight?: ReactNode;
  mobileData: HeaderMobileGroup[];
  mobileTop?: ReactNode;
  mobileBottom?: ReactNode;
}
