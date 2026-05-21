'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

export function Addons() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="addons" className="py-24 lg:py-32 px-4 sm:px-6">
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center justify-center gap-3 mb-10" aria-hidden="true">
          <span className="block w-12 h-px bg-gold/50" />
          <span className="text-gold/70 text-[10px] leading-none">◆</span>
          <span className="block w-12 h-px bg-gold/50" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-3 tracking-wide">
          Add-Ons and Custom Requests
        </h2>
        <p className="font-script text-2xl sm:text-3xl text-burgundy mb-8">
          Make it yours.
        </p>

        <p className="font-sans text-base sm:text-lg text-charcoal/65" style={{ lineHeight: 1.8 }}>
          Every proposal is different, and our packages are just the starting point. We offer a
          range of add-ons and custom services to make your moment feel completely yours. From
          small personal touches to larger creative requests, we are happy to tailor the
          experience around your vision. Share what you have in mind during your free
          consultation and we will take care of the rest.
        </p>

        <motion.div
          className="mt-10"
          initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-burgundy text-cream font-sans font-medium text-sm px-8 py-4 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200 border border-transparent hover:border-gold min-h-[52px]"
          >
            Request Custom Add-Ons
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
