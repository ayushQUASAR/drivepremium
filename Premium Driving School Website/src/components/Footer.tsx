export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 relative overflow-hidden">
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
              New Delhi's most trusted 1:1 driving school. Certified instructors, 100% pass rate, and a completion guarantee since 2003.
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
              <li className="leading-snug">G - 6A, near Hanuman Mandir Marg<br />Vasant Enclave, Vasant Vihar<br />New Delhi, Delhi 110057</li>
              <li><a href="tel:+919871520896" className="hover:text-gold-400 transition-colors">+91 98715 20896</a></li>
              <li><a href="mailto:info@promotordelhi.com" className="hover:text-gold-400 transition-colors">info@promotordelhi.com</a></li>
              <li>Mon–Sun · 6 AM – 8 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/[0.07] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-cream/25 text-xs">© 2024 Pro Motor Driving School. All rights reserved.</p>
          <p className="font-body text-cream/25 text-xs">G - 6A, Vasant Enclave, Vasant Vihar, New Delhi</p>
        </div>
      </div>
    </footer>
  )
}