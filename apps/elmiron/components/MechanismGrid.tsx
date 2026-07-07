'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SpotlightCard } from './ui/SpotlightCard'

const steps = [
  {
    num: '01',
    title: 'GAG Layer Restoration',
    body: 'In women with IC/BPS, the bladder\'s protective glycosaminoglycan (GAG) layer is often compromised. PPS is a synthetic polysaccharide and close analogue of this layer — it adheres to the urothelium, repairing the barrier that shields the bladder wall from urinary irritants.',
  },
  {
    num: '02',
    title: 'Anti-inflammatory Action',
    body: 'Elmiron® inhibits mast cell histamine release and reduces submucosal inflammation, breaking the pain-inflammation cycle central to IC/BPS in women. Cystoscopic studies confirm reduction in mucosal redness, scarring, and hyperaemia.',
  },
  {
    num: '03',
    title: 'Sustained Symptom Relief',
    body: 'Clinical benefit is duration-dependent, not dose-dependent. Women who responded showed improvement from 5–10 weeks, with benefit continuing to increase over 1–2 years. 80% of women who restarted therapy after stopping experienced rapid symptom return.',
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
    <section className="bg-cream py-20 md:py-24 section-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-header">
          <span className="label-eyebrow shiny-text mb-3 block">
            Mechanism of Action
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal max-w-xl leading-tight">
            How Elmiron<sup className="text-[0.5em] text-muted ml-1">®</sup> works for women
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeUp}>
              <SpotlightCard
                className="bg-white p-7 md:p-8 border border-sage/20 hover:border-sage/50 hover:-translate-y-1 transition-all duration-300 group h-full"
                spotlightColor="rgba(138,171,138,0.15)"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-5xl font-light text-sage/20 leading-none select-none group-hover:text-sage/35 transition-colors duration-300">
                    {step.num}
                  </span>
                  <span className="text-[0.65rem] font-body font-medium tracking-[0.15em] uppercase text-sage-deep">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-light text-charcoal mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light">
                  {step.body}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
