import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { HeaderProps } from './types';

interface HeaderContextType {
  // Both Desktop and Mobile
  theme?: HeaderProps['theme']; // To switch between light and dark theme
  logo?: HeaderProps['logo']; // The logo to display on the left
  logoHeightDesktop?: HeaderProps['logoHeightDesktop']; // The height of the logo on desktop
  logoHeightMobile?: HeaderProps['logoHeightMobile']; // The height of the logo on mobile
  logoHref?: HeaderProps['logoHref']; // The link to redirect to when clicking on the logo
  logoLinkWrapper?: HeaderProps['logoLinkWrapper']; // The wrapper to use for the logo link
  activePathname?: HeaderProps['activePathname']; // The pathname of the current page

  // Desktop
  desktopData?: HeaderProps['desktopData']; // The desktop navigation data (array of objects)
  desktopBreakpoint?: HeaderProps['desktopBreakpoint']; // The breakpoint to switch from mobile to desktop
  desktopRight?: HeaderProps['desktopRight']; // The content to display on the right

  // Mobile
  mobileData?: HeaderProps['mobileData']; // The mobile navigation data (array of objects)
  mobileMenuOpen: boolean; // Is the menu on mobile open or not
  mobileTop?: HeaderProps['mobileTop']; // The content to display at the top of the mobile menu
  mobileBottom?: HeaderProps['mobileBottom']; // The content to display at the bottom of the mobile menu
  setMobileMenuOpen: (value: boolean) => void; // To open or close the mobile menu
}

export const HeaderContext = createContext<HeaderContextType | null>(null);

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}

interface HeaderProviderProps {
  theme: HeaderProps['theme'];
  logo?: HeaderProps['logo'];
  logoHeightDesktop?: HeaderProps['logoHeightDesktop'];
  logoHeightMobile?: HeaderProps['logoHeightMobile'];
  logoHref?: HeaderProps['logoHref'];
  logoLinkWrapper?: HeaderProps['logoLinkWrapper'];
  desktopData: HeaderProps['desktopData'];
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
  desktopRight?: HeaderProps['desktopRight'];
  mobileData: HeaderProps['mobileData'];
  mobileTop?: HeaderProps['mobileTop'];
  mobileBottom?: HeaderProps['mobileBottom'];
  activePathname?: HeaderProps['activePathname'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  logo,
  logoHeightDesktop = 24,
  logoHeightMobile = 24,
  logoHref,
  logoLinkWrapper,
  desktopData,
  desktopBreakpoint,
  desktopRight,
  mobileData,
  mobileTop,
  mobileBottom,
  activePathname,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        logo,
        logoHeightDesktop,
        logoHeightMobile,
        logoLinkWrapper,
        logoHref,
        desktopData,
        desktopBreakpoint,
        desktopRight,
        mobileData,
        mobileMenuOpen,
        mobileTop,
        mobileBottom,
        setMobileMenuOpen,
        activePathname,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
