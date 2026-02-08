export default function TimelineSection() {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
      {/* Romantic Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Hearts */}
        <span className="absolute top-[8%] left-[5%] text-xl sm:text-2xl opacity-20 animate-float" style={{animationDelay: '0s'}}>💕</span>
        <span className="absolute top-[20%] right-[8%] text-lg sm:text-xl opacity-25 animate-pulse-subtle" style={{animationDelay: '1s'}}>❤️</span>
        <span className="absolute top-[35%] left-[7%] text-base sm:text-lg opacity-15 animate-drift" style={{animationDelay: '2s'}}>💗</span>
        <span className="absolute top-[50%] right-[6%] text-xl sm:text-2xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}>💕</span>
        <span className="absolute top-[65%] left-[8%] text-lg sm:text-xl opacity-25 animate-pulse-subtle" style={{animationDelay: '3s'}}>❤️</span>
        <span className="absolute top-[80%] right-[7%] text-base sm:text-lg opacity-15 animate-drift" style={{animationDelay: '2.5s'}}>💗</span>
        {/* Sparkles */}
        <span className="absolute top-[15%] left-[15%] text-sm sm:text-base opacity-30 animate-pulse-subtle" style={{animationDelay: '0.5s'}}>✨</span>
        <span className="absolute top-[45%] right-[12%] text-sm sm:text-base opacity-25 animate-float" style={{animationDelay: '2.5s'}}>✨</span>
        <span className="absolute top-[75%] left-[18%] text-sm sm:text-base opacity-30 animate-drift" style={{animationDelay: '1.5s'}}>✨</span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">⏳</p>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-2">Our Journey Through Time</p>
          <p className="text-sm sm:text-base text-muted-foreground italic">Every moment led us here</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] sm:left-[30px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12">
            {/* Event 1: 2016 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">👀</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">2016</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">First Saw Her</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  The day everything changed. Saw her for the first time and fell in love instantly. Those eyes, that smile—it was impossible not to fall.
                </p>
              </div>
            </div>

            {/* Event 2: 2016-2021 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💭</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">2016-2021</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Years of One-Sided Silent Love</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Five long years of loving her from a distance. She didn't know, and he never said anything. Just admiring from afar, hoping someday things might change.
                </p>
              </div>
            </div>

            {/* Event 3: 2021 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">🌅</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">2021</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">A Hope, Finally</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Something changed. For the first time, there was a possibility—a tiny glimmer of hope that maybe, just maybe, things could work out.
                </p>
              </div>
            </div>

            {/* Event 4: 2025 Chaos */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">⛈️</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">2025</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Chaos Begins</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Things got complicated. Circumstances, misunderstandings, and lack of communication made everything harder. The path forward seemed unclear and difficult.
                </p>
              </div>
            </div>

            {/* Event 5: October 28, 2025 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💍</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">October 28, 2025</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">The Promise & First Chat</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Sort of engagement and our first chat ever. She had disappearing messages enabled on WhatsApp, so most messages vanished. Only managed to save one:<br />
                  <span className="text-primary/90 italic font-medium mt-2 block">"May everything stay smooth in future to"</span>
                </p>
              </div>
            </div>

            {/* Event 6: Oct 2025 - Jan 2026 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">🗨️</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">Oct 2025 - Jan 2026</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Getting to Know Each Other</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Started chatting a little bit. Both trying to understand each other, learning about likes and dislikes, sharing thoughts. Taking it slow, one conversation at a time.
                </p>
              </div>
            </div>

            {/* Event 7: January 8, 2026 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💪</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">January 8, 2026</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Morning Workout Together</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Woke up early in the morning. She did her workout at her home, and I did mine. We were connected on WhatsApp chat while working out—felt nice to be doing something together even from different places.
                </p>
              </div>
            </div>

            {/* Event 8: January 9, 2026 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-gradient-to-br from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/50 hover:border-primary/80 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💘</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">January 9, 2026</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">First Line Ever</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3">
                  This was it. First time I ever threw a flirty line toward a girl. The chat went like this:
                </p>
                <div className="bg-background/40 rounded-md p-3 space-y-2 text-xs sm:text-sm">
                  <p className="text-foreground/80">
                    <span className="font-semibold text-pink-400">She:</span> "mn slow motion mn lgi hoi tu mama dekh rhi thi kya kr rhi ye<br />
                    tu btaya mama ko k Abu Bakar ko bhi sath lgaya hwa 😂"
                  </p>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-pink-400">She:</span> "hns rhi thi,<br />
                    mzaaq bna rhi thi k vd call py kr lo 🤣"
                  </p>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-primary">Me:</span> "😂, mery dil ki baat kh di unhu ne"
                  </p>
                </div>
              </div>
            </div>

            {/* Event 10: January 28, 2026 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-background shadow-lg animate-pulse-subtle" />
              <div className="bg-gradient-to-br from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/50 hover:border-primary/80 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">🎙️</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">January 28, 2026</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">First Voice Message</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Received her first voice message on WhatsApp. Hearing her voice for the first time in a message—it felt different, more personal. A simple voice note, but it meant everything.
                </p>
              </div>
            </div>

            {/* Event 11: January 29, 2026 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-background shadow-lg animate-pulse" />
              <div className="bg-gradient-to-br from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/50 hover:border-primary/80 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💯</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">January 29, 2026</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Got the Comment</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-2">
                  She said it. The words I never thought I'd hear:
                </p>
                <div className="bg-background/40 rounded-md p-3 text-center">
                  <p className="text-primary font-semibold text-sm sm:text-base">
                    "your flirting skills 100/100 🫣🫢"
                  </p>
                </div>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mt-2">
                  That comment meant more than she probably knew.
                </p>
              </div>
            </div>

            {/* Event 12: Present */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-background shadow-lg animate-pulse" />
              <div className="bg-gradient-to-br from-primary/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/50 hover:border-primary/80 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💬</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">January 2026 - Present</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">Spending Hours on Chat</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  From January onwards, we spend a lot of time chatting. Hours and hours, talking about everything and nothing. Sometimes we chat till 1 AM, 2 AM, even 3 AM. Just don't want the conversations to end.
                </p>
              </div>
            </div>

            {/* Event 13: Coming Soon */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-[11px] sm:left-[21px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary via-pink-500 to-purple-500 rounded-full border-4 border-background shadow-lg animate-pulse" style={{ animationDuration: '1.5s' }} />
              <div className="bg-gradient-to-br from-primary/30 to-pink-500/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-primary/60 hover:border-primary/90 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl">💕</span>
                  <p className="font-display text-xl sm:text-2xl font-bold text-primary">Very Soon...</p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">The Day We've Been Waiting For</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  After all these years of waiting, after all the chats and conversations, the day is finally coming when we'll meet. When the distance won't matter anymore. When everything becomes real. 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
