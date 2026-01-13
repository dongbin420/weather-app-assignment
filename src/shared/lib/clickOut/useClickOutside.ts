import { useEffect } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLElement | null>, onOutsideClick: () => void) => {
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [ref, onOutsideClick]);
};
