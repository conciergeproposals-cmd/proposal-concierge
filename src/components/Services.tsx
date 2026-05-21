'use client'

import { useRef } from 'react'
import { Phone, Sparkles, ClipboardList, Flower, MapPin } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon: Icon, title, description, delay }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : delay }}
      className="flex flex-col items-center text-center p-8 bg-cream border border-gold/20 rounded-lg hover:border-gold/50 hover:shadow-md transition-all duration-300"
      style={{ boxShadow: '0 2px 12px rgba(201,169,97,0.06)' }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
        style={{ background: 'rgba(201,169,97,0.10)' }}
        aria-hidden="true"
      >
        <Icon size={22} className="text-gold" />
      </div>
      <h3 className="font-display text-lg text-charcoal mb-3 tracking-wide">{title}</h3>
      <p className="font-sans text-sm text-charcoal/65 leading-relaxed">{description}</p>
    </motion.div>
  )
}

const SERVICES = [
  {
    icon: Phone,
    title: 'Free 30-Minute Consultation',
    description: 'A relaxed call to talk through your vision and answer your questions.',
  },
  {
    icon: Sparkles,
    title: 'Custom Proposal Design',
    description: 'Setups built around your story, your colours, and the way you want it to feel.',
  },
  {
    icon: ClipboardList,
    title: 'Full-Service Coordination',
    description: 'We handle the timing, the logistics, and the small details on the day of.',
  },
  {
    icon: Flower,
    title: 'Luxury Decor and Styling',
    description: 'Premium florals, candles, and statement pieces, styled with care.',
  },
  {
    icon: MapPin,
    title: 'GTA-Wide Service Area',
    description:
      'Toronto, Mississauga, Markham, Brampton, Vaughan, and everywhere in between.',
  },
]

export function Services() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        className="text-center mb-16"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-5 tracking-wide">
          What We Do
        </h2>
        <p className="font-sans text-base sm:text-lg text-charcoal/65 max-w-2xl mx-auto leading-relaxed">
          We plan and style luxury marriage proposals across the Greater Toronto Area. From the
          first idea to the final candle, we handle the full setup so you can stay focused on
          the moment that matters.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
