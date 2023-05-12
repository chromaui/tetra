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
  logoHref?: HeaderProps['logoHref']; // The link to redirect to when clicking on the logo

  // Desktop
  desktopData?: HeaderProps['desktopData']; // The desktop navigation data (array of objects)
  desktopBreakpoint?: HeaderProps['desktopBreakpoint']; // The breakpoint to switch from mobile to desktop
  desktopActive: HeaderProps['desktopActive']; // Indicate what section is active on Desktop
  desktopRight?: HeaderProps['desktopRight']; // The content to display on the right

  // Mobile
  mobileData?: HeaderProps['mobileData']; // The mobile navigation data (array of objects)
  mobileMenuOpen: boolean; // Is the menu on mobile open or not
  mobileGroupOpen: string[]; // The list of accordion values that are open
  mobileTop?: HeaderProps['mobileTop']; // The content to display at the top of the mobile menu
  mobileBottom?: HeaderProps['mobileBottom']; // The content to display at the bottom of the mobile menu
  setMobileMenuOpen: (value: boolean) => void; // To open or close the mobile menu
  setMobileGroupOpen: (value: string[]) => void; // To open or close the accordion on mobile
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
  logoHref?: HeaderProps['logoHref'];
  desktopData: HeaderProps['desktopData'];
  desktopActive: HeaderProps['desktopActive'];
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
  desktopRight?: HeaderProps['desktopRight'];
  mobileData: HeaderProps['mobileData'];
  mobileOpen: HeaderProps['mobileOpen'];
  mobileTop?: HeaderProps['mobileTop'];
  mobileBottom?: HeaderProps['mobileBottom'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  logo,
  logoHref,
  desktopData,
  desktopActive,
  desktopBreakpoint,
  desktopRight,
  mobileData,
  mobileOpen,
  mobileTop,
  mobileBottom,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(
    mobileOpen || false
  );
  const [mobileGroupOpen, setMobileGroupOpen] = useState<string[]>([]);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        logo,
        logoHref,
        desktopData,
        desktopActive,
        desktopBreakpoint,
        desktopRight,
        mobileData,
        mobileMenuOpen,
        mobileGroupOpen,
        mobileTop,
        mobileBottom,
        setMobileMenuOpen,
        setMobileGroupOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
