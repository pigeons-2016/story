import { useState } from 'react'
import CountdownTimer from './components/countdown-timer'
import StorySection from './components/story-section'
import './App.css'

export default function App() {
  const [showStory, setShowStory] = useState(false)

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/10 relative overflow-hidden">
      {/* Romantic Corner Decorations */}
      {!showStory && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="absolute top-[5%] left-[3%] text-2xl sm:text-3xl opacity-20 animate-float" style={{animationDelay: '0s'}}>💕</span>
          <span className="absolute top-[8%] right-[5%] text-xl sm:text-2xl opacity-25 animate-pulse-subtle" style={{animationDelay: '1s'}}>❤️</span>
          <span className="absolute bottom-[10%] left-[5%] text-lg sm:text-xl opacity-20 animate-drift" style={{animationDelay: '2s'}}>💗</span>
          <span className="absolute bottom-[8%] right-[4%] text-2xl sm:text-3xl opacity-25 animate-float" style={{animationDelay: '1.5s'}}>💕</span>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20 relative z-10">
        {showStory ? (
          <>
            {/* Story View */}
            <StorySection />
            <div className="mt-8 sm:mt-12 flex justify-center">
              <button
                onClick={() => setShowStory(false)}
                className="px-6 sm:px-8 py-3 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base"
              >
                Back to Countdown
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Countdown View */}
            <div className="mb-8 sm:mb-12">
              <CountdownTimer />
            </div>

            <div className="mt-8 sm:mt-12 flex justify-center">
              <button
                onClick={() => setShowStory(true)}
                className="px-6 sm:px-8 py-3 sm:py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm sm:text-base"
              >
                Story Behind Countdown
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
