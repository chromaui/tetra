import { createContext, useContext } from 'react';
import { HeaderProps } from './Header';

interface HeaderContextType {
  theme?: HeaderProps['theme'];
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
