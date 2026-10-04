'use client'

import { WA_PATH } from '@/data'

export function CTABand() {
  return (
    <section className="bg-gold py-20 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-55deg, #0C1F3F 0px, #0C1F3F 1px, transparent 0px, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="font-body font-medium text-navy/50 text-[11px] tracking-[0.2em] uppercase mb-6">Get Started Today</div>
        <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.04em] mb-6" style={{ fontSize: 'clamp(2.5rem,5.5vw,4.5rem)' }}>
          Your First Lesson Is Free.
        </h2>
        <p className="font-body text-navy/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Book a complimentary 30-minute demo session with one of our certified instructors —
          no commitment, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-display font-bold text-gold bg-navy hover:bg-navy-800 px-8 py-4 rounded-xl text-[15px] transition-all duration-200 hover:scale-[1.03]"
            style={{ boxShadow: '0 8px 32px rgba(12,31,63,0.3)' }}
          >
            Book Free Demo Session
          </a>
          <a
            href="https://wa.me/919871520896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-display font-semibold text-navy border-2 border-navy/30 hover:border-navy px-8 py-4 rounded-xl text-[15px] transition-all duration-200"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH} /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}