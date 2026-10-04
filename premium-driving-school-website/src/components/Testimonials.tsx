'use client'

import { TESTIMONIALS } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Customer Reviews</SectionLabel>
            <h2 className="font-display font-black text-white leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              500+ Customers.<br />One Common Story.
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <svg width="20" height="20" viewBox="0 0 120 42" fill="none" aria-label="Google Reviews" preserveAspectRatio="xMidYMid">
              <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
              <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
              <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
              <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
            </svg>
            <span className="font-body font-medium text-cream/60 text-sm">4.9 on Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="group relative bg-[#0f2647] border border-cream/[0.07] hover:border-gold/20 rounded-2xl p-7 transition-all duration-300 hover:bg-[#122b52]"
            >
              <div
                className="absolute top-5 right-6 font-display font-black text-gold/10 leading-none select-none pointer-events-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}
              >
                "
              </div>
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map(n => (
                  <svg key={n} width="12" height="12" viewBox="0 0 24 24" fill="#E8A800">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="font-body text-cream/75 text-sm leading-relaxed mb-7 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-cream/[0.07]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display font-black text-white text-xs shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{t.name}</div>
                  <div className="font-body text-cream/35 text-xs mt-0.5">{t.location} · {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}