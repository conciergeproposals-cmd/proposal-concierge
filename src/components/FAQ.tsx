'use client'

import { useState, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I book?',
    answer:
      "We recommend booking at least 2 to 3 weeks in advance. For peak dates like Valentine's Day, Christmas, and summer weekends, please book 4 to 6 weeks ahead.",
  },
  {
    id: 'faq-2',
    question: 'Do you require a deposit?',
    answer:
      'Yes. A non-refundable deposit secures your date once we have finalised the package and details.',
  },
  {
    id: 'faq-3',
    question: 'Can the proposal be indoors or outdoors?',
    answer:
      'Both. We plan and style proposals in private homes, on rooftops, at beaches, in parks, at restaurants, and at venues across the GTA.',
  },
  {
    id: 'faq-4',
    question: 'Is the initial consultation really free?',
    answer: 'Yes. The 30-minute call is on us so we can hear your vision before you commit to anything.',
  },
  {
    id: 'faq-5',
    question: 'What areas do you serve?',
    answer:
      'All of the Greater Toronto Area, including Toronto, Mississauga, Markham, Brampton, Vaughan, Oakville, Burlington, and the surrounding cities. If you are nearby and not on the list, ask us.',
  },
  {
    id: 'faq-6',
    question: 'Can the colour scheme be customised?',
    answer:
      'Yes. Our base packages come in pink, white, or red, but custom palettes are available, especially with The Royal Affair.',
  },
]

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="border-b border-gold/20 last:border-b-0">
      <button
        id={`${item.id}-btn`}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle()
          }
        }}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-burgundy transition-colors group"
      >
        <span className="font-display text-base sm:text-lg text-charcoal group-hover:text-burgundy transition-colors tracking-wide">
          {item.question}
        </span>
        <span className="flex-shrink-0 text-gold" aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${item.id}-panel`}
            role="region"
            aria-labelledby={`${item.id}-btn`}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 font-sans text-sm sm:text-base text-charcoal/65 leading-relaxed pr-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-10px 0px' })
  const shouldReduceMotion = useReducedMotion()

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        ref={headingRef}
        className="text-center mb-14"
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-wide">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0.3, y: 10 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.1 }}
      >
        {FAQS.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </motion.div>
    </section>
  )
}
