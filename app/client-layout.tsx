// app/client-layout.tsx
"use client"
import { useInitialLoading } from "@/app/hooks/use-initial-loading"
import CustomLoader from "@/app/components/loader"
import { useState, useEffect } from "react"
import { Toaster } from 'react-hot-toast'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isInitialLoading, completeLoading } = useInitialLoading()
  const [showContent, setShowContent] = useState(false)
  
  // Handle smooth fadein for main content
  useEffect(() => {
    if (!isInitialLoading) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isInitialLoading])
  
  if (isInitialLoading) {
    return <CustomLoader onComplete={completeLoading} />
  }
  
  return (
    <>
      <div className={`transition-opacity duration-700 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        {children}
      </div>
      
      {/* Toast notifications */}
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}