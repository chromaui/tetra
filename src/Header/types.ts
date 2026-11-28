import { ComponentType, ReactNode } from 'react';
import type { Icons } from '../Icon/Icon';
import { color } from '../_tokens';
import { HeaderLinks } from './data';

export interface HeaderMobileSection {
  name?: string;
  maxItems?: number;
  /** Label of the button that reveals the items beyond `maxItems`. */
  moreLabel?: string;
  /** Eyebrow shown above the revealed items once `moreLabel` is pressed. */
  moreTitle?: string;
  collapsible?: boolean;
  content: {
    title: string;
    href: string;
    linkWrapper?: any;
    icon?: Icons;
    iconColor?: keyof typeof color;
    /** CSS colour for a round tile behind the icon. */
    iconBackground?: string;
    customIcon?: ReactNode;
  }[];
}

export interface HeaderPipelineLink {
  title: string;
  href: string;
  description?: string;
  linkWrapper?: any;
  icon?: Icons;
  iconColor?: keyof typeof color;
  customIcon?: ReactNode;
}

export interface HeaderPipelineStep {
  /** Icon shown in the round step tile above the column. */
  icon: Icons;
  iconColor?: keyof typeof color;
  /** CSS colour of the round step tile. */
  iconBackground?: string;
  /** Main pages, shown with a bold title and a description. */
  links: HeaderPipelineLink[];
  /** Related pages, shown as compact icon rows below the main pages. */
  subpages?: HeaderPipelineLink[];
}

/**
 * A full-width menu that reads left to right as a pipeline: each step is a
 * column with a step tile, main pages and related pages, plus an optional
 * sidebar list (used for integrations).
 */
export interface HeaderDesktopPipeline {
  steps: HeaderPipelineStep[];
  sidebar?: {
    title: string;
    links: HeaderPipelineLink[];
  };
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
  /**
   * Shown only from `fullNavBreakpoint` up. Narrower desktop widths hide the
   * item with display: none, which also takes it out of the tab order and
   * the accessibility tree.
   */
  fullNavOnly?: boolean;
  /** Renders the pipeline menu layout instead of `menu` columns. */
  pipeline?: HeaderDesktopPipeline;
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
  | 'vitest'
  | 'reactNative'
  | 'playwright'
  | 'cypress'
  | 'turboSnap'
  | 'uiReview'
  | 'publish'
  | 'figmaPlugin'
  | 'agents'
  | 'context'
  /** @deprecated Frontend teams is no longer in the navigation. */
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
  /** @deprecated AI & Agents is no longer in the navigation; /ai redirects to /features/agents. */
  | 'ai'
  | 'liveSessions';
