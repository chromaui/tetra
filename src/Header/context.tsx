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
  logoLinkWrapper?: HeaderProps['logoLinkWrapper']; // The wrapper to use for the logo link

  // Desktop
  desktopRight?: HeaderProps['desktopRight']; // The content to display on the right
  desktopActiveId?: HeaderProps['desktopActiveId']; // The content to display when the menu is open

  // Mobile
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
  logoLinkWrapper?: HeaderProps['logoLinkWrapper'];
  desktopRight?: HeaderProps['desktopRight'];
  desktopActiveId?: HeaderProps['desktopActiveId'];
  mobileTop?: HeaderProps['mobileTop'];
  mobileBottom?: HeaderProps['mobileBottom'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  logoLinkWrapper,
  desktopRight,
  desktopActiveId,
  mobileTop,
  mobileBottom,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        logoLinkWrapper,
        desktopRight,
        desktopActiveId,
        mobileMenuOpen,
        mobileTop,
        mobileBottom,
        setMobileMenuOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
