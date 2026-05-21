'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/lib/scroll'

const LINKS = [
  { href: 'services', label: 'Services' },
  { href: 'packages', label: 'Packages' },
  { href: 'addons', label: 'Add-Ons' },
  { href: 'about', label: 'About' },
  { href: 'team', label: 'Team' },
  { href: 'faq', label: 'FAQ' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleClose = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) handleClose()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [handleClose])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function handleNav(id: string) {
    handleClose()
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream shadow-sm'
            : 'bg-transparent'
        }`}
        style={scrolled ? { boxShadow: '0 1px 0 rgba(201, 169, 97, 0.25)' } : {}}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('top', 0)}
            className="hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Go to top of page"
          >
            <Image
              src="/logo-transparent.png"
              alt="The Proposal Concierge"
              width={506}
              height={490}
              className="h-9 sm:h-11 w-auto"
              priority
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="text-sm font-sans text-charcoal/70 hover:text-burgundy transition-colors tracking-wide"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('booking')}
            className="hidden lg:flex items-center bg-burgundy text-cream text-sm font-sans font-medium px-5 py-2.5 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200 min-h-[44px] border border-transparent hover:border-gold focus-visible:outline-gold"
          >
            Book Free Call
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 text-charcoal/70 hover:text-burgundy transition-colors"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          >
            <ul className="space-y-6 text-center" role="list">
              {LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : i * 0.07, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleNav(href)}
                    className="font-display text-2xl text-charcoal hover:text-burgundy transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-10"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.45, duration: 0.4 }}
            >
              <button
                onClick={() => handleNav('booking')}
                className="bg-burgundy text-cream text-base font-sans font-medium px-8 py-4 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200 min-h-[52px] border border-transparent hover:border-gold"
              >
                Book Free Call
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
