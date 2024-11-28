import React, { ElementType, ReactNode, forwardRef } from 'react';

export interface LinkWithWrapperProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  LinkWrapper?: ElementType;
  children: ReactNode;
  href: string;
  noAnchor?: boolean;
}

/**
 * Optionally replace anchor tags with a wrapper component
 * such as Gatsby Link or Next Link.
 */
export const LinkWithWrapper = forwardRef<
  HTMLAnchorElement,
  LinkWithWrapperProps
>(({ children, href, LinkWrapper, noAnchor, ...props }, ref) => {
  if (LinkWrapper) {
    return (
      <LinkWrapper href={href} ref={ref} {...props}>
        {children}
      </LinkWrapper>
    );
  }

  return noAnchor ? (
    <>{children}</>
  ) : (
    <a href={href} ref={ref} {...props}>
      {children}
    </a>
  );
});
LinkWithWrapper.displayName = 'LinkWithWrapper';
