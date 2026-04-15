import { ComponentType, ReactNode } from 'react';
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

interface HeaderDesktopItemContentBase {
  title: string;
  description?: string;
  linkWrapper?: any;
  icon?: Icons;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
  image?: string;
}

export type HeaderDesktopItemContent =
  | (HeaderDesktopItemContentBase & { type: 'link'; href?: string })
  | (HeaderDesktopItemContentBase & { type: 'separator' })
  | (HeaderDesktopItemContentBase & { type: 'card'; href: string });

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
  desktopActiveId?: string;
  fullWidth?: boolean;
  loggedIn?: boolean;
  maintenanceMode?: boolean;
  isSticky?: boolean;
  links: HeaderLinks;
  TrackSignUp: ComponentType<{ children: ReactNode }>;
}

export type LinkKeys =
  | 'signin'
  | 'signup'
  | 'uiTest'
  | 'visualTest'
  | 'interactionTest'
  | 'accessibilityTest'
  | 'storybook'
  | 'playwright'
  | 'cypress'
  | 'turboSnap'
  | 'uiReview'
  | 'publish'
  | 'figmaPlugin'
  | 'frontendTeams'
  | 'designSystems'
  | 'digitalAgencies'
  | 'aboutChromatic'
  | 'careers'
  | 'security'
  | 'enterprise'
  | 'netlify'
  | 'monday'
  | 'collective'
  | 'ezcater'
  | 'blog'
  | 'changelog'
  | 'frontendTestingGuide'
  | 'docs'
  | 'pricing'
  | 'sales'
  | 'steadySnap'
  | 'snapshotCalculator'
  | 'accessibilityBudgetCalculator'
  | 'frontendWorkflowForAI'
  | 'ai';
