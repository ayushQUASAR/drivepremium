import type { Metadata, Viewport } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pro Motor Driving School | New Delhi\'s #1 1:1 Driving Training',
    template: '%s | Pro Motor Driving School',
  },
  description: 'New Delhi\'s most trusted driving school — personalised 1:1 training, RTO-certified instructors, 100% pass rate since 2003. Free pickup and drop, sessions never expire.',
  keywords: ['driving school delhi', 'driving lessons new delhi', 'RTO certified driving school', '1:1 driving training', 'defensive driving course', 'highway driving lessons', 'automatic driving lessons delhi', 'manual driving school'],
  authors: [{ name: 'Pro Motor Driving School' }],
  creator: 'Pro Motor Driving School',
  publisher: 'Pro Motor Driving School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://promotordelhi.com',
    siteName: 'Pro Motor Driving School',
    title: 'Pro Motor Driving School | New Delhi\'s #1 1:1 Driving Training',
    description: 'New Delhi\'s most trusted driving school — personalised 1:1 training, RTO-certified instructors, 100% pass rate since 2003.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pro Motor Driving School - Premium Driving Training in New Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motor Driving School | New Delhi\'s #1 1:1 Driving Training',
    description: 'New Delhi\'s most trusted driving school — personalised 1:1 training, RTO-certified instructors, 100% pass rate since 2003.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'contact:phone': '+91-98715-20896',
    'contact:email': 'info@promotordelhi.com',
    'contact:address': 'G - 6A, near Hanuman Mandir Marg, Vasant Enclave, Vasant Vihar, New Delhi, Delhi 110057',
  },
}

export const viewport: Viewport = {
  themeColor: '#0C1F3F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-screen font-body" style={{ color: 'var(--color-navy)', backgroundColor: 'var(--color-cream)' }}>
        {children}
      </body>
    </html>
  )
}