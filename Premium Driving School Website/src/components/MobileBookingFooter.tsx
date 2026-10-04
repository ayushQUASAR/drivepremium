'use client'

import { useState, useEffect } from 'react'

export function MobileBookingFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200

      // Show when scrolling up or near bottom
      if (!isScrollingDown || isNearBottom) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    return null
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <a
        href="#contact"
        className="flex items-center justify-center gap-3 w-full bg-gold text-navy font-display font-bold py-4 px-6 text-base shadow-[0_-4px_20px_rgba(200,144,10,0.4)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        Book Free Demo Session
      </a>
    </div>
  )
}