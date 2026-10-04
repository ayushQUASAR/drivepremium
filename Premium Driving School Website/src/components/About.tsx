'use client'

import { INSTRUCTORS } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em] mb-7" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Delhi's Most Trusted School Since 2003.
            </h2>
            <p className="font-body text-slate leading-relaxed mb-4 text-[15px]">
              Pro Motor was founded in Sector 7, RK Puram with one mission: produce genuinely safe, confident
              drivers.
            </p>
            <p className="font-body text-slate leading-relaxed mb-10 text-[15px]">
              Our 1:1 model, completion guarantee, and door-to-door service have made us the first
              choice for families and professionals across South Delhi.
            </p>
            <div className="border-l-2 border-gold pl-6 mb-10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Traffic Rules & Signage', 'Clutch & Gear Mastery',
                  'City Traffic Navigation', 'Parking Techniques',
                  'Highway Driving', 'Night & Monsoon Driving',
                  'Emergency Manoeuvres', 'RTO Test Preparation',
                ].map(m => (
                  <div key={m} className="font-body text-navy/65 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="relative mb-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1553782097-130fef5d3e27?w=800&h=600&fit=crop&auto=format"
                  alt="Pro Motor instructor guiding a learner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 border-2 border-gold/30 rounded-2xl w-24 h-24" />
            </div>
            <div className="font-body font-medium text-slate text-xs tracking-[0.18em] uppercase mb-4">Your Instructors</div>
            <div className="grid grid-cols-2 gap-3">
              {INSTRUCTORS.map(inst => (
                <div key={inst.name} className="bg-white rounded-xl p-4 border border-warm hover:border-gold/25 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-black text-white text-xs mb-3" style={{ backgroundColor: inst.color }}>
                    {inst.initials}
                  </div>
                  <div className="font-display font-bold text-navy text-[14px] leading-tight mb-0.5">{inst.name}</div>
                  <div className="font-body text-gold text-[11px] font-medium mb-1">{inst.exp}</div>
                  <div className="font-body text-slate text-[11px] leading-snug">{inst.specialty}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}