'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'GAG Layer Restoration',
    body: 'PPS is a synthetic polysaccharide and close analogue of the bladder\'s protective glycosaminoglycan (GAG) layer. It adheres to the urothelium, repairing the barrier that shields the bladder wall from urinary irritants.',
  },
  {
    num: '02',
    title: 'Anti-inflammatory Action',
    body: 'Elmiron® inhibits mast cell histamine release and reduces submucosal inflammation, breaking the pain-inflammation cycle central to IC/BPS. Cystoscopic studies confirm reduction in mucosal redness, scarring, and hyperaemia.',
  },
  {
    num: '03',
    title: 'Sustained Symptom Relief',
    body: 'Clinical benefit is duration-dependent, not dose-dependent. Patients who responded showed improvement from 5–10 weeks, with benefit continuing to increase over 1–2 years. 80% of patients who restarted therapy after stopping experienced rapid symptom return.',
  },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export function MechanismGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Mechanism of Action
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal max-w-xl leading-tight">
            How Elmiron<sup className="text-[0.5em] text-muted ml-1">®</sup> works
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative bg-white p-8 border border-sage/20 hover:border-sage/40 transition-colors group"
            >
              {/* Faded step number */}
              <span className="absolute top-4 right-6 font-display text-7xl font-light text-sage/10 select-none group-hover:text-sage/15 transition-colors">
                {step.num}
              </span>

              <div className="relative">
                <span className="inline-block text-[0.65rem] font-body font-medium tracking-[0.15em] uppercase text-sage-deep mb-4">
                  Step {step.num}
                </span>
                <h3 className="font-display text-xl font-light text-charcoal mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

