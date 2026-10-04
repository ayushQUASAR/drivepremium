'use client'

import { STATS } from '@/data'
import { useCountUp } from '@/hooks/useCountUp'

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="group flex flex-col items-center text-center min-w-0">
      <div className="font-display font-black text-gold-400 tabular-nums leading-none whitespace-nowrap" style={{ fontSize: 'clamp(2.5rem,5vw,3.75rem)' }}>
        {count}{suffix}
      </div>
      <div className="font-body text-cream/50 text-xs mt-2 leading-snug whitespace-nowrap">{label}</div>
    </div>
  )
}

function RatingBlock() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[320px] mx-auto">
      <div className="pt-8">
        <span className="font-display font-black text-white leading-none tracking-tight" style={{ 
          fontSize: 'clamp(5rem,14vw,8rem)',
          fontFamily: 'Outfit, sans-serif',
          textShadow: '0 0 60px rgba(232,168,0,0.3), 0 8px 32px rgba(0,0,0,0.4)',
        }}>
          5
        </span>
      </div>
      <div className="flex items-center gap-2" style={{ gap: 'clamp(0.5rem,1.5vw,1rem)' }}>
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="32" height="32" viewBox="0 0 24 24" fill="#E8A800" className="w-[clamp(22px,6vw,32px)] h-[clamp(22px,6vw,32px)] drop-shadow-[0_0_10px_rgba(232,168,0,0.5)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <svg className="drop-shadow-[0_0_8px_rgba(66,133,244,0.3)] w-[clamp(60px,16vw,80px)] h-[clamp(22px,6vw,28px)]" viewBox="-3 0 262 262" fill="none" aria-label="Google Reviews" preserveAspectRatio="xMidYMid">
        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
      </svg>
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy/40 backdrop-blur-sm border border-gold/10 text-nowrap">
        <span className="font-display font-bold text-gold-400 text-base sm:text-lg">500+</span>
        <span className="font-body text-cream/60 text-[10px] sm:text-xs">Verified Reviews</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative bg-navy min-h-screen flex items-start overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-800/70" />
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C8900A%22 fill-opacity=%220.3%22%3E%3Cpath d=%22M48 46v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zm0-40V0h-4v6h-6v4h6v6h4V6h6V4h-6zM8 46v-6H4v6H0v4h6v6h4v-6h6v-4H8zm0-40V0H4v6H0v4h6v6h4V6h6V4H8z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-20">
        {/* Row 1: Headline + CTAs + Rating (right side on desktop) */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-stretch pb-12 md:pb-20">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2.5 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" style={{ boxShadow: '0 0 0 3px rgba(232,168,0,0.25)' }} />
              <span className="font-body font-medium text-gold-400 text-[11px] tracking-[0.18em] uppercase">Sector 7, RK Puram · New Delhi</span>
            </div>
            <h1 className="font-display font-black text-white leading-[0.98] tracking-[-0.04em] mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
              Drive Delhi's Roads<br />
              <em className="not-italic text-gold-400">With Confidence.</em>
            </h1>
            <p className="font-body text-cream/60 leading-relaxed mb-8 max-w-md" style={{ fontSize: 'clamp(1rem,1.3vw,1.125rem)' }}>
              New Delhi's most trusted driving school — personalised 1:1 training, certified instructors,
              and a 100% pass rate since 2003.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 font-display font-bold text-navy bg-gold hover:bg-gold-400 px-6 py-3.5 rounded-xl text-[14px] sm:text-[15px] transition-all duration-200 hover:scale-[1.02]" style={{ boxShadow: '0 6px 32px rgba(200,144,10,0.35)' }}>
                Book Free Demo Session
              </a>
              <a href="https://wa.me/919871520896" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 font-display font-semibold text-cream/80 hover:text-cream border border-cream/15 hover:border-cream/30 px-6 py-3.5 rounded-xl text-[14px] sm:text-[15px] transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Rating - Fixed on right side, vertically centered */}
          <div className="hidden lg:block h-full flex items-center justify-center">
            <RatingBlock />
          </div>
        </div>

        {/* Row 2: Stats Bar - Full Width Below */}
        <div className="py-8 border-y border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-6 md:gap-10 min-w-0">
                <StatCounter {...s} />
                {i < STATS.length - 1 && <div className="w-full sm:w-px h-px sm:h-auto bg-cream/10 self-stretch hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Mobile Rating - Below Stats on Mobile Only */}
        <div className="lg:hidden py-12">
          <RatingBlock />
        </div>
      </div>
    </section>
  )
}