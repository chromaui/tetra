import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { HeaderProps } from './types';

interface HeaderContextType {
  theme?: HeaderProps['theme']; // To switch between light and dark theme
  desktopActiveId?: HeaderProps['desktopActiveId']; // The content to display when the menu is open
  mobileMenuOpen: boolean; // Is the menu on mobile open or not
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
  desktopActiveId?: HeaderProps['desktopActiveId'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  desktopActiveId,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        desktopActiveId,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
