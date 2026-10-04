'use client'

import { useState } from 'react'
import { COURSE_TYPES } from '@/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-gold" />
      <span className="font-body font-medium text-gold text-[11px] tracking-[0.2em] uppercase">{children}</span>
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '919871520896'
    const message = `New Enquiry from Pro Motor Website:
Name: ${form.name}
Phone: ${form.phone}
Course: ${form.course}
Message: ${form.message || 'No message provided'}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

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
                { label: 'Call / WhatsApp', value: '+91 98715 20896', icon: '📞', href: 'tel:+919871520896' },
                { label: 'Email', value: 'info@promotordelhi.com', icon: '✉', href: 'mailto:info@promotordelhi.com' },
                { label: 'Address', value: 'G - 6A, near Hanuman Mandir Marg, Vasant Enclave, Vasant Vihar, New Delhi, Delhi 110057', icon: '⊕', href: '#' },
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

            {/* Google Maps */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-warm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.823223598674!2d77.15911799999999!3d28.575070599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42cd50bb6d095c71%3A0x2be022efd9a42a6d!2sPro%20motor%20driving%20training%20school!5e0!3m2!1sen!2sin!4v1791132450746!5m2!1sen!2sin"
                width="100%"
                height={300}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pro Motor Driving School Location"
              />
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
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    {COURSE_TYPES.map(course => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
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