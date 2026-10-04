import { useState, useEffect, useRef } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const STATS = [
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 95, suffix: '%', label: 'First-Attempt Pass Rate' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 365, suffix: '', label: 'Days Open Per Year' },
]

const SERVICES = [
  {
    num: '01',
    title: 'Basic Manual Driving',
    description: 'Master clutch control, gear shifting, and confident navigation through Delhi\'s demanding traffic — with a dedicated certified instructor from day one.',
    price: '₹4,500',
    duration: '30 sessions',
    features: ['RTO-certified curriculum', 'Theory + practical', 'Traffic rule mastery', 'Parking & reversing'],
  },
  {
    num: '02',
    title: 'Automatic Transmission',
    description: 'Learn automatic vehicles at a relaxed pace — ideal for first-time drivers or those transitioning from manual gearboxes.',
    price: '₹5,500',
    duration: '25 sessions',
    features: ['Smooth acceleration control', 'City & highway driving', 'Parking sensors & assists', 'Night driving basics'],
  },
  {
    num: '03',
    title: 'Defensive Driving',
    description: 'Advanced hazard perception and emergency response tailored to Delhi\'s unpredictable roads, expressways, and monsoon conditions.',
    price: '₹6,500',
    duration: '15 sessions',
    features: ['Hazard perception drills', 'Emergency braking', 'Safe overtaking', 'Wet-weather technique'],
  },
  {
    num: '04',
    title: 'Highway & Expressway',
    description: 'Gain genuine confidence on NH-48, DND Flyway, and expressways — lane discipline, speed management, and long-haul preparedness covered.',
    price: '₹3,500',
    duration: '10 sessions',
    features: ['Lane discipline', 'Speed management', 'Expressway etiquette', 'Long-distance readiness'],
  },
]

const USP_FEATURES = [
  { title: '1:1 Training', description: 'Dedicated instructor per student — no shared sessions, ever.' },
  { title: '365 Days Open', description: 'We train on weekends, holidays, and public holidays without exception.' },
  { title: 'Free Pickup & Drop', description: 'Door-to-door service within 5km of Sector 7, RK Puram.' },
  { title: 'Pause & Resume', description: 'Freeze your course for any reason. Sessions never expire.' },
  { title: 'Completion Guarantee', description: 'Unlimited retraining at no cost until you hold your licence.' },
  { title: '95%+ Pass Rate', description: 'Consistently above the Delhi RTO average since 2010.' },
  { title: 'RTO Assistance', description: 'We handle your application, slot booking, and test accompaniment.' },
  { title: 'Flexible Slots', description: 'Morning 6 AM to evening 8 PM — seven days a week.' },
  { title: 'Female Instructors', description: 'Dedicated female instructors matched on request.' },
]

const FLEET = [
  {
    id: 1,
    name: 'Maruti Alto 800',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹4,500/mo',
    tag: 'Beginner Friendly',
    img: 'https://images.unsplash.com/photo-1652267266807-769ad0579cdd?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Maruti WagonR',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹5,000/mo',
    tag: 'Most Popular',
    img: 'https://images.unsplash.com/photo-1663194815175-0f78e4b54ff8?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Maruti Swift',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹5,500/mo',
    tag: null,
    img: 'https://images.unsplash.com/photo-1536206105304-8eaef02fdbe0?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Hyundai i20',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹6,000/mo',
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1748215041497-fdf9c4727681?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 5,
    name: 'Honda City',
    type: 'Sedan',
    transmission: 'Automatic',
    price: '₹7,000/mo',
    tag: 'Automatic',
    img: 'https://images.unsplash.com/photo-1748215041506-2392c951fff2?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 6,
    name: 'Maruti Ciaz',
    type: 'Sedan',
    transmission: 'Manual',
    price: '₹6,500/mo',
    tag: null,
    img: 'https://images.unsplash.com/photo-1748214547306-360d11024747?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 7,
    name: 'Hyundai Venue',
    type: 'SUV',
    transmission: 'Manual',
    price: '₹7,500/mo',
    tag: 'SUV',
    img: 'https://images.unsplash.com/photo-1748214547184-d994bfe53322?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 8,
    name: 'Maruti Brezza',
    type: 'SUV',
    transmission: 'Automatic',
    price: '₹8,000/mo',
    tag: 'Luxury',
    img: 'https://images.unsplash.com/photo-1776635742074-12d9b0d93b74?w=600&h=400&fit=crop&auto=format',
  },
]

const TESTIMONIALS = [
  {
    name: 'Priya Mehta',
    location: 'Sector 7, RK Puram',
    text: 'Cleared my driving test on the very first attempt. Rajesh sir was patient and methodical — the 1:1 sessions gave me real confidence in Delhi traffic, not just test-day confidence.',
    date: 'March 2024',
    initials: 'PM',
    color: '#C8900A',
  },
  {
    name: 'Arjun Sharma',
    location: 'Vasant Vihar',
    text: 'I was genuinely terrified of the Ring Road. After 30 sessions I drive it daily without a second thought. The defensive driving module is worth every rupee on its own.',
    date: 'February 2024',
    initials: 'AS',
    color: '#162E5A',
  },
  {
    name: 'Sunita Kapoor',
    location: 'Munirka',
    text: 'Having a female instructor option was important to me. Priya ma\'am was professional and calm from day one, and free pickup from home made logistics effortless.',
    date: 'January 2024',
    initials: 'SK',
    color: '#1A5C3A',
  },
  {
    name: 'Rahul Verma',
    location: 'RK Puram',
    text: 'Switched from another school after 10 sessions of zero progress. Pro Motor got me test-ready in 20 sessions. The pause-and-resume policy meant work travel never disrupted my course.',
    date: 'December 2023',
    initials: 'RV',
    color: '#5C1A1A',
  },
  {
    name: 'Deepa Nair',
    location: 'Safdarjung Enclave',
    text: 'My husband and I enrolled together. Separate instructors, separate schedules — incredibly flexible. The RTO paperwork assistance alone saved us an entire day.',
    date: 'November 2023',
    initials: 'DN',
    color: '#3A1A5C',
  },
  {
    name: 'Vikram Singh',
    location: 'Malviya Nagar',
    text: 'Specifically needed highway confidence before a Chandigarh trip. Booked the expressway module, got exactly what I needed. Precise instruction, no fluff.',
    date: 'October 2023',
    initials: 'VS',
    color: '#1A3F5C',
  },
]

const FAQS = [
  {
    q: 'How many sessions do I need to learn driving?',
    a: 'Most students require 20–30 sessions of 45 minutes each. We customize the pace based on your progress. Our Completion Guarantee means we train until you\'re test-ready — at no extra cost.',
  },
  {
    q: 'Do you provide pickup and drop service?',
    a: 'Yes. Free pickup and drop within a 5km radius of Sector 7, RK Puram. Areas covered include Munirka, Vasant Vihar, Safdarjung Enclave, and all RK Puram sectors.',
  },
  {
    q: 'Can I pause my training midway?',
    a: 'Absolutely. Our Pause & Resume policy lets you freeze your package for any reason — travel, exams, or personal commitments. Your sessions never expire.',
  },
  {
    q: 'Do you help with the RTO licence test?',
    a: 'Yes. We handle documentation, booking your learner\'s and permanent licence slots, and can accompany you to the RTO on test day if needed.',
  },
  {
    q: 'Are female instructors available?',
    a: 'Yes. We have dedicated female instructors available on request. Mention this while booking and we\'ll match you with an instructor on your first session.',
  },
  {
    q: 'What if I fail my driving test?',
    a: 'Our Completion Guarantee covers you fully. If you fail the RTO test after completing a course, we provide additional training until you pass — no questions asked.',
  },
]

const INSTRUCTORS = [
  { name: 'Rajesh Kumar', exp: '15 Years', specialty: 'Manual & Defensive Driving', initials: 'RK', color: '#0C1F3F' },
  { name: 'Priya Sharma', exp: '10 Years', specialty: 'Automatic & Highway Driving', initials: 'PS', color: '#C8900A' },
  { name: 'Amit Singh', exp: '12 Years', specialty: 'SUV & Heavy Vehicle Training', initials: 'AS', color: '#162E5A' },
  { name: 'Sunita Verma', exp: '8 Years', specialty: 'Beginner & Female Students', initials: 'SV', color: '#1A5C3A' },
]

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true) },
      { threshold: 0.4 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const step = 16
    const inc = target / (duration / step)
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, step)
    return () => clearInterval(t)
  }, [started, target, duration])

  return { count, ref }
}

// ─── Shared primitives ───────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="group">
      <div className="font-display font-black text-gold-400 tabular-nums leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.75rem)' }}>
        {count}{suffix}
      </div>
      <div className="font-body text-cream/50 text-xs mt-2 leading-snug">{label}</div>
    </div>
  )
}

const WA_PATH = (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ menuOpen, onToggle }: { menuOpen: boolean; onToggle: () => void }) {
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
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 select-none shrink-0">
          <div className="w-9 h-9 bg-gold flex items-center justify-center rounded-[7px] shrink-0">
            <span className="font-display font-black text-navy text-[13px] tracking-tight">PM</span>
          </div>
          <div>
            <div className="font-display font-black text-white text-[15px] tracking-tight leading-none">Pro Motor</div>
            <div className="font-body font-medium text-gold/80 text-[9px] tracking-[0.2em] uppercase mt-0.5">Driving School · New Delhi</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="relative font-body font-medium text-cream/60 hover:text-cream text-sm transition-colors duration-200 group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+919810000000" className="font-body text-cream/50 hover:text-cream text-sm transition-colors">
            +91 98100 00000
          </a>
          <a href="#contact" className="font-display font-bold text-navy bg-gold hover:bg-gold-400 text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105">
            Book Free Demo
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={onToggle} aria-label="Toggle menu" className="md:hidden flex flex-col gap-[5px] items-end p-2">
          <span className={`block h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
          <span className={`block h-px bg-cream/60 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
          <span className={`block h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
        </button>
      </div>
    </nav>
  )
}

// ─── Mobile Menu — Luxury Polish ──────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
      {/* Diagonal line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-55deg, transparent 0px, transparent 42px, rgba(200,144,10,0.035) 42px, rgba(200,144,10,0.035) 43px)',
        }}
      />

      {/* Large ghost "PRO MOTOR" text */}
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

      {/* Gold top rule */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative flex flex-col h-full px-8 pt-[88px] pb-10">
        {/* Nav links with numbers */}
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

        {/* Bottom actions */}
        <div
          style={{
            transition: 'opacity 500ms ease, transform 500ms ease',
            transitionDelay: isOpen ? '430ms' : '0ms',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
          }}
        >
          <a
            href="https://wa.me/919810000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl mb-3 font-display font-bold text-white text-[15px]"
            style={{ background: '#25D366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{WA_PATH}</svg>
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
            Mon–Sun · 6 AM to 8 PM · +91 98100 00000
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative bg-navy min-h-screen flex items-center overflow-hidden">
      {/* BG image */}
      <img
        src="https://images.unsplash.com/photo-1542834506-979b3951bc9a?w=1600&h=900&fit=crop&auto=format"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.08, mixBlendMode: 'luminosity' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-800/70" />
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 border border-gold/20 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" style={{ boxShadow: '0 0 0 3px rgba(232,168,0,0.25)' }} />
              <span className="font-body font-medium text-gold-400 text-[11px] tracking-[0.18em] uppercase">Sector 7, RK Puram · New Delhi</span>
            </div>

            <h1 className="font-display font-black text-white leading-[0.98] tracking-[-0.04em] mb-7" style={{ fontSize: 'clamp(2.8rem,6.5vw,5.25rem)' }}>
              Drive Delhi's Roads<br />
              <em className="not-italic text-gold-400">With Confidence.</em>
            </h1>

            <p className="font-body text-cream/60 leading-relaxed mb-10 max-w-md" style={{ fontSize: 'clamp(1rem,1.4vw,1.15rem)' }}>
              New Delhi's most trusted driving school — personalised 1:1 training, certified instructors,
              and a 95%+ first-attempt pass rate since 2010.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-display font-bold text-navy bg-gold hover:bg-gold-400 px-7 py-4 rounded-xl text-[15px] transition-all duration-200 hover:scale-[1.03]"
                style={{ boxShadow: '0 8px 40px rgba(200,144,10,0.35)' }}
              >
                Book Free Demo Session
              </a>
              <a
                href="https://wa.me/919810000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 font-display font-semibold text-cream/80 hover:text-cream border border-cream/15 hover:border-cream/30 px-7 py-4 rounded-xl text-[15px] transition-all duration-200"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">{WA_PATH}</svg>
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 pt-8 border-t border-cream/10">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-8 md:gap-12">
                  <StatCounter {...s} />
                  {i < STATS.length - 1 && <div className="w-px bg-cream/10 self-stretch hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — image card */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-3 rounded-3xl border border-gold/15" />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?w=800&h=1000&fit=crop&auto=format"
                alt="Pro Motor instructor with student at the vehicle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              {/* Card overlay */}
              <div className="absolute bottom-6 inset-x-6">
                <div className="bg-navy/80 backdrop-blur-md border border-cream/10 rounded-xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#E8A800">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="font-body font-medium text-cream text-xs">4.9 / 5.0</span>
                    <span className="font-body text-cream/40 text-xs">· Google Reviews</span>
                  </div>
                  <div className="font-display font-bold text-white text-sm mt-1">
                    "First attempt — cleared it!" — 500+ students
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-2xl border border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    'RTO Certified Instructors', '500+ Students Trained', 'Free Pickup Within 5km',
    'Sessions Never Expire', 'Female Instructors Available', '365 Days Open',
    '95%+ Pass Rate', '1:1 Personalised Training',
  ]
  return (
    <div className="bg-gold py-3 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display font-bold text-navy text-sm tracking-wide shrink-0 flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-navy/30 shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 mb-16 items-start">
          <div>
            <SectionLabel>Training Programmes</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Four Courses.<br />One Standard.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-body text-slate leading-relaxed max-w-lg" style={{ fontSize: '1.05rem' }}>
              Structured training for every level — from clutch-shy beginners to experienced drivers seeking advanced
              highway and defensive skills. All courses include RTO test preparation.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.num}
              className="group grid md:grid-cols-[64px_1fr_auto] gap-6 md:gap-10 items-start bg-white border border-warm hover:border-gold/30 rounded-2xl px-7 py-7 md:px-10 md:py-8 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(12,31,63,0.08)] cursor-default"
            >
              {/* Number */}
              <div className="font-display font-black text-navy/10 group-hover:text-gold/15 transition-colors duration-300 leading-none select-none" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                {svc.num}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-black text-navy text-xl md:text-2xl tracking-tight mb-2.5 group-hover:text-navy transition-colors">
                  {svc.title}
                </h3>
                <p className="font-body text-slate text-sm leading-relaxed mb-5 max-w-lg">{svc.description}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {svc.features.map(f => (
                    <span key={f} className="font-body text-navy/60 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-3 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-warm">
                <div className="text-right">
                  <div className="font-display font-black text-navy text-2xl tracking-tight leading-none">{svc.price}</div>
                  <div className="font-body text-slate text-xs mt-1">{svc.duration}</div>
                </div>
                <a href="#contact" className="font-body font-medium text-gold hover:text-gold-400 text-sm whitespace-nowrap transition-colors border-b border-gold/30 hover:border-gold-400 pb-px">
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Us ───────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <SectionLabel>Why Pro Motor</SectionLabel>
            <h2 className="font-display font-black text-white leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Every policy built for students — not our convenience.
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

// ─── Fleet ────────────────────────────────────────────────────────────────────

function Fleet() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [transFilter, setTransFilter] = useState('All')

  const filtered = FLEET.filter(c =>
    (typeFilter === 'All' || c.type === typeFilter) &&
    (transFilter === 'All' || c.transmission === transFilter)
  )

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
              <div className="relative overflow-hidden h-40 bg-warm">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
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

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em] mb-7" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Delhi's Most Trusted School Since 2010.
            </h2>
            <p className="font-body text-slate leading-relaxed mb-4 text-[15px]">
              Pro Motor was founded in Sector 7, RK Puram with one mission: produce genuinely safe, confident
              drivers — not students who just squeak through the RTO test.
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
            {/* Instructor photo */}
            <div className="relative mb-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1553782097-130fef5d3e27?w=800&h=600&fit=crop&auto=format"
                  alt="Pro Motor instructor guiding a student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 border-2 border-gold/30 rounded-2xl w-24 h-24" />
            </div>

            {/* Instructor cards */}
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

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Student Reviews</SectionLabel>
            <h2 className="font-display font-black text-white leading-[0.98] tracking-[-0.035em]" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              500+ Students.<br />One Common Story.
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8A800">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="font-body font-medium text-cream/60 text-sm">4.9 on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="group relative bg-[#0f2647] border border-cream/[0.07] hover:border-gold/20 rounded-2xl p-7 transition-all duration-300 hover:bg-[#122b52]"
            >
              {/* Decorative quote */}
              <div
                className="absolute top-5 right-6 font-display font-black text-gold/10 leading-none select-none pointer-events-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}
              >
                "
              </div>

              {/* Stars */}
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

// ─── CTA Band ─────────────────────────────────────────────────────────────────

function CTABand() {
  return (
    <section className="bg-gold py-20 md:py-24 relative overflow-hidden">
      {/* Subtle noise pattern */}
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
            href="https://wa.me/919810000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-display font-semibold text-navy border-2 border-navy/30 hover:border-navy px-8 py-4 rounded-xl text-[15px] transition-all duration-200"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">{WA_PATH}</svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
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
            <a href="tel:+919810000000" className="font-display font-bold text-navy border-b-2 border-gold text-sm pb-0.5 hover:text-gold transition-colors">
              +91 98100 00000 →
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

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32 bg-warm">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-14 items-start">
          <div>
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em] mb-6" style={{ fontSize: 'clamp(2.2rem,4vw,3.25rem)' }}>
              Book Your Free<br />Demo Session.
            </h2>
            <p className="font-body text-slate text-[15px] leading-relaxed mb-10 max-w-md">
              A complimentary 30-minute session with a certified instructor.
              We'll assess your level and recommend the right programme — no obligation.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Call / WhatsApp', value: '+91 98100 00000', icon: '📞', href: 'tel:+919810000000' },
                { label: 'Email', value: 'info@promotordelhi.com', icon: '✉', href: 'mailto:info@promotordelhi.com' },
                { label: 'Address', value: 'Sector 7, RK Puram, New Delhi — 110022', icon: '⊕', href: '#' },
                { label: 'Hours', value: 'Monday – Sunday · 6 AM to 8 PM', icon: '◷', href: '#' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-warm hover:border-gold/25 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 bg-warm rounded-lg flex items-center justify-center text-base shrink-0 group-hover:bg-gold/10 transition-colors">{item.icon}</div>
                  <div>
                    <div className="font-body font-medium text-slate text-[10px] uppercase tracking-[0.15em] mb-0.5">{item.label}</div>
                    <div className="font-display font-semibold text-navy text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-warm p-8 shadow-[0_4px_40px_rgba(12,31,63,0.06)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="#C8900A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-black text-navy text-2xl tracking-tight mb-2">We'll be in touch!</h3>
                <p className="font-body text-slate text-sm max-w-xs leading-relaxed">
                  Thanks{form.name ? `, ${form.name}` : ''}. Expect a call within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <h3 className="font-display font-black text-navy text-xl tracking-tight mb-6">Enquiry Form</h3>

                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Rajesh Kumar', required: true },
                  { id: 'phone', label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
                ].map(f => (
                  <div key={f.id}>
                    <label className="block font-body font-medium text-navy/50 text-[10px] uppercase tracking-[0.15em] mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full font-body text-navy text-sm bg-cream border border-warm rounded-xl px-4 py-3 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all placeholder:text-slate/40"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-body font-medium text-navy/50 text-[10px] uppercase tracking-[0.15em] mb-1.5">Course</label>
                  <select
                    value={form.course}
                    onChange={e => setForm(p => ({ ...p, course: e.target.value }))}
                    className="w-full font-body text-navy text-sm bg-cream border border-warm rounded-xl px-4 py-3 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"
                  >
                    <option value="">Select a course</option>
                    <option>Basic Manual Driving</option>
                    <option>Automatic Transmission</option>
                    <option>Defensive Driving</option>
                    <option>Highway & Expressway</option>
                    <option>Not sure — advise me</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body font-medium text-navy/50 text-[10px] uppercase tracking-[0.15em] mb-1.5">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Your schedule, preferred area, or any questions..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full font-body text-navy text-sm bg-cream border border-warm rounded-xl px-4 py-3 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all resize-none placeholder:text-slate/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-display font-bold text-navy bg-gold hover:bg-gold-400 py-4 rounded-xl text-[15px] transition-all duration-200 hover:scale-[1.01]"
                  style={{ boxShadow: '0 4px 24px rgba(200,144,10,0.3)' }}
                >
                  Send Enquiry
                </button>

                <p className="font-body text-slate/40 text-xs text-center">We respond within 2 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 relative overflow-hidden">
      {/* Ghost mark */}
      <div
        className="absolute -bottom-6 -right-6 font-display font-black text-cream/[0.02] leading-none select-none pointer-events-none"
        style={{ fontSize: '12rem' }}
      >
        PM
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-[7px] bg-gold flex items-center justify-center">
                <span className="font-display font-black text-navy text-[11px]">PM</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-sm tracking-tight">Pro Motor</div>
                <div className="font-body font-medium text-gold/60 text-[9px] tracking-[0.2em] uppercase">Driving School · New Delhi</div>
              </div>
            </div>
            <p className="font-body text-cream/35 text-xs leading-relaxed mb-5 max-w-xs">
              New Delhi's most trusted 1:1 driving school. Certified instructors, 95%+ pass rate, and a completion guarantee since 2010.
            </p>
          </div>

          <div>
            <div className="font-body font-medium text-cream/30 text-[10px] tracking-[0.18em] uppercase mb-4">Courses</div>
            <ul className="space-y-2.5">
              {['Basic Manual Driving', 'Automatic Transmission', 'Defensive Driving', 'Highway Driving', 'RTO Preparation'].map(c => (
                <li key={c}><a href="#services" className="font-body text-cream/50 hover:text-gold-400 text-sm transition-colors">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body font-medium text-cream/30 text-[10px] tracking-[0.18em] uppercase mb-4">Navigate</div>
            <ul className="space-y-2.5">
              {[['Fleet', '#fleet'], ['About', '#about'], ['Testimonials', '#testimonials'], ['FAQ', '#faq'], ['Contact', '#contact']].map(([l, h]) => (
                <li key={l}><a href={h} className="font-body text-cream/50 hover:text-gold-400 text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body font-medium text-cream/30 text-[10px] tracking-[0.18em] uppercase mb-4">Contact</div>
            <ul className="space-y-3 font-body text-cream/45 text-sm">
              <li className="leading-snug">Sector 7, RK Puram<br />New Delhi — 110022</li>
              <li><a href="tel:+919810000000" className="hover:text-gold-400 transition-colors">+91 98100 00000</a></li>
              <li><a href="mailto:info@promotordelhi.com" className="hover:text-gold-400 transition-colors">info@promotordelhi.com</a></li>
              <li>Mon–Sun · 6 AM – 8 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/[0.07] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-cream/25 text-xs">© 2024 Pro Motor Driving School. All rights reserved.</p>
          <p className="font-body text-cream/25 text-xs">Sector 7, RK Puram · New Delhi</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
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
    </div>
  )
}
