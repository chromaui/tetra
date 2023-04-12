import { useEffect, useState } from 'react';
import { breakpoint } from '../_tokens';

export function useMediaQuery(
  query: 'minBase' | 'minSm' | 'minMd' | 'minLg' | 'minXl' | 'min2Xl'
): boolean {
  let newQuery = '';
  if (query === 'minBase') newQuery = `(min-width: ${breakpoint.base}px)`;
  if (query === 'minSm') newQuery = `(min-width: ${breakpoint.sm}px)`;
  if (query === 'minMd') newQuery = `(min-width: ${breakpoint.md}px)`;
  if (query === 'minLg') newQuery = `(min-width: ${breakpoint.lg}px)`;
  if (query === 'minXl') newQuery = `(min-width: ${breakpoint.xl}px)`;
  if (query === 'min2Xl') newQuery = `(min-width: ${breakpoint['2xl']}px)`;

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(newQuery));

  function handleChange() {
    setMatches(getMatches(newQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(newQuery);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [newQuery]);

  return matches;
}
