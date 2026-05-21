'use client'

import { useEffect, useState, useCallback } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

const SHORTCUTS = [
  { key: 'B', label: 'Booking' },
  { key: 'P', label: 'Packages' },
  { key: 'Y', label: 'Add-Ons' },
  { key: 'T', label: 'Team' },
  { key: 'F', label: 'FAQ' },
  { key: '?', label: 'This shortcut list' },
  { key: 'Esc', label: 'Close any open panel' },
]

const SECTION_MAP: Record<string, string> = {
  b: 'booking',
  p: 'packages',
  y: 'addons',
  t: 'team',
  f: 'faq',
}

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName.toLowerCase()
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return

      if (e.key === 'Escape') {
        setOpen(false)
        return
      }

      if (e.key === '?') {
        e.preventDefault()
        setOpen((prev) => !prev)
        return
      }

      const section = SECTION_MAP[e.key.toLowerCase()]
      if (section) {
        e.preventDefault()
        scrollToSection(section)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-charcoal/40 z-[9990] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Keyboard shortcuts"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9991] bg-cream border border-gold/40 rounded-lg p-8 w-full max-w-sm shadow-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg text-charcoal tracking-wide">Keyboard Shortcuts</h2>
              <button
                onClick={handleClose}
                aria-label="Close shortcuts modal"
                className="text-charcoal/50 hover:text-burgundy transition-colors p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="space-y-3">
              {SHORTCUTS.map(({ key, label }) => (
                <li key={key} className="flex items-center justify-between text-sm">
                  <span className="text-charcoal/70 font-sans">{label}</span>
                  <kbd className="px-2 py-0.5 bg-gold/10 border border-gold/30 rounded text-xs font-mono text-charcoal/80 min-w-[2rem] text-center">
                    {key}
                  </kbd>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
