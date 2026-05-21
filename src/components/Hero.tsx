'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'

const WORDS = ['The', 'Perfect', 'Proposal,', 'Simplified.']

const MARQUEE_TEXT = 'BESPOKE · ROMANTIC · UNFORGETTABLE · TIMELESS · ELEGANT · CURATED · '

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldReduceMotion) return

    function onScroll() {
      const el = parallaxRef.current
      if (!el) return
      const y = window.scrollY * 0.35
      el.style.transform = `translateY(${y}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [shouldReduceMotion])

  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero section"
    >
      {/* Background radial gradient */}
      <div
        ref={parallaxRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,97,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 pt-24 pb-32">
        {/* H1 staggered word reveal */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-tight tracking-tight mb-6 max-w-4xl">
          {WORDS.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.25em] last:mr-0"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.2 + i * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Script subtitle */}
        <motion.p
          className="font-script text-burgundy text-2xl sm:text-3xl lg:text-4xl mb-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.75 }}
        >
          Luxury proposal planning in Toronto and the GTA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.95 }}
        >
          <button
            onClick={() => scrollToSection('booking')}
            className={`bg-burgundy text-cream font-sans font-medium text-base px-8 py-4 rounded-full min-h-[52px] min-w-[220px] border border-transparent hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-200 ${!shouldReduceMotion ? 'animate-pulse-ring' : ''}`}
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => scrollToSection('packages')}
            className="text-burgundy font-sans font-medium text-base px-8 py-4 rounded-full min-h-[52px] min-w-[200px] border border-burgundy/40 hover:bg-burgundy hover:text-cream hover:border-burgundy transition-all duration-200"
          >
            Explore Packages
          </button>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-0 right-0 overflow-hidden py-3 border-y border-gold/20"
      >
        <div
          className={`flex whitespace-nowrap ${!shouldReduceMotion ? 'animate-marquee-left' : ''}`}
          style={{ width: 'max-content', willChange: 'transform', transform: 'translateZ(0)' }}
        >
          {[MARQUEE_TEXT, MARQUEE_TEXT, MARQUEE_TEXT, MARQUEE_TEXT].map((text, i) => (
            <span
              key={i}
              className="font-sans text-xs tracking-[0.3em] text-gold/50 font-medium mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Chevron */}
      <motion.button
        onClick={() => scrollToSection('services')}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-gold/50 hover:text-gold transition-colors p-2 ${!shouldReduceMotion ? 'animate-bounce-down' : ''}`}
        aria-label="Scroll to services"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.3, duration: 0.5 }}
      >
        <ChevronDown size={28} aria-hidden="true" />
      </motion.button>
    </section>
  )
}
