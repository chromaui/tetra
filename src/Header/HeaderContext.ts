import { createContext, useContext } from 'react';
import { HeaderProps } from './types';

interface HeaderContextType {
  theme?: HeaderProps['theme'];
  triggerType?: HeaderProps['triggerType'];
  navDesktop?: HeaderProps['navDesktop'];
  navMobile?: HeaderProps['navMobile'];
  active: string | null;
  setActive: (id: string | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | null>(null);

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}

export default HeaderContext;
