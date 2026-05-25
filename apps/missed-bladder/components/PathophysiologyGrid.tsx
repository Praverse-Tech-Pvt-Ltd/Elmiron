'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Urothelial Barrier Disruption',
    body: 'Loss of GAG layer integrity allows urinary solutes (potassium, acid) to penetrate the urothelium, triggering subepithelial inflammation.',
  },
  {
    n: '02',
    title: 'Mast Cell Activation',
    body: 'Tryptase and histamine released by activated mast cells increase vascular permeability and sensitize afferent C-fibers in the lamina propria.',
  },
  {
    n: '03',
    title: 'Neurogenic Inflammation',
    body: 'Substance P and CGRP release from sensitized nerves perpetuate the inflammatory cascade through a neurogenic-immune feedback loop.',
  },
  {
    n: '04',
    title: 'Detrusor Instability',
    body: 'Inflammatory mediators and urothelial ATP release activate purinergic receptors on smooth muscle, contributing to detrusor overactivity.',
  },
  {
    n: '05',
    title: 'Central Sensitization',
    body: 'Chronic peripheral nociception leads to spinal cord wind-up and cortical reorganization, amplifying pain signals and broadening the pain field.',
  },
  {
    n: '06',
    title: 'Symptom Complex',
    body: 'The culminating presentation: suprapubic pain, urinary urgency/frequency, dyspareunia, and pelvic floor hypertonicity — often misdiagnosed for years.',
  },
]

export function PathophysiologyGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Pathophysiology
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight max-w-xl">
            The IC/BPS disease cascade
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.n}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-white p-8 border border-sage/20 relative group hover:border-sage/40 transition-colors"
            >
              <span className="absolute top-4 right-6 font-display text-6xl font-light text-sage/8 group-hover:text-sage/12 transition-colors select-none">
                {step.n}
              </span>
              <span className="inline-block text-[0.62rem] font-body tracking-[0.15em] uppercase text-sage-deep/60 mb-3">
                Step {step.n}
              </span>
              <h3 className="font-display text-lg font-light text-charcoal mb-3 leading-snug relative">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed font-light relative">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

