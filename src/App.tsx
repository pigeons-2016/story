import { useState, useRef, useEffect } from 'react'
import CountdownTimer from './components/countdown-timer'
import StorySection from './components/story-section'
import TimelineSection from './components/timeline-section'
import RomanticSection from './components/romantic-section'
import AboutHerSection from './components/about-her-section'
import './App.css'

export default function App() {
  const [showStory, setShowStory] = useState(false)
  const [activeTab, setActiveTab] = useState<'story' | 'romantic' | 'timeline' | 'about-her'>('story')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Stop audio only when leaving story view
  useEffect(() => {
    if (audioRef.current && !showStory) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [showStory])

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
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-card rounded-lg shadow-sm border border-border p-1 inline-flex gap-1 flex-wrap">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-all duration-200 text-sm sm:text-base ${
                    activeTab === 'story'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  📖 The Tale
                </button>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-all duration-200 text-sm sm:text-base ${
                    activeTab === 'timeline'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ⏳ The Timeline
                </button>
                <button
                  onClick={() => setActiveTab('romantic')}
                  className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-all duration-200 text-sm sm:text-base ${
                    activeTab === 'romantic'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  💕 The Feeling
                </button>
                <button
                  onClick={() => setActiveTab('about-her')}
                  className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-all duration-200 text-sm sm:text-base ${
                    activeTab === 'about-her'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ✨ About Her
                </button>
              </div>
            </div>

            {/* Story View */}
            {activeTab === 'story' && <StorySection />}

            {/* Timeline View */}
            {activeTab === 'timeline' && <TimelineSection />}

            {/* Romantic/Song View */}
            {activeTab === 'romantic' && (
              <RomanticSection 
                isPlaying={isPlaying} 
                toggleAudio={toggleAudio}
              />
            )}

            {/* About Her View */}
            {activeTab === 'about-her' && <AboutHerSection />}
            
            {/* Hidden Audio Element - persists across all tabs */}
            <audio ref={audioRef} src="/story/feeling.mp3" loop />
            
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
