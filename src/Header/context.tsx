import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { HeaderProps } from './types';

interface HeaderContextType {
  theme?: HeaderProps['theme'];
  navDesktop?: HeaderProps['navDesktop'];
  navMobile?: HeaderProps['navMobile'];
  active: string | null;
  setActive: (id: string | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  mobileValue: string[];
  setMobileValue: (value: string[]) => void;
  activeSection: HeaderProps['activeSection'];
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
  logo?: HeaderProps['logo'];
  right?: HeaderProps['right'];
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
  navDesktop: HeaderProps['navDesktop'];
  navMobile: HeaderProps['navMobile'];
  activeSection: HeaderProps['activeSection'];
  desktopBreakpoint?: HeaderProps['desktopBreakpoint'];
  logo?: HeaderProps['logo'];
  right?: HeaderProps['right'];
}

export const HeaderProvider: FC<PropsWithChildren<HeaderProviderProps>> = ({
  children,
  theme,
  navMobile,
  navDesktop,
  activeSection,
  desktopBreakpoint,
  logo,
  right,
}) => {
  const [active, setActive] = useState<string | null>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileValue, setMobileValue] = useState<string[]>([]);

  return (
    <HeaderContext.Provider
      value={{
        theme,
        navDesktop,
        navMobile,
        active,
        setActive,
        mobileMenuOpen,
        setMobileMenuOpen,
        activeSection,
        mobileValue,
        setMobileValue,
        desktopBreakpoint,
        logo,
        right,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
