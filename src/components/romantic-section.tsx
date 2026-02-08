interface RomanticSectionProps {
  isPlaying: boolean
  toggleAudio: () => void
}

export default function RomanticSection({ isPlaying, toggleAudio }: RomanticSectionProps) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
      {/* Romantic Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dandelions */}
        <span className="absolute top-[5%] left-[8%] text-2xl sm:text-3xl opacity-25 animate-float" style={{animationDelay: '0s'}}>🌼</span>
        <span className="absolute top-[15%] right-[10%] text-xl sm:text-2xl opacity-20 animate-drift" style={{animationDelay: '2s'}}>🌼</span>
        <span className="absolute top-[40%] left-[5%] text-lg sm:text-xl opacity-15 animate-float" style={{animationDelay: '4s'}}>🌼</span>
        <span className="absolute bottom-[25%] right-[8%] text-2xl sm:text-3xl opacity-25 animate-drift" style={{animationDelay: '1s'}}>🌼</span>
        <span className="absolute bottom-[40%] left-[12%] text-xl sm:text-2xl opacity-20 animate-float" style={{animationDelay: '3s'}}>🌼</span>
        <span className="absolute top-[60%] right-[15%] text-lg sm:text-xl opacity-15 animate-drift" style={{animationDelay: '2.5s'}}>🌼</span>
        
        {/* Floating Hearts */}
        <span className="absolute top-[10%] left-[20%] text-lg sm:text-xl opacity-30 animate-pulse-subtle" style={{animationDelay: '0.5s'}}>💕</span>
        <span className="absolute top-[28%] right-[18%] text-base sm:text-lg opacity-25 animate-float" style={{animationDelay: '1.5s'}}>❤️</span>
        <span className="absolute bottom-[15%] left-[25%] text-sm sm:text-base opacity-20 animate-pulse-subtle" style={{animationDelay: '3.5s'}}>💗</span>
        <span className="absolute bottom-[50%] right-[20%] text-lg sm:text-xl opacity-30 animate-drift" style={{animationDelay: '2.5s'}}>💕</span>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          {/* Clickable Dandelion Emoji */}
          <button
            onClick={toggleAudio}
            className="relative inline-flex items-center justify-center group cursor-pointer mb-2"
            title={isPlaying ? 'Click to pause song' : 'Click to play song'}
          >
            <p className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
              🌼
            </p>
            {/* Animated ring indicator */}
            <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
              isPlaying 
                ? 'animate-ping bg-primary/20' 
                : 'bg-primary/10 group-hover:bg-primary/20'
            }`} style={{ animationDuration: '2s' }} />
            {/* Play/Pause overlay icon */}
            <span className="absolute text-xl sm:text-2xl transition-all duration-200 opacity-0 group-hover:opacity-100">
              {isPlaying ? '⏸️' : '▶️'}
            </span>
          </button>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-2">Dandelions</p>
          <p className="text-xs sm:text-sm text-primary/60 italic mt-2">
            {isPlaying ? '🎵 Now playing... Click dandelion to pause' : '💡 Click the dandelion to play the song'}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5 text-foreground/80 leading-relaxed">
          <p className="text-sm sm:text-base md:text-lg text-center italic">
            Maybe it's the way you say my name<br />
            Maybe it's the way you play your game<br />
            But it's so good, I've never known anybody like you<br />
            But it's so good, I've never dreamed of nobody like you
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            And I've heard of a love that comes once in a lifetime<br />
            And I'm pretty sure that you are that love of mine
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center font-semibold text-primary">
            'Cause I'm in a field of dandelions<br />
            Wishing on every one that you'd be mine, mine<br />
            And I see forever in your eyes<br />
            I feel okay when I see you smile, smile
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            Wishing on dandelions all of the time<br />
            Praying to God that one day you'll be mine<br />
            Wishing on dandelions all of the time, all of the time
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            I think that you are the one for me<br />
            'Cause it gets so hard to breathe<br />
            When you're looking at me, I've never felt so alive and free<br />
            When you're looking at me, I've never felt so happy
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            And I've heard of a love that comes once in a lifetime<br />
            And I'm pretty sure that you are that love of mine
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center font-semibold text-primary">
            'Cause I'm in a field of dandelions<br />
            Wishing on every one that you'd be mine, mine<br />
            And I see forever in your eyes<br />
            I feel okay when I see you smile, smile
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            Wishing on dandelions all of the time<br />
            Praying to God that one day you'll be mine<br />
            Wishing on dandelions all of the time<br />
            All of the time
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic text-muted-foreground">
            Dandelion, into the wind you go<br />
            Won't you let my darling know?<br />
            Dandelion, into the wind you go<br />
            Won't you let my darling know that?
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center font-semibold text-primary">
            I'm in a field of dandelions<br />
            Wishing on every one that you'd be mine, mine<br />
            Oh, and I see forever in your eyes<br />
            I feel okay when I see you smile, smile
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center italic">
            Wishing on dandelions all of the time<br />
            Praying to God that one day you'll be mine<br />
            Wishing on dandelions all of the time, all of the time
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center font-semibold text-primary">
            I'm in a field of dandelions<br />
            Wishing on every one that you'd be mine, mine
          </p>
        </div>
      </div>
    </div>
  )
}
