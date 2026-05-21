'use client'

import { useRef } from 'react'
import Script from 'next/script'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { Mail, Phone, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react'
import { InstagramIcon } from '@/components/InstagramIcon'

export function Booking() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="booking" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        className="text-center mb-14"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-3 tracking-wide">
          Let&rsquo;s Bring Your Vision to Life
        </h2>
        <p className="font-sans text-base sm:text-lg text-charcoal/65">
          Book your free 30-minute consultation. We reply within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: Calendly */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0.3, x: -10 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="flex flex-col"
        >
          <div
            className="border border-gold/30 rounded-lg overflow-hidden"
            style={{ boxShadow: '0 4px 24px rgba(201,169,97,0.08)' }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/concierge-proposals/30min?hide_gdpr_banner=1&background_color=faf6f1&primary_color=8b1538"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://calendly.com/concierge-proposals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans text-burgundy border border-burgundy/30 px-5 py-2.5 rounded-full hover:bg-burgundy hover:text-cream transition-all duration-200 min-h-[44px]"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Open in New Tab
            </a>
          </div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </motion.div>

        {/* Right: Contact card */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0.3, x: 10 }}
          animate={headingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="flex flex-col gap-6 pt-2"
        >
          <h3 className="font-display text-2xl text-charcoal tracking-wide">Get in Touch</h3>

          <ul className="space-y-5" aria-label="Contact information">
            <li>
              <a
                href="mailto:info@theproposalconcierge.ca"
                className="flex items-center gap-3 text-charcoal/70 hover:text-burgundy transition-colors group min-h-[44px]"
                aria-label="Email us at info@theproposalconcierge.ca"
              >
                <Mail size={18} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm group-hover:underline">
                  info@theproposalconcierge.ca
                </span>
              </a>
            </li>
            <li>
              <a
                href="tel:+16476274228"
                className="flex items-center gap-3 text-charcoal/70 hover:text-burgundy transition-colors group min-h-[44px]"
                aria-label="Call us at +1 647 627 4228"
              >
                <Phone size={18} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm group-hover:underline">
                  +1 (647) 627-4228
                </span>
              </a>
            </li>
            <li>
              <a
                href="sms:+16476274228"
                className="flex items-center gap-3 text-charcoal/70 hover:text-burgundy transition-colors group min-h-[44px]"
                aria-label="Text us at +1 647 627 4228"
              >
                <MessageSquare size={18} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm group-hover:underline">Text Us</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/theproposalconcierge.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal/70 hover:text-burgundy transition-colors group min-h-[44px]"
                aria-label="Follow us on Instagram at @theproposalconcierge.inc"
              >
                <InstagramIcon size={18} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm group-hover:underline">
                  @theproposalconcierge.inc
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="font-sans text-sm text-charcoal/65">Greater Toronto Area</span>
            </li>
          </ul>

          {/* Hours */}
          <div
            className="border border-gold/20 rounded-lg p-5"
            style={{ background: 'rgba(201,169,97,0.04)' }}
          >
            <div className="flex items-start gap-3 mb-3">
              <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40">
                Hours
              </p>
            </div>
            <ul className="space-y-2 pl-7 font-sans text-sm text-charcoal/65">
              <li>Monday to Friday: 6 PM to 9 PM</li>
              <li>Saturday and Sunday: until 10 PM</li>
            </ul>
          </div>

          <p className="font-sans text-xs text-charcoal/40 italic">
            We reply within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
