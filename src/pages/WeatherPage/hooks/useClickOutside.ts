import { useEffect, useRef } from 'react';

export const useClickOutside = (onClick = () => {}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, []);

  return { ref };
};
