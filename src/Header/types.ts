import { ReactNode } from 'react';
import { IconType } from '../Icon/Icon';
import { color } from '../_tokens';

export interface HeaderMobileGroup {
  name?: string;
  maxItems?: number;
  openByDefault?: boolean;
  toggle?: boolean;
  content: {
    title: string;
    href: string;
    icon?: IconType;
    iconColor?: keyof typeof color;
    customIcon?: ReactNode;
  }[];
}

export interface HeaderDesktopItem {
  name: string;
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
}

export interface HeaderProps {
  theme?: 'light' | 'dark';
  logo?: 'chromatic' | 'storybook';
  right?: ReactNode;
  triggerType?: 'click' | 'hover';
  breakpoint?: number;
  navDesktop: HeaderDesktopItem[];
  navMobile: HeaderMobileGroup[];
  activeSection?: string;
}
