'use client'

import { useState } from 'react'
import { FLEET } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

function Filters({ options, active, onChange }: { options: string[]; active: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map(o => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`font-body font-medium text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
            active === o
              ? 'bg-navy text-gold-400 border-navy'
              : 'bg-white text-navy/50 border-warm hover:border-navy/25 hover:text-navy'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export function Fleet() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [transFilter, setTransFilter] = useState('All')

  const filtered = FLEET.filter(c =>
    (typeFilter === 'All' || c.type === typeFilter) &&
    (transFilter === 'All' || c.transmission === transFilter)
  )

  return (
    <section id="fleet" className="py-24 md:py-32 bg-warm">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <SectionLabel>Training Fleet</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              8 Cars.<br />Every Skill Level.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Filters options={['All', 'Hatchback', 'Sedan', 'SUV']} active={typeFilter} onChange={setTypeFilter} />
            <div className="hidden sm:block w-px bg-navy/10 self-stretch" />
            <Filters options={['All', 'Manual', 'Automatic']} active={transFilter} onChange={setTransFilter} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(car => (
            <div
              key={car.id}
              className="group bg-white rounded-2xl overflow-hidden border border-warm hover:border-gold/25 hover:shadow-[0_12px_48px_rgba(12,31,63,0.1)] transition-all duration-350"
            >
              <div className="relative overflow-hidden h-40 bg-white">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {car.tag && (
                  <span className="absolute top-3 left-3 font-body font-semibold text-[10px] tracking-wide uppercase bg-navy/80 backdrop-blur-sm text-gold-400 px-2.5 py-1 rounded-full">
                    {car.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy text-[15px] mb-2">{car.name}</h3>
                <div className="flex gap-1.5 mb-4">
                  {[car.type, car.transmission].map(t => (
                    <span key={t} className="font-body text-[11px] text-slate bg-warm px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-navy text-base">{car.price}</span>
                  <a href="#contact" className="font-body text-xs text-gold hover:text-gold-400 transition-colors border-b border-gold/25 hover:border-gold-400 pb-px">
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 font-body text-slate">
            No cars match this filter combination.
          </div>
        )}
      </div>
    </section>
  )
}