'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const formulations = [
  {
    type: 'Oral',
    name: 'Elmiron® Capsules',
    genericName: 'Pentosan Polysulfate Sodium',
    specs: [
      { label: 'Strength', value: '100 mg' },
      { label: 'Form', value: 'Hard Gelatin Capsules' },
      { label: 'Dose', value: '100 mg three times daily' },
      { label: 'Pack', value: '30 / 90 Capsules' },
      { label: 'Route', value: 'Oral' },
    ],
    note: 'Take on empty stomach, 1 hour before or 2 hours after meals.',
    color: 'border-t-sage-deep',
  },
  {
    type: 'Intravesical',
    name: 'Elmiron® Solution',
    genericName: 'Pentosan Polysulfate Sodium',
    specs: [
      { label: 'Strength', value: '50 mg/mL' },
      { label: 'Form', value: 'Sterile Instillation Solution' },
      { label: 'Volume', value: '40 mL per instillation' },
      { label: 'Pack', value: '4 Vials' },
      { label: 'Route', value: 'Intravesical' },
    ],
    note: 'Administered by healthcare professional. Retain for minimum 30 minutes.',
    color: 'border-t-sage',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export function FormulationCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-sage-pale py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Available Formulations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Two routes, one goal
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {formulations.map((f) => (
            <motion.div
              key={f.type}
              variants={fadeUp}
              className="bg-white p-8 border-t-4 border-sage border-l border-r border-b border-sage/20"
            >
              {/* Badge */}
              <span className="inline-block px-3 py-1 text-[0.65rem] font-body font-medium tracking-[0.15em] uppercase bg-sage-pale text-sage-deep border border-sage/30 mb-5">
                {f.type}
              </span>

              <h3 className="font-display text-2xl font-light text-charcoal mb-1">{f.name}</h3>
              <p className="font-body text-xs text-muted tracking-wide mb-6">{f.genericName}</p>

              {/* Specs */}
              <dl className="space-y-2.5 mb-6">
                {f.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-sage/15 pb-2.5"
                  >
                    <dt className="font-body text-[0.72rem] text-muted uppercase tracking-wide">
                      {spec.label}
                    </dt>
                    <dd className="font-body text-[0.72rem] text-charcoal font-medium">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="font-body text-[0.72rem] text-muted italic leading-relaxed">
                {f.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/formulations"
            className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide inline-block"
          >
            Full Prescribing Information
          </Link>
        </div>
      </div>
    </section>
  )
}

