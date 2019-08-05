import { useEffect } from 'react';

export default function useOnClick(handler) {
  useEffect(() => {
    document.addEventListener('mousedown', handler, true);
    document.addEventListener('touchstart', handler, true);

    return () => {
      document.removeEventListener('mousedown', handler, true);
      document.addEventListener('touchstart', handler, true);
    };
  }, [handler]);
}
