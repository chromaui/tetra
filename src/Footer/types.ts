import { IconProps } from '../Icon/Icon';

export interface FooterItem {
  title: string;
  href: string;
  linkWrapper?: any;
}

export interface FooterColumn {
  title: string;
  links: FooterItem[];
}
export interface FooterSocialItem extends FooterItem {
  icon: IconProps['name'];
}
