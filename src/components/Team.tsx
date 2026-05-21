'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'motion/react'

interface TeamMember {
  name: string
  role: string
  bio: string
  src: string
  alt: string
  initials: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Shanelle',
    role: 'Design and Planning Lead',
    bio: "Shanelle leads our design and planning. She has a real eye for detail and a love for romantic, personal styling. She works closely with every couple to shape their proposal into something that feels authentic to them, not a copy of something off Pinterest.",
    src: '/team/shanelle.png',
    alt: 'Shanelle, Design and Planning Lead at The Proposal Concierge',
    initials: 'S',
  },
  {
    name: 'Gurpreet',
    role: 'Creative and Event Planning Lead',
    bio: 'Gurpreet handles the creative direction and event planning side of the business. She has spent years dreaming up romantic experiences and now brings that vision to life for couples across the GTA. Her setups are warm, elegant, and full of personality.',
    src: '/team/gurpreet.png',
    alt: 'Gurpreet, Creative and Event Planning Lead at The Proposal Concierge',
    initials: 'G',
  },
  {
    name: 'Fayaz',
    role: 'Operations Lead',
    bio: 'Fayaz keeps everything running smoothly. He manages logistics, coordination, and the moving parts behind every setup, so the team can stay focused on the design and you can stay focused on the proposal.',
    src: '/team/fayaz.png',
    alt: 'Fayaz, Operations Lead at The Proposal Concierge',
    initials: 'F',
  },
]

interface TeamPhotoProps {
  src: string
  alt: string
  initials: string
}

function TeamPhoto({ src, alt, initials }: TeamPhotoProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className="w-full flex items-center justify-center bg-cream border border-gold/30 rounded-lg"
        style={{ aspectRatio: '4/5' }}
        aria-label={alt}
      >
        <span className="font-display text-4xl text-burgundy/50">{initials}</span>
      </div>
    )
  }

  return (
    <div
      className="w-full overflow-hidden rounded-lg border border-gold/30 bg-cream"
      style={{ aspectRatio: '4/5', backgroundColor: '#FAF6F1' }}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={500}
        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        onError={() => setError(true)}
      />
    </div>
  )
}

interface TeamCardProps {
  member: TeamMember
  delay: number
}

function TeamCard({ member, delay }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, ease: 'easeOut', delay: shouldReduceMotion ? 0 : delay }}
      className="flex flex-col"
    >
      <TeamPhoto src={member.src} alt={member.alt} initials={member.initials} />
      <div className="pt-5">
        <h3 className="font-display text-xl text-charcoal tracking-wide mb-0.5">{member.name}</h3>
        <p className="font-script text-lg text-burgundy mb-3">{member.role}</p>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">{member.bio}</p>
      </div>
    </motion.article>
  )
}

export function Team() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="team" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={headingRef}
        className="text-center mb-16"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-wide">
          Meet the Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
