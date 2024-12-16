import { useState, useEffect } from 'react';

function useIsPC() {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPC(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isPC;
}

export default useIsPC;