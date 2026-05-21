'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

export function MobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  if (dismissed || !visible) return null

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 flex items-center gap-2 sm:hidden ${
        !shouldReduceMotion ? 'animate-mobile-pulse' : ''
      }`}
    >
      <button
        onClick={() => scrollToSection('booking')}
        className="bg-burgundy text-cream text-sm font-sans font-medium px-5 py-3 rounded-full shadow-lg hover:bg-burgundy/90 transition-colors min-h-[44px]"
        aria-label="Book your free consultation call"
      >
        Book Free Call
      </button>
      <button
        onClick={() => setDismissed(true)}
        className="bg-cream border border-gold/40 rounded-full w-8 h-8 flex items-center justify-center text-charcoal/50 hover:text-burgundy transition-colors shadow-md"
        aria-label="Dismiss booking button"
      >
        <span aria-hidden="true" className="text-xs leading-none">&times;</span>
      </button>
    </div>
  )
}
