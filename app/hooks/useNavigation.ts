// hooks/useNavigationLoader.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationLoaderState {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

// Global state to share loading state across components
let globalLoadingState = false;
const listeners: Set<(isLoading: boolean) => void> = new Set();

const setGlobalLoading = (isLoading: boolean) => {
  globalLoadingState = isLoading;
  listeners.forEach(listener => listener(isLoading));
};

export const useNavigationLoader = (): NavigationLoaderState => {
  const [isLoading, setIsLoading] = useState(globalLoadingState);
  const pathname = usePathname();

  useEffect(() => {
    const listener = (loading: boolean) => setIsLoading(loading);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  // Stop loading when pathname changes (navigation completed)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setGlobalLoading(false);
      }, 100); // Small delay to ensure page has loaded
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isLoading]);

  const startLoading = useCallback(() => {
    setGlobalLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setGlobalLoading(false);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};