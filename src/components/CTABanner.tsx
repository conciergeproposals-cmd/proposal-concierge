'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

interface CTABannerProps {
  headline: string
  subtext: string
  buttonLabel?: string
}

export function CTABanner({
  headline,
  subtext,
  buttonLabel = 'Book Free Consultation',
}: CTABannerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="bg-burgundy py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Call to action"
    >
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-3 tracking-wide">
          {headline}
        </h2>
        <p className="font-sans text-cream/75 text-base sm:text-lg mb-8">{subtext}</p>
        <button
          onClick={() => scrollToSection('booking')}
          className="inline-flex items-center bg-cream text-burgundy font-sans font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200 border border-transparent hover:border-gold min-h-[52px]"
        >
          {buttonLabel}
        </button>
      </motion.div>
    </section>
  )
}
