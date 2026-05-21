'use client'

import Image from 'next/image'
import { InstagramIcon } from '@/components/InstagramIcon'
import { scrollToSection } from '@/lib/scroll'

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'addons', label: 'Add-Ons' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'faq', label: 'FAQ' },
  { id: 'booking', label: 'Book Now' },
]

export function Footer() {
  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 text-center border-t border-gold/20">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo-transparent.png"
            alt="The Proposal Concierge"
            width={506}
            height={490}
            className="w-auto"
            style={{ height: '60px' }}
          />
          <p className="font-display text-xl text-burgundy tracking-wide">
            The Proposal Concierge
          </p>
          <p className="font-script text-lg text-burgundy">
            The Perfect Proposal, Simplified.
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="font-sans text-sm text-charcoal/50 hover:text-burgundy transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Instagram */}
        <a
          href="https://instagram.com/theproposalconcierge.inc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Proposal Concierge on Instagram"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/25 text-charcoal/40 hover:text-burgundy hover:border-burgundy/40 transition-colors"
        >
          <InstagramIcon size={16} aria-hidden="true" />
        </a>

        {/* Shortcuts hint */}
        <p className="font-sans text-xs text-charcoal/30">
          Press <kbd className="px-1.5 py-0.5 bg-gold/10 border border-gold/20 rounded text-[10px] font-mono">?</kbd> for shortcuts
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs text-charcoal/35">
          &copy; 2026 The Proposal Concierge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
