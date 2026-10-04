'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { MobileMenu } from '@/components/MobileMenu'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'
import { Fleet } from '@/components/Fleet'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { CTABand } from '@/components/CTABand'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { MobileBookingFooter } from '@/components/MobileBookingFooter'
import { StructuredData } from '@/components/StructuredData'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen font-body" style={{ color: 'var(--color-navy)', backgroundColor: 'var(--color-cream)' }}>
      <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen(m => !m)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Fleet />
        <About />
        <Testimonials />
        <CTABand />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBookingFooter />
      <StructuredData />
    </div>
  )
}