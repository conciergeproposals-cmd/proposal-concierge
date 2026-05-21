'use client'

import { useRef } from 'react'
import { MapPin } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'

const CITIES = [
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
]

export function ServiceArea() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-cream">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center mb-5" aria-hidden="true">
          <MapPin size={22} className="text-gold" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-5 tracking-wide">
          Serving the Greater Toronto Area
        </h2>
        <p className="font-sans text-base sm:text-lg text-charcoal/65 mb-12 max-w-xl mx-auto leading-relaxed">
          We work with couples across the GTA. If your city isn&rsquo;t on the list below, just
          ask. We travel.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="font-sans text-sm text-charcoal/70 border border-gold/30 px-4 py-2 rounded-full hover:border-gold/60 hover:text-charcoal transition-colors"
            >
              {city}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
