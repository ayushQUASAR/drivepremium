'use client'

import { useState } from 'react'
import { FAQS } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em] mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3rem)' }}>
              Common Questions
            </h2>
            <p className="font-body text-slate text-sm leading-relaxed mb-8">
              Still have a question? Call or WhatsApp us and we'll answer within 30 minutes.
            </p>
            <a href="tel:+919871520896" className="font-display font-bold text-navy border-b-2 border-gold text-sm pb-0.5 hover:text-gold transition-colors">
              +91 98715 20896 →
            </a>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-250 ${open === i ? 'border-gold/30 shadow-sm' : 'border-warm'}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-7 py-5 text-left"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display font-bold text-gold/40 text-xs tabular-nums shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display font-bold text-navy text-base leading-snug">{faq.q}</span>
                  </div>
                  <span
                    className="w-7 h-7 rounded-full border border-warm flex items-center justify-center text-navy/40 shrink-0 transition-all duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? '200px' : '0' }}>
                  <p className="font-body text-slate text-sm leading-relaxed px-7 pb-6 pl-[calc(1.75rem+2rem+1rem)]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}