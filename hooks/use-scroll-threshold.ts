'use client';

import { useEffect, useState } from 'react';

/** Shared by the compact header and the back-to-top action. */
export function useScrollThreshold(threshold: number): boolean {
  const [passedThreshold, setPassedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPassedThreshold(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return passedThreshold;
}
