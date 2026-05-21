'use client'

import { useRef } from 'react'
import { Heart } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        {/* Gold heart */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <Heart size={22} className="text-gold fill-gold/30" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-10 tracking-wide">
          Our Mission
        </h2>

        <div className="space-y-6 font-sans text-base sm:text-lg text-charcoal/70 leading-loose text-left">
          <p>
            At The Proposal Concierge, we plan the proposal so you don&rsquo;t have to. From
            the first conversation to the final setup, we take care of the details so the moment
            feels easy, romantic, and entirely yours.
          </p>
          <p>
            We work with couples across the GTA who want their proposal to feel personal and
            beautifully styled. Whether you have a clear vision or just a feeling, we help shape
            it into something memorable.
          </p>
          <p>
            Our goal is simple. We want you to walk into the space, see it for the first time,
            and know it was made for the two of you.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
