'use client'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pro Motor Driving School',
    image: 'https://images.unsplash.com/photo-1630406144797-821be1f35d75?w=800&h=1000&fit=crop&auto=format',
    '@id': 'https://promotordelhi.com/#business',
    url: 'https://promotordelhi.com',
    telephone: '+91-98715-20896',
    email: 'info@promotordelhi.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 7, RK Puram',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110022',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5677,
      longitude: 77.1734,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    areaServed: {
      '@type': 'City',
      name: 'New Delhi',
    },
    description: 'New Delhi\'s most trusted driving school — personalised 1:1 training, RTO-certified instructors, 100% pass rate since 2003.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Priya Mehta',
        },
        datePublished: '2024-03-01',
        reviewBody: 'Cleared my driving test on the very first attempt. Rajesh sir was patient and methodical — the 1:1 sessions gave me real confidence in Delhi traffic.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Arjun Sharma',
        },
        datePublished: '2024-02-01',
        reviewBody: 'I was genuinely terrified of the Ring Road. After 30 sessions I drive it daily without a second thought. The defensive driving module is worth every rupee.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Basic Manual Driving',
        description: 'Master clutch control, gear shifting, and confident navigation through Delhi\'s demanding traffic.',
        price: '4500',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Automatic Transmission',
        description: 'Learn automatic vehicles at a relaxed pace — ideal for first-time drivers.',
        price: '5500',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Defensive Driving',
        description: 'Advanced hazard perception and emergency response tailored to Delhi\'s unpredictable roads.',
        price: '6500',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Highway & Expressway',
        description: 'Gain genuine confidence on NH-48, DND Flyway, and expressways.',
        price: '3500',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    ],
    hasMap: 'https://goo.gl/maps/example',
    sameAs: [
      'https://www.facebook.com/promotordelhi',
      'https://www.instagram.com/promotordelhi',
      'https://www.google.com/maps/place/Pro+Motor+Driving+School',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}