'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-burgundy text-cream text-xs sm:text-sm z-50">
      <button
        className="w-full py-3 px-10 text-center tracking-wide hover:bg-burgundy/90 transition-colors font-sans"
        onClick={() => scrollToSection('booking')}
        aria-label="Book your complimentary 30-minute consultation"
      >
        Complimentary 30-Minute Consultation. Book yours today &rarr;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-cream/10 rounded transition-colors"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  )
}
