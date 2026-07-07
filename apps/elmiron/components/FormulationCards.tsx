'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const formulations = [
  {
    type: 'Oral',
    name: 'Elmiron® Capsules',
    genericName: 'Pentosan Polysulfate Sodium',
    image: '/elmiron.png',
    imageAlt: 'Elmiron® Oral Capsules',
    specs: [
      { label: 'Strength', value: '100 mg' },
      { label: 'Form', value: 'Hard Gelatin Capsules' },
      { label: 'Dose', value: '100 mg three times daily' },
      { label: 'Pack', value: '30 / 90 Capsules' },
      { label: 'Route', value: 'Oral' },
    ],
    note: 'Take on empty stomach, 1 hour before or 2 hours after meals.',
  },
  {
    type: 'Intravesical',
    name: 'Elmiron® Solution',
    genericName: 'Pentosan Polysulfate Sodium',
    image: '/elmiron-instill.png',
    imageAlt: 'Elmiron® Intravesical Solution',
    specs: [
      { label: 'Strength', value: '50 mg/mL' },
      { label: 'Form', value: 'Sterile Instillation Solution' },
      { label: 'Volume', value: '40 mL per instillation' },
      { label: 'Pack', value: '4 Vials' },
      { label: 'Route', value: 'Intravesical' },
    ],
    note: 'Administered by a healthcare professional. Retain for a minimum of 30 minutes.',
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
    <section className="bg-sage-pale py-20 md:py-24 section-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-header">
          <span className="label-eyebrow shiny-text mb-3 block">
            Available Formulations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Two routes, one goal — relief for women with IC/BPS
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {formulations.map((f) => (
            <motion.div
              key={f.type}
              variants={fadeUp}
              className="bg-white p-7 md:p-8 border-t-[3px] border-sage border-l border-r border-b border-sage/20 flex flex-col"
            >
              {/* Product image — full-bleed top panel */}
              <div className="relative -mx-7 md:-mx-8 -mt-7 md:-mt-8 mb-7 bg-sage-pale/50 flex items-center justify-center overflow-hidden" style={{ height: '260px' }}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(74,122,74,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <Image
                  src={f.image}
                  alt={f.imageAlt}
                  width={320}
                  height={320}
                  className="object-contain relative z-10 mix-blend-multiply"
                  style={{ maxHeight: '230px', width: 'auto' }}
                />
              </div>

              {/* Badge */}
              <span className="inline-block self-start px-3 py-1 text-[0.65rem] font-body font-medium tracking-[0.15em] uppercase bg-sage-pale text-sage-deep border border-sage/30 mb-5">
                {f.type}
              </span>

              <h3 className="font-display text-2xl font-light text-charcoal mb-1">{f.name}</h3>
              <p className="font-body text-xs text-muted tracking-wide mb-6">{f.genericName}</p>

              {/* Specs */}
              <dl className="space-y-2.5 mb-6 flex-1">
                {f.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-sage/12 pb-2.5 last:border-0"
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

              <p className="font-body text-[0.72rem] text-muted italic leading-relaxed border-t border-sage/12 pt-4">
                {f.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 md:mt-10 text-center">
          <Link
            href="/formulations"
            className="font-body text-sm px-6 py-3 border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide inline-block"
          >
            Full Prescribing Information
          </Link>
        </div>
      </div>
    </section>
  )
}
