'use client'

import { useEffect } from 'react'
import { NAV_LINKS } from '@/data'
import { WA_PATH } from '@/data'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const allLinks = [{ label: 'Home', href: '#home' }, ...NAV_LINKS]

  return (
    <div
      className="fixed inset-0 z-40 md:hidden flex flex-col"
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 450ms cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'linear-gradient(160deg, #0C1F3F 0%, #11244A 55%, #0E2040 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-55deg, transparent 0px, transparent 42px, rgba(200,144,10,0.035) 42px, rgba(200,144,10,0.035) 43px)',
        }}
      />
      <div
        className="absolute bottom-20 right-0 font-display font-black text-cream pointer-events-none select-none leading-none"
        style={{
          fontSize: 'clamp(4rem,16vw,7rem)',
          opacity: 0.03,
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '-0.04em',
        }}
      >
        PRO MOTOR
      </div>
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="relative flex flex-col h-full px-8 pt-[88px] pb-10">
        <nav className="flex-1">
          {allLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline justify-between py-[18px]"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: isOpen ? `${i * 70 + 60}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(22px)',
              }}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display font-medium text-gold/60 text-sm tabular-nums" style={{ fontSize: '13px' }}>
                  0{i + 1}
                </span>
                <span className="font-display font-black text-white group-hover:text-gold-400 transition-colors duration-200" style={{ fontSize: 'clamp(1.7rem,5vw,2.4rem)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {link.label}
                </span>
              </div>
              <span
                className="text-gold/50 group-hover:text-gold-400 transition-all duration-300 text-lg"
                style={{
                  transform: 'translateX(-8px)',
                  transition: 'all 300ms ease',
                }}
              >
                →
              </span>
            </a>
          ))}
        </nav>
        <div
          style={{
            transition: 'opacity 500ms ease, transform 500ms ease',
            transitionDelay: isOpen ? '430ms' : '0ms',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
          }}
        >
          <a
            href="https://wa.me/919871520896"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl mb-3 font-display font-bold text-white text-[15px]"
            style={{ background: '#25D366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH} /></svg>
            Chat on WhatsApp
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3.5 rounded-xl mb-7 font-display font-bold text-navy bg-gold hover:bg-gold-400 transition-colors text-[15px]"
          >
            Book Free Demo Session
          </a>
          <p className="text-center font-body text-cream/25 text-xs leading-relaxed">
            Sector 7, RK Puram, New Delhi — 110022<br />
            Mon–Sun · 6 AM to 8 PM · +91 98715 20896
          </p>
        </div>
      </div>
    </div>
  )
}