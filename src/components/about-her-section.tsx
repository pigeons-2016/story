export default function AboutHerSection() {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Sparkles and Stars */}
        <span className="absolute top-[5%] left-[8%] text-2xl sm:text-3xl opacity-25 animate-float" style={{animationDelay: '0s'}}>✨</span>
        <span className="absolute top-[15%] right-[10%] text-xl sm:text-2xl opacity-20 animate-pulse-subtle" style={{animationDelay: '1s'}}>⭐</span>
        <span className="absolute top-[40%] left-[5%] text-lg sm:text-xl opacity-15 animate-drift" style={{animationDelay: '2s'}}>💫</span>
        <span className="absolute bottom-[25%] right-[8%] text-2xl sm:text-3xl opacity-25 animate-float" style={{animationDelay: '1.5s'}}>✨</span>
        <span className="absolute bottom-[40%] left-[12%] text-xl sm:text-2xl opacity-20 animate-pulse-subtle" style={{animationDelay: '3s'}}>⭐</span>
        <span className="absolute top-[60%] right-[15%] text-lg sm:text-xl opacity-15 animate-drift" style={{animationDelay: '2.5s'}}>💫</span>
        
        {/* Hearts */}
        <span className="absolute top-[10%] left-[20%] text-lg sm:text-xl opacity-30 animate-pulse-subtle" style={{animationDelay: '0.5s'}}>💕</span>
        <span className="absolute bottom-[15%] right-[20%] text-base sm:text-lg opacity-25 animate-float" style={{animationDelay: '2s'}}>💝</span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">✨</p>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-2">About Her</p>
          <p className="text-sm sm:text-base text-muted-foreground italic">The little things about her</p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* Food Preferences */}
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl">🍽️</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">Food She Loves</h3>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-foreground/80">
              <div className="flex items-start gap-2">
                <span className="text-lg">🍚</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Rice Wali Dishes</p>
                  <p className="leading-relaxed">Biryani, Jangli Pulao, Kabli Pulao... is trha se</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🥘</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">The Ultimate Favorite</p>
                  <p className="italic text-primary/90 leading-relaxed">"O halwa puri ho tu phr aur kisi cheez ka sawal hi paida nhi hota!!"</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🫓</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Also Loves</p>
                  <p className="leading-relaxed">Chany Parathy</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">☕</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Evening Chai Time</p>
                  <p className="leading-relaxed">Loves her evening chai time—it's a very serious and important part of her day. Its not just a "tea".</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🍦</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Ice Cream</p>
                  <p className="leading-relaxed">Loves ice cream a lot—like, really a lot.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Adventure & Paradoxes */}
          <div className="bg-gradient-to-br from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/50 hover:border-primary/80 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl">🎢</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">Her Adventurous Side</h3>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-foreground/80">
              <div className="flex items-start gap-2">
                <span className="text-lg">🪂</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">The Beautiful Paradox</p>
                  <p className="leading-relaxed">Has height phobia, but still loves paragliding, bungee jumping, and heighted places. That's courage!</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🏊‍♀️</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Swimming</p>
                  <p className="leading-relaxed">Loves swimming but never tried it yet. Someday soon, maybe?</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🗺️</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Tourism & New Places</p>
                  <p className="leading-relaxed">Loves tourism and visiting new places. Always excited to explore somewhere different.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🚗</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Long Drives</p>
                  <p className="leading-relaxed">Loves long drives—the kind where you just keep going with no rush, no stops at relative houses.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-lg">🚶‍♀️</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Walks</p>
                  <p className="leading-relaxed">Loves going for walks, peaceful and simple.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Discussions */}
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl">🌍</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">Her Curious Mind</h3>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-foreground/80">
              <div className="flex items-start gap-2">
                <span className="text-lg">🗞️</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">International Affairs</p>
                  <p className="leading-relaxed">Loves discussing international affairs and what's happening in the world—politics, wars, global issues. She stays aware and engaged.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl">📊</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">Little Stats</h3>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base text-foreground/80">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-primary">108</span>
                <div>
                  <p className="font-semibold text-foreground">Times She Typed My Name</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">From Oct 28, 2025 to Feb 7, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
