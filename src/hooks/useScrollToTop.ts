import { useEffect } from 'react';

export function useScrollToTop() {
  useEffect(() => {
    const element = document.querySelector('.modal-content');
    if (element) {
      element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
}