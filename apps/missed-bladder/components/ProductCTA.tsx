'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function ProductCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-sage-pale py-20 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
              First-line Oral Therapy
            </span>
            <h2 className="font-display text-4xl font-light text-charcoal leading-tight mb-4">
              Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup> for IC/BPS
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-6 font-light">
              Pentosan Polysulfate Sodium 100mg — the only FDA-approved oral therapy for
              IC/BPS. Restores the urothelial GAG layer and reduces bladder wall inflammation.
              Available in oral and intravesical formulations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://elmiron.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide inline-block"
              >
                Visit Elmiron® Product Site ↗
              </a>
              <a
                href="https://elmiron.com/formulations"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide inline-block"
              >
                Prescribing Information
              </a>
            </div>
          </div>

          <div className="bg-white p-8 border border-sage/20">
            <dl className="space-y-3">
              {[
                { label: 'Generic Name', value: 'Pentosan Polysulfate Sodium' },
                { label: 'Formulations', value: 'Oral 100mg Capsules · Intravesical 50mg/mL' },
                { label: 'FDA Approval', value: 'IC/BPS — Approved' },
                { label: 'Standard Dose', value: '100mg TDS (oral)' },
                { label: 'Manufacturer', value: 'The Company' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-sage/15 pb-3">
                  <dt className="font-body text-[0.7rem] text-muted uppercase tracking-wide">{item.label}</dt>
                  <dd className="font-body text-[0.75rem] text-charcoal font-medium text-right max-w-[55%]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

