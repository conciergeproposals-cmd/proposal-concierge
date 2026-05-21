'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

interface Package {
  name: string
  tagline: string
  description: string
  featured?: boolean
}

// Ordered least to most: Simply in Love, Signature Yes, Grand Gesture, Royal Affair
const PACKAGES: Package[] = [
  {
    name: 'Simply in Love',
    tagline: "Cupid's Touch",
    description:
      'A soft, romantic setup made for an intimate moment. Warm candlelight, fresh flowers, and rose petals laid out with care. It feels classic, timeless, and very personal.',
  },
  {
    name: 'The Signature Yes',
    tagline: 'Romance in the Air',
    description:
      'Our most-loved package. A polished, upscale setup with statement florals, candles, and styling details that make the whole space feel romantic and worthy of the moment.',
  },
  {
    name: 'The Grand Gesture',
    tagline: 'Top-Tier with Add-Ons',
    description:
      'A bigger, more dramatic setup for when you want to go all out. Florals, draping, a Marry Me sign, and statement pieces that turn the space into something cinematic.',
    featured: true,
  },
  {
    name: 'The Royal Affair',
    tagline: 'Custom with Premium Perks',
    description:
      'Fully custom. Built around your exact vision with premium decor, personalized details, and add-ons that fit the moment you have in mind. Perfect when nothing standard will do.',
  },
]

function GoldCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const posClasses = {
    tl: 'top-3 left-3 border-t border-l',
    tr: 'top-3 right-3 border-t border-r',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  }
  return (
    <span
      aria-hidden="true"
      className={`absolute ${posClasses[position]} w-4 h-4 border-gold/40`}
    />
  )
}

interface PackageCardProps {
  pkg: Package
  delay: number
}

function PackageCard({ pkg, delay }: PackageCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, ease: 'easeOut', delay: shouldReduceMotion ? 0 : delay }}
      className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border transition-all duration-300 hover:shadow-lg ${
        pkg.featured
          ? 'border-gold/60 bg-cream'
          : 'border-gold/20 bg-cream hover:border-gold/45'
      }`}
      style={{
        boxShadow: pkg.featured
          ? '0 6px 32px rgba(201,169,97,0.18)'
          : '0 2px 10px rgba(201,169,97,0.05)',
      }}
    >
      <GoldCorner position="tl" />
      <GoldCorner position="tr" />
      <GoldCorner position="bl" />
      <GoldCorner position="br" />

      <div>
        {/* Badge zone — fixed height reserves space so h3 aligns across all cards */}
        <div className="h-8 flex items-center mb-4">
          {pkg.featured && (
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-burgundy border border-burgundy/30 px-2.5 py-1 rounded-full">
              Most Popular
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl text-burgundy mb-2 tracking-[0.02em]">{pkg.name}</h3>
        <p className="font-script text-xl text-burgundy mb-5">{pkg.tagline}</p>

        <p className="font-sans text-sm text-charcoal/70" style={{ lineHeight: 1.75 }}>
          {pkg.description}
        </p>
      </div>

      <button
        onClick={() => scrollToSection('booking')}
        className="w-full bg-burgundy text-cream font-sans font-medium text-sm py-3.5 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200 border border-transparent hover:border-gold min-h-[44px] mt-6"
      >
        Request a Quote
      </button>
    </motion.article>
  )
}

export function Packages() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="packages" className="py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        ref={headingRef}
        className="text-center mb-12"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-3 tracking-wide">
          Our Packages
        </h2>
        <p className="font-script text-2xl sm:text-3xl text-burgundy">
          Something for every love story.
        </p>
      </motion.div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        style={{ gridAutoRows: '1fr' }}
      >
        {PACKAGES.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} delay={i * 0.07} />
        ))}
      </div>
    </section>
  )
}
