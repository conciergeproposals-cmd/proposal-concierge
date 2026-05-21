import type { Metadata } from 'next'
import { Playfair_Display, Allura, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://theproposalconcierge.ca'),
  title: 'The Proposal Concierge | Luxury Proposal Planning in Toronto and the GTA',
  description:
    'Custom proposal planning, decor, and styling across the Greater Toronto Area. Book a free 30 minute consultation. The perfect proposal, simplified.',
  keywords: [
    'luxury proposal planner Toronto',
    'proposal decor GTA',
    'marriage proposal planning Toronto',
    'romantic proposal setup',
    'proposal planner Mississauga',
    'custom proposal packages Toronto',
  ],
  openGraph: {
    title: 'The Proposal Concierge | Luxury Proposal Planning in Toronto and the GTA',
    description:
      'Custom proposal planning, decor, and styling across the Greater Toronto Area. Book a free 30 minute consultation. The perfect proposal, simplified.',
    url: 'https://theproposalconcierge.ca',
    siteName: 'The Proposal Concierge',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://theproposalconcierge.ca',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://theproposalconcierge.ca/#business',
      name: 'The Proposal Concierge',
      image: 'https://theproposalconcierge.ca/opengraph-image',
      telephone: '+1-647-627-4228',
      email: 'info@theproposalconcierge.ca',
      priceRange: '$$$',
      areaServed: [
        'Toronto',
        'Mississauga',
        'Markham',
        'Brampton',
        'Vaughan',
        'Oakville',
        'Burlington',
        'Richmond Hill',
        'Etobicoke',
        'Scarborough',
        'North York',
        'Ajax',
        'Pickering',
        'Whitby',
      ],
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '18:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      sameAs: ['https://instagram.com/theproposalconcierge.inc'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far in advance should I book?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We recommend booking at least 2 to 3 weeks in advance. For peak dates like Valentine's Day, Christmas, and summer weekends, please book 4 to 6 weeks ahead.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you require a deposit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A non-refundable deposit secures your date once we have finalised the package and details.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the proposal be indoors or outdoors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both. We plan and style proposals in private homes, on rooftops, at beaches, in parks, at restaurants, and at venues across the GTA.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the initial consultation really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The 30-minute call is on us so we can hear your vision before you commit to anything.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All of the Greater Toronto Area, including Toronto, Mississauga, Markham, Brampton, Vaughan, Oakville, Burlington, and the surrounding cities. If you are nearby and not on the list, ask us.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the colour scheme be customised?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our base packages come in pink, white, or red, but custom palettes are available, especially with The Royal Affair.',
          },
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Simply in Love',
      description:
        "A soft, romantic setup made for an intimate moment. Warm candlelight, fresh flowers, and rose petals laid out with care. It feels classic, timeless, and very personal.",
      provider: { '@id': 'https://theproposalconcierge.ca/#business' },
    },
    {
      '@type': 'Service',
      name: 'The Grand Gesture',
      description:
        'A bigger, more dramatic setup for when you want to go all out. Florals, draping, a Marry Me sign, and statement pieces that turn the space into something cinematic.',
      provider: { '@id': 'https://theproposalconcierge.ca/#business' },
    },
    {
      '@type': 'Service',
      name: 'The Signature Yes',
      description:
        'Our most-loved package. A polished, upscale setup with statement florals, candles, and styling details that make the whole space feel romantic and worthy of the moment.',
      provider: { '@id': 'https://theproposalconcierge.ca/#business' },
    },
    {
      '@type': 'Service',
      name: 'The Royal Affair',
      description:
        'Fully custom. Built around your exact vision with premium decor, personalized details, and add-ons that fit the moment you have in mind. Perfect when nothing standard will do.',
      provider: { '@id': 'https://theproposalconcierge.ca/#business' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${allura.variable} ${dmSans.variable}`}
    >
      <body>
        <LenisProvider>
          <CustomCursor />
          <KeyboardShortcuts />
          {children}
        </LenisProvider>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </body>
    </html>
  )
}
