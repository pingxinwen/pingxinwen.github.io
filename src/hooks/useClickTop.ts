import { useCallback, useEffect, useState } from 'react';

export function useClickTop() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return {
    show,
    handleClick,
  }
};
