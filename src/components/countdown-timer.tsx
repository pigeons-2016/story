import { useEffect, useState } from 'react'

type DisplayMode = 'breakdown' | 'minutes' | 'hours' | 'seconds'

interface TimeData {
  days: number
  hours: number
  minutes: number
  seconds: number
  totalMinutes: number
  totalHours: number
  totalSeconds: number
}

export default function CountdownTimer() {
  const [time, setTime] = useState<TimeData | null>(null)
  const [displayMode, setDisplayMode] = useState<DisplayMode>('breakdown')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTime = () => {
      const targetDate = new Date('2026-04-04T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalMinutes: 0,
          totalHours: 0,
          totalSeconds: 0,
        })
        return
      }

      const totalSeconds = Math.floor(difference / 1000)
      const days = Math.floor(totalSeconds / (24 * 3600))
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      const totalMinutes = Math.floor(totalSeconds / 60)
      const totalHours = Math.floor(totalSeconds / 3600)

      setTime({
        days,
        hours,
        minutes,
        seconds,
        totalMinutes,
        totalHours,
        totalSeconds,
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted || !time) {
    return (
      <div className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
        <div className="text-center">
          <div className="h-20 bg-muted rounded animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sm:p-8 md:p-12">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
          Until Forever - And Beyond
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">April 4th, 2026</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 border-b border-border overflow-x-auto">
        <button
          onClick={() => setDisplayMode('breakdown')}
          className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
            displayMode === 'breakdown'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="hidden sm:inline">Days : Hours : Minutes : Seconds</span>
          <span className="sm:hidden">DHMS</span>
        </button>
        <button
          onClick={() => setDisplayMode('minutes')}
          className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
            displayMode === 'minutes'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="hidden sm:inline">Total Minutes</span>
          <span className="sm:hidden">Minutes</span>
        </button>
        <button
          onClick={() => setDisplayMode('hours')}
          className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
            displayMode === 'hours'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="hidden sm:inline">Total Hours</span>
          <span className="sm:hidden">Hours</span>
        </button>
        <button
          onClick={() => setDisplayMode('seconds')}
          className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
            displayMode === 'seconds'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="hidden sm:inline">Total Seconds</span>
          <span className="sm:hidden">Seconds</span>
        </button>
      </div>

      {/* Display Content */}
      <div className="mt-8 sm:mt-12">
        {displayMode === 'breakdown' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <CountdownBox label="Days" value={time.days} />
            <CountdownBox label="Hours" value={time.hours} />
            <CountdownBox label="Minutes" value={time.minutes} />
            <CountdownBox label="Seconds" value={time.seconds} />
          </div>
        )}

        {displayMode === 'minutes' && (
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-3 sm:mb-4">
                {time.totalMinutes.toLocaleString()}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">minutes remaining</p>
            </div>
          </div>
        )}

        {displayMode === 'hours' && (
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-3 sm:mb-4">
                {time.totalHours.toLocaleString()}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">hours remaining</p>
            </div>
          </div>
        )}

        {displayMode === 'seconds' && (
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-3 sm:mb-4">
                {time.totalSeconds.toLocaleString()}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">seconds remaining</p>
            </div>
          </div>
        )}
      </div>

      {/* Decorative line */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  )
}

function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-linear-to-br from-secondary/20 to-primary/5 rounded-lg p-4 sm:p-6 text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <p className="text-muted-foreground font-semibold text-xs sm:text-sm uppercase tracking-wide">{label}</p>
    </div>
  )
}
