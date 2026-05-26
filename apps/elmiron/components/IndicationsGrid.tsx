'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SpotlightCard } from './ui/SpotlightCard'

interface Indication {
  name: string
  description: string
}

interface IndicationsGridProps {
  indications?: Indication[]
}

const defaultIndications: Indication[] = [
  {
    name: 'Interstitial Cystitis / BPS',
    description:
      'Primary indication. Chronic bladder condition causing pelvic pain, urgency, and frequency with no identifiable infection.',
  },
  {
    name: 'Bladder Pain Syndrome',
    description:
      'Suprapubic pain related to bladder filling, associated with at least one urinary symptom.',
  },
  {
    name: 'Radiation Cystitis',
    description:
      'Bladder inflammation following pelvic radiotherapy. PPS aids mucosal repair and symptom relief.',
  },
  {
    name: 'Hemorrhagic Cystitis',
    description:
      'Hematuria and bladder irritation from chemotherapy agents. Intravesical PPS may help restore barrier.',
  },
  {
    name: 'Overactive Bladder (adjunct)',
    description:
      'Used adjunctively in OAB patients with co-existing urothelial dysfunction.',
  },
  {
    name: 'Recurrent UTI Prevention',
    description:
      'GAG layer restoration may reduce bacterial adherence and prevent recurrent lower urinary tract infections.',
  },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export function IndicationsGrid({ indications = defaultIndications }: IndicationsGridProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-20 md:py-24 section-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-header">
          <span className="label-eyebrow shiny-text mb-3 block">
            Clinical Indications
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight max-w-lg">
            Approved & emerging applications
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/15"
        >
          {indications.map((indication, i) => (
            <motion.div key={indication.name} variants={fadeUp}>
              <SpotlightCard
                className="bg-cream p-7 md:p-8 hover:bg-white transition-colors duration-200 group cursor-default h-full"
                spotlightColor="rgba(138,171,138,0.12)"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-sage-deep/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-xs text-sage/40 group-hover:text-sage-deep group-hover:translate-x-0.5 transition-all duration-200">
                    →
                  </span>
                </div>
                <h3 className="font-display text-lg font-light text-charcoal mb-2 leading-snug group-hover:text-sage-deep transition-colors duration-200">
                  {indication.name}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light">
                  {indication.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
