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

  // Desktop
  desktopData?: HeaderProps['desktopData']; // The desktop navigation data (array of objects)
  desktopBreakpoint?: HeaderProps['desktopBreakpoint']; // The breakpoint to switch from mobile to desktop
  desktopHover: string | null; // Indicate what section is being hovered on Desktop
  desktopActive: HeaderProps['desktopActive']; // Indicate what section is active on Desktop
  desktopRight?: HeaderProps['desktopRight']; // The content to display on the right
  setDesktopHover: (id: string | null) => void; // To set the active section on desktop

  // Mobile
  mobileData?: HeaderProps['mobileData']; // The mobile navigation data (array of objects)
  mobileMenuOpen: boolean; // Is the menu on mobile open or not
  mobileGroupOpen: string[]; // The list of accordion values that are open
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
  desktopData: HeaderProps['desktopData'];
  desktopActive: HeaderProps['desktopActive'];
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
  desktopRight?: HeaderProps['desktopRight'];
  mobileData: HeaderProps['mobileData'];
  mobileOpen: HeaderProps['mobileOpen'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  logo,
  desktopData,
  desktopActive,
  desktopBreakpoint,
  desktopRight,
  mobileData,
  mobileOpen,
}) => {
  const [desktopHover, setDesktopHover] = useState<string | null>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(
    mobileOpen || false
  );
  const [mobileGroupOpen, setMobileGroupOpen] = useState<string[]>([]);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        logo,
        desktopData,
        desktopHover,
        desktopActive,
        desktopBreakpoint,
        desktopRight,
        setDesktopHover,
        mobileData,
        mobileMenuOpen,
        mobileGroupOpen,
        setMobileMenuOpen,
        setMobileGroupOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
