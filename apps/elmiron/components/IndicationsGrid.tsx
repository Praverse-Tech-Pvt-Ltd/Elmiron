'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Indication {
  name: string
  description: string
}

interface IndicationsGridProps {
  indications?: Indication[]
}

// Fallback static data if Sanity not connected
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
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export function IndicationsGrid({ indications = defaultIndications }: IndicationsGridProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/15"
        >
          {indications.map((indication, i) => (
            <motion.div
              key={indication.name}
              variants={fadeUp}
              className="bg-cream p-8 hover:bg-white transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-sage-deep/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-2 h-2 bg-sage/30 group-hover:bg-sage transition-colors" />
              </div>
              <h3 className="font-display text-lg font-light text-charcoal mb-2 leading-snug">
                {indication.name}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed font-light">
                {indication.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

