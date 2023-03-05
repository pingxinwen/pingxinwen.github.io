import { useEffect, useState } from 'react';

interface ScrollPercent {
  /** current percent of part user has read */
  scrollPercent: number;
  scrollTop: number;
}

export const useScrollPercent = (): ScrollPercent => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [_scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
      Promise.resolve().then(() => {
        setScrollTop(scrollTop);
        setScrollPercent(scrollPercent);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollPercent,
    scrollTop: _scrollTop,
  };
}
