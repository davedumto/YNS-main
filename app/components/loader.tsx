"use client"

import { useState, useEffect, useRef } from "react"

interface CustomLoaderProps {
  onComplete?: () => void;
}

export default function CustomLoader({ onComplete }: CustomLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLoader, setShowLoader] = useState(false)
  const [debugInfo, setDebugInfo] = useState("Initializing...")

  useEffect(() => {
    console.log('🚀 Loader started at:', new Date().toLocaleTimeString())
    
    // Phase 1: Type "WELCOME TO"
    setTimeout(() => {
      setDebugInfo("Typing 'WELCOME TO'...")
      typeText('welcome-text', 'WELCOME TO', 100, () => {
        console.log('✅ Welcome complete at:', new Date().toLocaleTimeString())
        
        // Phase 2: Type main text after welcome is done
        setTimeout(() => {
          setDebugInfo("Typing main text...")
          typeText('main-text-line1', 'YOUNG AND SKILLED', 80, () => {
            console.log('✅ First line complete at:', new Date().toLocaleTimeString())
            
            // Type second line immediately after first line
            typeText('main-text-line2', 'ADVANCEMENT INITIATIVE', 80, () => {
              console.log('✅ Main text complete at:', new Date().toLocaleTimeString())
              
              // Phase 3: Show loader after main text is done
              setTimeout(() => {
                setDebugInfo("Showing loader animation...")
                setShowLoader(true) 
                
                // Complete after 3 seconds + 2 second delay
                setTimeout(() => {
                  setDebugInfo("Animation complete!")
                  onComplete?.()
                }, 5000) // Changed from 3000 to 5000 (3s animation + 2s delay)
              }, 500)
            })
          })
        }, 500)
      })
    }, 500)

  }, [onComplete])

  const typeText = (elementId: string, text: string, speed: number, callback: () => void) => {
    const element = document.getElementById(elementId)
    if (!element) return

    let index = 0
    element.innerHTML = ''
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text[index]
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(callback, 200)
      }
    }, speed)
  }

  return (
    <div ref={containerRef} className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">

      {/* Typewriter Text */}
      <div className="text-center space-y-4 mb-16 min-h-[250px] flex flex-col justify-center">
        {/* Welcome To */}
        <div className="relative">
          <h2 
            id="welcome-text"
            className="text-2xl md:text-2xl  text-gray-600 font-manrope mb-4 "
          />
        </div>

        {/* Main Text */}
        <div className="relative">
          {/* Young and Skilled - Keep original gradient styling */}
          <h1 
            id="main-text-line1"
            className="bg-six-color-gradient text-transparent bg-clip-text text-6xl font-cocon leading-tight tracking-tight min-h-[4rem]"
          />
          
          {/* Advancement Initiative - Different styling */}
          <h1 
            id="main-text-line2"
            className="text-slate-800 text-5xl font-light italic leading-tight tracking-wider min-h-[4rem] drop-shadow-lg"
          />
        </div>
      </div>

      {/* Loader Animation */}
      <div className="flex justify-center items-center">
        <div className="block justify-center items-center rotate-[5deg]">
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 m-0.5 bg-gray-400 bg-opacity-25 rounded-md opacity-0 animate-[blinking_0.8s_ease-in-out_infinite] [animation-delay:0.2s]"></div>
            <div className="w-12 h-12 m-0.5 bg-gray-400 bg-opacity-25 rounded-md opacity-0 animate-[blinking_0.8s_ease-in-out_infinite] [animation-delay:0.4s]"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 m-0.5 bg-gray-400 bg-opacity-25 rounded-md opacity-0 animate-[blinking_0.8s_ease-in-out_infinite] [animation-delay:0.6s]"></div>
            <div className="w-12 h-12 m-0.5 bg-gray-400 bg-opacity-25 rounded-md opacity-0 animate-[blinking_0.8s_ease-in-out_infinite] [animation-delay:0.8s]"></div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 font-nunito text-xl mt-8 animate-pulse">Preparing your journey...</p>

      {/* Conditional Loader */}


      <style jsx>{`
        @keyframes blinking {
          0% { opacity: 0.25; background-color: rgba(152, 188, 109, 0.4); }
          25% { opacity: 0.5; background-color: #98BC6D; }
          50% { opacity: 0.75; background-color: #F2A300; }
          75% { opacity: 0.9; background-color: #EF4C0D; }
          100% { opacity: 1; background-color: #114F3C; }
        }
      `}</style>
    </div>
  )
}