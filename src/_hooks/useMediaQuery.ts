import { useEffect, useState } from 'react';
import { breakpoint } from '../_tokens';

export function useMediaQuery(
  query:
    | 'minBase'
    | 'minSm'
    | 'minMd'
    | 'minLg'
    | 'minXl'
    | 'min2Xl'
    | 'maxBase'
    | 'maxSm'
    | 'maxMd'
    | 'maxLg'
    | 'maxXl'
    | 'max2Xl'
    | 'base'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | {
        min?: number;
        max?: number;
      }
): boolean {
  let newQuery = '';
  // Min
  if (query === 'minBase') newQuery = `(min-width: ${breakpoint.base}px)`;
  if (query === 'minSm') newQuery = `(min-width: ${breakpoint.sm}px)`;
  if (query === 'minMd') newQuery = `(min-width: ${breakpoint.md}px)`;
  if (query === 'minLg') newQuery = `(min-width: ${breakpoint.lg}px)`;
  if (query === 'minXl') newQuery = `(min-width: ${breakpoint.xl}px)`;
  if (query === 'min2Xl') newQuery = `(min-width: ${breakpoint['2xl']}px)`;

  // Max
  if (query === 'maxSm') newQuery = `(max-width: ${breakpoint.sm - 1}px)`;
  if (query === 'maxMd') newQuery = `(max-width: ${breakpoint.md - 1}px)`;
  if (query === 'maxLg') newQuery = `(max-width: ${breakpoint.lg - 1}px)`;
  if (query === 'maxXl') newQuery = `(max-width: ${breakpoint.xl - 1}px)`;
  if (query === 'max2Xl') newQuery = `(max-width: ${breakpoint['2xl'] - 1}px)`;

  // Exact
  if (query === 'base')
    newQuery = `(min-width: ${breakpoint.base}px) and (max-width: ${
      breakpoint.sm - 1
    }px)`;
  if (query === 'sm')
    newQuery = `(min-width: ${breakpoint.sm}px) and (max-width: ${
      breakpoint.md - 1
    }px)`;
  if (query === 'md')
    newQuery = `(min-width: ${breakpoint.md}px) and (max-width: ${
      breakpoint.lg - 1
    }px)`;
  if (query === 'lg')
    newQuery = `(min-width: ${breakpoint.lg}px) and (max-width: ${
      breakpoint.xl - 1
    }px)`;
  if (query === 'xl')
    newQuery = `(min-width: ${breakpoint.xl}px) and (max-width: ${
      breakpoint['2xl'] - 1
    }px)`;
  if (query === '2xl') newQuery = `(min-width: ${breakpoint['2xl']}px)`;

  // Custom
  if (typeof query === 'object') {
    if (query.min && query.max) {
      newQuery = `(min-width: ${query.min}px) and (max-width: ${query.max}px)`;
    } else if (query.min) {
      newQuery = `(min-width: ${query.min}px)`;
    } else if (query.max) {
      newQuery = `(max-width: ${query.max}px)`;
    }
  }

  const getMatches = (q: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(newQuery));

  function handleChange() {
    if (typeof window !== 'undefined') setMatches(getMatches(newQuery));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newQuery]);

  return matches;
}
