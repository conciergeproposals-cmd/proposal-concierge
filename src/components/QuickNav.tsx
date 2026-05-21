'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Command, X, Mail, Phone, BookOpen } from 'lucide-react'
import { InstagramIcon } from '@/components/InstagramIcon'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

const SECTIONS = [
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'addons', label: 'Add-Ons' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'faq', label: 'FAQ' },
  { id: 'booking', label: 'Book Free Call' },
]

export function QuickNav() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleClose])

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }
    if (open) document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [open, handleClose])

  return (
    <div ref={panelRef} className="hidden lg:block fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Quick navigation"
            className="absolute bottom-14 left-0 bg-cream border border-gold/40 rounded-xl p-5 w-56 shadow-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          >
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-3 font-sans">Navigate</p>
            <ul className="space-y-1 mb-4">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => { scrollToSection(id); handleClose() }}
                    className="w-full text-left text-sm font-sans text-charcoal/80 hover:text-burgundy transition-colors py-1 px-2 rounded hover:bg-gold/10"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-gold/20 pt-3 space-y-2">
              <a
                href="tel:+16476274228"
                className="flex items-center gap-2 text-sm font-sans text-charcoal/70 hover:text-burgundy transition-colors py-1"
                onClick={handleClose}
              >
                <Phone size={13} aria-hidden="true" />
                +1 (647) 627-4228
              </a>
              <a
                href="mailto:info@theproposalconcierge.ca"
                className="flex items-center gap-2 text-sm font-sans text-charcoal/70 hover:text-burgundy transition-colors py-1"
                onClick={handleClose}
              >
                <Mail size={13} aria-hidden="true" />
                Email us
              </a>
              <a
                href="https://instagram.com/theproposalconcierge.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-sans text-charcoal/70 hover:text-burgundy transition-colors py-1"
                onClick={handleClose}
              >
                <InstagramIcon size={13} aria-hidden="true" />
                Instagram
              </a>
            </div>
            <div className="border-t border-gold/20 pt-3 mt-1">
              <p className="text-[11px] text-charcoal/40 font-sans flex items-center gap-1">
                <BookOpen size={10} aria-hidden="true" />
                Press <kbd className="mx-1 px-1 bg-gold/10 border border-gold/20 rounded text-[10px]">?</kbd> for shortcuts
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close quick navigation' : 'Open quick navigation'}
        aria-expanded={open}
        className="w-11 h-11 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-lg hover:bg-burgundy/90 transition-colors focus-visible:outline-gold"
      >
        {open ? <X size={16} aria-hidden="true" /> : <Command size={16} aria-hidden="true" />}
      </button>
    </div>
  )
}
