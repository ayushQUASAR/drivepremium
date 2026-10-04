'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/data'

interface NavbarProps {
  menuOpen: boolean
  onToggle: () => void
}

export function Navbar({ menuOpen, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: solid ? 'rgba(12,31,63,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 350ms ease, border-color 350ms ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 select-none shrink-0">
          <div className="w-9 h-9 bg-gold flex items-center justify-center rounded-[7px] shrink-0">
            <span className="font-display font-black text-navy text-[13px] tracking-tight">PM</span>
          </div>
          <div>
            <div className="font-display font-black text-white text-[15px] tracking-tight leading-none">Pro Motor</div>
            <div className="font-body font-medium text-gold/80 text-[9px] tracking-[0.2em] uppercase mt-0.5">Driving School · New Delhi</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="relative font-body font-medium text-cream/60 hover:text-cream text-sm transition-colors duration-200 group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+919871520896" className="font-body text-cream/50 hover:text-cream text-sm transition-colors">
            +91 98715 20896
          </a>
          <a href="#contact" className="font-display font-bold text-navy bg-gold hover:bg-gold-400 text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105">
            Book Free Demo
          </a>
        </div>

        <button onClick={onToggle} aria-label="Toggle menu" className="md:hidden flex flex-col gap-[5px] items-end p-2">
          <span className={`block h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
          <span className={`block h-px bg-cream/60 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
          <span className={`block h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
        </button>
      </div>
    </nav>
  )
}