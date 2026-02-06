import { useState, useEffect } from 'react'

export default function StorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
      {/* Romantic Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Pigeons */}
        <span className="absolute top-[8%] left-[5%] text-2xl sm:text-3xl opacity-20 animate-float" style={{animationDelay: '0s'}}>🕊️</span>
        <span className="absolute top-[15%] right-[8%] text-xl sm:text-2xl opacity-25 animate-drift" style={{animationDelay: '2s'}}>🕊️</span>
        <span className="absolute top-[45%] left-[3%] text-lg sm:text-xl opacity-15 animate-float" style={{animationDelay: '4s'}}>🕊️</span>
        <span className="absolute bottom-[20%] right-[5%] text-2xl sm:text-3xl opacity-20 animate-drift" style={{animationDelay: '1s'}}>🕊️</span>
        <span className="absolute bottom-[35%] left-[10%] text-xl sm:text-2xl opacity-25 animate-float" style={{animationDelay: '3s'}}>🕊️</span>
        
        {/* Floating Hearts */}
        <span className="absolute top-[12%] left-[15%] text-lg sm:text-xl opacity-30 animate-pulse-subtle" style={{animationDelay: '0.5s'}}>💕</span>
        <span className="absolute top-[25%] right-[12%] text-base sm:text-lg opacity-25 animate-float" style={{animationDelay: '1.5s'}}>❤️</span>
        <span className="absolute top-[38%] right-[20%] text-sm sm:text-base opacity-20 animate-pulse-subtle" style={{animationDelay: '2.5s'}}>💗</span>
        <span className="absolute top-[52%] left-[18%] text-lg sm:text-xl opacity-35 animate-drift" style={{animationDelay: '1s'}}>💕</span>
        <span className="absolute top-[65%] right-[15%] text-base sm:text-lg opacity-30 animate-pulse-subtle" style={{animationDelay: '3s'}}>❤️</span>
        <span className="absolute bottom-[12%] left-[22%] text-sm sm:text-base opacity-25 animate-float" style={{animationDelay: '2s'}}>💗</span>
        <span className="absolute bottom-[28%] right-[25%] text-lg sm:text-xl opacity-30 animate-pulse-subtle" style={{animationDelay: '0s'}}>💕</span>
        <span className="absolute top-[20%] left-[40%] text-base sm:text-lg opacity-20 animate-drift" style={{animationDelay: '4s'}}>❤️</span>
        <span className="absolute bottom-[40%] right-[35%] text-sm sm:text-base opacity-25 animate-float" style={{animationDelay: '2.5s'}}>💗</span>
        <span className="absolute top-[70%] left-[8%] text-lg sm:text-xl opacity-30 animate-pulse-subtle" style={{animationDelay: '1.5s'}}>💕</span>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6 sm:mb-8 text-center">
          The Tale of Two Pigeons 💕
        </p>

        <div className="space-y-4 sm:space-y-6 text-foreground/80 leading-relaxed">
          <p className="text-sm sm:text-base md:text-lg">
            Around 2016, a young male pigeon caught sight of the most enchanting female pigeon he'd ever seen. Those eyes—big, sparkling, absolutely breathtaking—made his heart skip a beat. In that single moment, he fell. Deeply, hopelessly, beautifully in love.
          </p>

          <p className="text-sm sm:text-base md:text-lg">
            For 10 years, she was his first thought each morning and his last wish every night. He carried her smile in his heart, stealing glances whenever he could, feeling butterflies in his chest at the mere thought of her. Every sunrise whispered her name, every sunset held the promise of what could be.
          </p>

          <p className="text-sm sm:text-base md:text-lg">
            Then came 2021, and his world shifted. His prayers were finally heard, his dreams began to take flight. Hope bloomed in his chest like spring flowers after a long winter—a tender promise that someday, somehow, their hearts would intertwine forever.
          </p>

          <p className="text-sm sm:text-base md:text-lg">
            In 2025, fate smiled upon them. A date was set—the day when he would finally hold her close, look into those beautiful eyes, and never let go. Now his days are filled with sweet anticipation, counting down every moment until he can wrap his wings around her and whisper, "You're finally mine."
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic text-primary/70 pt-2 sm:pt-4">
            This countdown is his love letter to time itself, each second a heartbeat drawing them closer, each day a step toward the forever they've both been dreaming of... 💕
          </p>
        </div>

        {/* Button to open modal */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            <span>💕</span>
            <span>Click To See Pigeons</span>
            <span>💕</span>
          </button>
        </div>
      </div>

      {/* Heart-shaped Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Heart Container */}
            <div className="heart-shape relative w-full h-full overflow-hidden">
              <img 
                src="/story/image.png"
                alt="Our precious memory" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-primary/90 transition-all shadow-lg hover:scale-110 text-xl"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
