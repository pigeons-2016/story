import { useState } from 'react'
import CountdownTimer from './components/countdown-timer'
import StorySection from './components/story-section'
import './App.css'

export default function App() {
  const [showStory, setShowStory] = useState(false)

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-20">
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
