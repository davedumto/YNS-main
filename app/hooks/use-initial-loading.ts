// hooks/use-initial-loading.ts
"use client"
import { useState, useEffect } from 'react'

export function useInitialLoading() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  
  useEffect(() => {
    // Check if this is the first load
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore')
    
    if (hasLoadedBefore) {
      // Not first load, skip loader
      setIsInitialLoading(false)
    }
    // Removed the timer - let CustomLoader control when to finish
  }, [])
  
  const completeLoading = () => {
    setIsInitialLoading(false)
    sessionStorage.setItem('hasLoadedBefore', 'true')
  }
  
  return { isInitialLoading, completeLoading }
}