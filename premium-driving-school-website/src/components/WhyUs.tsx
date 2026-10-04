'use client'

import { USP_FEATURES } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <SectionLabel>Why Pro Motor</SectionLabel>
            <h2 className="font-display font-black text-white leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Every policy built for you — not our convenience.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/[0.06] rounded-2xl overflow-hidden">
            {USP_FEATURES.map((usp, i) => (
              <div key={usp.title} className="group bg-navy hover:bg-[#0f2647] transition-colors duration-200 p-7">
                <div className="font-display font-bold text-gold/30 group-hover:text-gold/50 text-xs tracking-[0.12em] uppercase mb-4 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display font-bold text-white text-base mb-2 group-hover:text-gold-400 transition-colors duration-200">
                  {usp.title}
                </div>
                <div className="font-body text-cream/40 text-sm leading-relaxed">{usp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}