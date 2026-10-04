'use client'

import Image from 'next/image'
import { COURSE_TYPES } from '@/data'

const carImages: Record<string, string> = {
  'Maruti Suzuki Swift': '/images/swift.jpeg',
  'Maruti Suzuki Wagon R': '/images/wagonr.jpg',
  'Maruti Suzuki Swift Dzire': '/images/dzire.webp',
  'Maruti Suzuki Baleno': '/images/baleno.webp',
  'Maruti Suzuki Fronx': '/images/fronx.webp',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

function CourseCard({ course }: { course: typeof COURSE_TYPES[0] }) {
  const cars = Object.entries(course.pricing)
  const acPrice = course.acExtra[course.practicalHours.toString() as keyof typeof course.acExtra] ?? 0
  const isBasic = course.id === 'basic'
  
  const cardColors = isBasic
    ? { bg: 'bg-navy', border: 'border-navy', text: 'text-white', gold: 'text-gold-400', accent: 'bg-gold-400/20' }
    : { bg: 'bg-warm', border: 'border-warm', text: 'text-navy', gold: 'text-gold', accent: 'bg-gold/20' }

  return (
    <div className={`relative rounded-3xl p-6 md:p-8 ${cardColors.bg} ${cardColors.border} ${cardColors.text} overflow-hidden shadow-[0_20px_60px_rgba(12,31,63,0.15)]`}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0px, transparent 40px, currentColor 40px, currentColor 41px)' }} />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="min-w-0">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium ${cardColors.accent} ${cardColors.gold} mb-3`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {course.num}
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-1.5 leading-tight">{course.title}</h3>
            <p className={`font-body ${cardColors.gold}/80 text-sm md:text-base font-medium`}>{course.subtitle}</p>
          </div>
          <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${cardColors.accent} flex items-center justify-center`}>
            <span className="font-display font-black text-xl md:text-2xl">{course.num}</span>
          </div>
        </div>

        <p className={`font-body ${cardColors.text}/80 leading-relaxed mb-6 text-sm md:text-base`}>{course.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className={`rounded-2xl p-4 md:p-6 ${cardColors.accent} ${cardColors.border} text-center`}>
            <div className="font-display font-black text-3xl md:text-4xl leading-none">{course.totalHours}h</div>
            <div className={`font-body ${cardColors.text}/60 text-[10px] md:text-xs mt-1.5 uppercase tracking-wide`}>Total Duration</div>
          </div>
          <div className={`rounded-2xl p-4 md:p-6 ${cardColors.accent} ${cardColors.border} text-center`}>
            <div className="font-display font-black text-3xl md:text-4xl leading-none">{course.days}</div>
            <div className={`font-body ${cardColors.text}/60 text-[10px] md:text-xs mt-1.5 uppercase tracking-wide`}>Practical Days</div>
          </div>
          <div className={`rounded-2xl p-4 md:p-6 ${cardColors.accent} ${cardColors.border} text-center`}>
            <div className="font-display font-black text-3xl md:text-4xl leading-none">{course.theoryHours}h</div>
            <div className={`font-body ${cardColors.text}/60 text-[10px] md:text-xs mt-1.5 uppercase tracking-wide`}>Theory (Free)</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-6">
          {course.features.map(f => (
            <span key={f} className={`font-body text-xs md:text-sm px-3 py-1.5 rounded-xl transition-all duration-200 cursor-default ${cardColors.accent} ${cardColors.border} hover:${cardColors.accent} hover:shadow-lg whitespace-nowrap`}>
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mr-1.5 inline-block" />
              {f}
            </span>
          ))}
        </div>

        <div className={`pt-6 border-t ${cardColors.border}/30`}>
          <h4 className={`font-display font-bold text-base md:text-lg mb-5 flex items-center gap-2.5 ${cardColors.text}`}>
            <span className="w-2 h-2 rounded-full bg-gold" />
            Choose Your Vehicle
          </h4>
          <div className="space-y-2.5">
            {cars.map(([carName, price]) => (
              <div
                key={carName}
                className={`group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 md:p-4 rounded-2xl transition-all duration-300 ${cardColors.accent} ${cardColors.border} hover:shadow-xl hover:border-gold/50`}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white shrink-0 shadow-inner flex-shrink-0 p-2 sm:p-3">
                  {carImages[carName] ? (
                    <Image
                      src={carImages[carName]}
                      alt={carName}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                      sizes="96px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className={`font-display font-black text-xs ${cardColors.text}/30`}>{carName.split(' ').slice(-1)[0]}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <div className={`font-display font-bold text-sm md:text-base truncate ${cardColors.text}`}>{carName}</div>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    <span className={`bg-navy/20 ${cardColors.text}/70 px-2 py-0.5 rounded text-[9px] md:text-[10px] font-medium whitespace-nowrap`}>{course.days} days practical</span>
                    <span className={`bg-gold/20 ${cardColors.gold} px-2 py-0.5 rounded text-[9px] md:text-[10px] font-medium whitespace-nowrap`}>{course.theoryHours}h theory free</span>
                  </div>
                </div>
                <div className="text-right sm:text-left w-full sm:w-auto flex flex-col items-end sm:items-start justify-center gap-1">
                  <div className={`font-display font-black text-xl md:text-2xl ${cardColors.text}`}>₹{price.toLocaleString()}</div>
                  {acPrice > 0 && (
                    <div className={`font-body text-xs md:text-sm flex items-center gap-1 ${cardColors.gold}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                      <span className="whitespace-nowrap">+₹{acPrice.toLocaleString()} AC</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t flex flex-col items-start gap-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${cardColors.accent} flex items-center justify-center shrink-0`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cardColors.gold}>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </div>
            <div className="w-full">
              <div className={`font-body font-medium text-sm md:text-base ${cardColors.text}`}>Air Conditioned Car (Optional)</div>
              <div className={`font-display font-bold text-lg md:text-xl mt-0.5 ${cardColors.gold}`}>+₹{acPrice.toLocaleString()}</div>
              <p className={`font-body text-[10px] md:text-xs mt-1.5 leading-relaxed ${cardColors.text}/60`}>
                Available for all vehicles. Extra charge applies for the full course duration.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className={`mt-6 w-full inline-flex items-center justify-center gap-2.5 font-display font-bold py-3.5 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(200,144,10,0.4)] text-navy bg-gold hover:bg-gold-400`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="hidden sm:inline">Enquire About {course.title}</span>
            <span className="sm:hidden">Enquire Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-cream relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0px, transparent 60px, #C8900A 60px, #C8900A 61px)' }} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel>Training Programmes</SectionLabel>
          <h2 className="font-display font-black text-navy leading-[0.98] tracking-[-0.035em] mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Two Courses.<br /><span className="text-gold">Every Level Covered.</span>
          </h2>
          <p className="font-body text-slate leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            Choose Refresher for a quick confidence boost or Basic for complete beginner-to-test-ready training.
            All courses include complimentary theory sessions & free pickup and drop.
          </p>
        </div>

        <div className="flex flex-col lg:gap-8 md:gap-6 gap-6">
          {COURSE_TYPES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="font-body text-slate/60 text-sm mb-4">Both courses include:</p>
          <div className="flex flex-wrap justify-center gap-2.5 text-xs md:text-sm">
            {[
              'RTO-certified curriculum',
              'Certified instructor (1:1)',
              'Free pickup & drop',
              'Flexible timings (6AM-8PM)',
              'Pause & resume anytime',
            ].map(item => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/50 border border-warm rounded-xl text-navy/70">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="text-gold">
                  <path d="M4 10l4.5 4.5L16 6" stroke="#C8A80A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}