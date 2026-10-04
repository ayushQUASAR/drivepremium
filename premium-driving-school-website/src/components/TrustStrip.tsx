export function TrustStrip() {
  const items = [
    'RTO Certified Instructors', '20,000+ Drivers Trained', 'Free Pickup & Drop',
    'Sessions Never Expire', '365 Days Open', '100% Pass Rate',
    '1:1 Personalised Training', 'Complimentary Theory Sessions', 'Training Until Test-Ready',
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
      <style jsx>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}