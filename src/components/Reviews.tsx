'use client'

import { useRef } from 'react'
import { Heart } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'

interface Review {
  text: string
  name: string
}

const ROW1: Review[] = [
  {
    text: "I was honestly so nervous about planning the proposal because I wanted it to feel special, but I had no idea how to bring everything together. The Proposal Concierge made the whole process feel easy. When we walked in and my fiancée saw the setup, she started crying right away. That moment alone made everything worth it.",
    name: 'Daniel M.',
  },
  {
    text: 'Shanelle was so kind and patient throughout the planning process. I had a general idea, but she helped shape it into something that felt romantic and personal without being too much. The final setup felt like it was made for us.',
    name: 'Aman S.',
  },
  {
    text: 'Everything was beautiful. The candles, flowers, rose petals, and colours all came together perfectly. It felt intimate, warm, and really thoughtful. My partner kept looking around after the proposal and noticing all the little details.',
    name: 'Joshua R.',
  },
  {
    text: "Gurpreet really understood the style I wanted. I didn't want anything overly flashy or generic, and the setup turned out elegant, soft, and romantic. It felt luxury without feeling staged.",
    name: 'Naveen K.',
  },
  {
    text: "The best part was that I didn't have to stress on the day of the proposal. The team handled the timing, setup, and details so I could focus on the actual moment. That made such a difference.",
    name: 'Michael A.',
  },
  {
    text: 'Fayaz helped make everything run smoothly behind the scenes. Everything was ready when we arrived, and the timing worked out exactly how I hoped. For such a nervous day, that peace of mind meant a lot.',
    name: 'Omar H.',
  },
  {
    text: 'The setup looked even better in person than it did in my head. It completely changed the space and made the proposal feel private and emotional. The photos turned out amazing, but being there in the moment was even better.',
    name: 'Ryan P.',
  },
  {
    text: "I could tell a lot of care went into the setup. It didn't feel like a standard package or something copied from online. It felt personal, romantic, and very well thought out.",
    name: 'Priya and Arjun',
  },
  {
    text: 'Shanelle and Gurpreet were amazing to work with. They listened to what I wanted, gave helpful ideas, and made everything feel simple. My fiancée absolutely loved it.',
    name: 'Jason T.',
  },
  {
    text: "I booked The Proposal Concierge because I wanted to do something meaningful, but I didn't know where to start. They guided me through the process and made the final moment feel so much more special than I could have planned on my own.",
    name: 'Ali R.',
  },
  {
    text: 'Honestly, the whole experience was beautiful. The setup was classy, emotional, and exactly the kind of proposal I wanted to give my partner.',
    name: 'Brandon L.',
  },
  {
    text: 'What stood out most was how calm and organized everything felt. I was already nervous enough, so having the decor and setup handled properly helped me actually enjoy the moment.',
    name: 'Kevin D.',
  },
  {
    text: 'The Proposal Concierge turned a simple space into something unforgettable. It felt romantic without being cheesy, elegant without being cold, and personal without being overdone.',
    name: 'Sofia and Mark',
  },
]

const ROW2: Review[] = [
  {
    text: 'My fiancée was completely surprised. She kept saying how beautiful everything looked and how thoughtful it all felt. It was one of those moments we will talk about forever.',
    name: 'Hamza N.',
  },
  {
    text: 'Gurpreet added such a creative touch to the setup. The colours, florals, and candles all worked so well together. It felt polished, but still very warm and romantic.',
    name: 'Ethan C.',
  },
  {
    text: 'I appreciated how much the team cared about the details. Even the small things, like where the candles were placed and how the flowers were arranged, made the whole setup feel intentional.',
    name: 'Meera S.',
  },
  {
    text: "This was one of the most important nights of my life, and The Proposal Concierge treated it that way. They didn't make it feel like just another booking. They really helped create a memory.",
    name: 'Anthony G.',
  },
  {
    text: "The setup was stunning but still felt very 'us.' That's what I loved most. It didn't feel like a random proposal setup. It felt like something designed around our relationship.",
    name: 'Zain M.',
  },
  {
    text: "Everything was ready, organized, and beautiful when we arrived. I didn't have to fix anything, move anything, or worry about anything. I just got to propose.",
    name: 'Chris B.',
  },
  {
    text: 'Shanelle added details I would have never thought of, and those were the things my fiancée noticed right away. It made the whole moment feel more personal and emotional.',
    name: 'Rohan P.',
  },
  {
    text: 'The whole team was professional, responsive, and easy to work with. They made a stressful moment feel simple and beautiful.',
    name: 'Marcus J.',
  },
  {
    text: "I wanted something romantic and elegant, but not over the top. The Proposal Concierge understood that perfectly. The setup felt soft, classy, and really meaningful.",
    name: 'Sameer A.',
  },
  {
    text: 'My partner still talks about how beautiful the proposal was. The setup made the moment feel so much more special, and I am really grateful for the care that went into it.',
    name: 'Noah F.',
  },
  {
    text: 'Fayaz was great with the logistics and timing. Everything happened exactly when it needed to, which helped the surprise go perfectly.',
    name: 'Bilal K.',
  },
  {
    text: 'The decor was gorgeous, but the feeling it created was what made it unforgettable. It felt warm, emotional, and full of love.',
    name: 'Elena and David',
  },
  {
    text: "I'm so glad I chose The Proposal Concierge. They helped me create a proposal that felt thoughtful, romantic, and truly memorable.",
    name: 'Adam W.',
  },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex-shrink-0 w-[280px] sm:w-[340px] bg-cream border border-gold/25 rounded-lg p-6 flex flex-col gap-3 mx-3"
      style={{ boxShadow: '0 2px 16px rgba(201,169,97,0.07)' }}
    >
      <Heart size={14} className="text-gold fill-gold/30 flex-shrink-0" aria-hidden="true" />
      <p className="font-sans text-sm text-charcoal/70 leading-relaxed italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-gold/50 text-xs" aria-hidden="true">·</span>
        <p className="font-display text-sm text-charcoal/60 tracking-wide">{review.name}</p>
      </div>
    </article>
  )
}

interface MarqueeRowProps {
  reviews: Review[]
  direction: 'left' | 'right'
  shouldReduceMotion: boolean
}

function MarqueeRow({ reviews, direction, shouldReduceMotion }: MarqueeRowProps) {
  const doubled = [...reviews, ...reviews]
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div
      className="marquee-row overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`flex ${!shouldReduceMotion ? animClass : ''}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  )
}

export function Reviews() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true })
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="reviews" className="py-24 lg:py-32 overflow-hidden">
      <motion.div
        ref={headingRef}
        className="text-center mb-14 px-4"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-3 tracking-wide">
          What Our Couples Are Saying
        </h2>
        <p className="font-script text-2xl sm:text-3xl text-burgundy">
          Real words from real proposals.
        </p>
      </motion.div>

      {shouldReduceMotion ? (
        /* Static grid when motion is reduced */
        <div
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-label="Customer reviews"
        >
          {[...ROW1, ...ROW2].slice(0, 9).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      ) : (
        /* Marquee rows */
        <div className="space-y-5" aria-label="Customer reviews scrolling display">
          <MarqueeRow reviews={ROW1} direction="left" shouldReduceMotion={false} />
          <MarqueeRow reviews={ROW2} direction="right" shouldReduceMotion={false} />
        </div>
      )}
    </section>
  )
}
