'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function InitiativeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Top — India positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
                Available in India
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
                India's only oral <em className="italic text-sage-deep">PPS therapy</em> for IC/BPS
              </h2>
              <p className="font-body text-base text-muted leading-relaxed mb-4 font-light">
                IC/BPS affects an estimated 3–8% of women in India — the majority undiagnosed,
                mismanaged as recurrent UTI, or left without a targeted therapy. Elmiron® changes that.
              </p>
              <p className="font-body text-base text-muted leading-relaxed mb-4 font-light">
                As the only pentosan polysulfate sodium formulation available in India, Elmiron® brings
                35 years of global clinical evidence directly to Indian patients — at a price point
                accessible across the healthcare spectrum.
              </p>
              <p className="font-body text-base text-muted leading-relaxed mb-8 font-light">
                Supported by the Missed Bladder Disease initiative, led by Dr. Sanjay Pandey,
                to close the diagnostic gap through GIBBS-guided frameworks across India.
              </p>
              <a
                href="https://missedbladderdisease.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide inline-block"
              >
                Disease Education Hub ↗
              </a>
            </div>

            {/* Right — Evidence snapshot */}
            <div className="bg-sage-pale p-10 border border-sage/20">
              <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-6">
                Clinical Evidence Snapshot
              </span>
              <div className="space-y-5">
                {[
                  { stat: '35+ years', label: 'of global clinical research and real-world use' },
                  { stat: '5 / 7 RCTs', label: 'randomised controlled trials confirmed clear efficacy in IC/BPS' },
                  { stat: '54.2%', label: 'of patients reported >50% improvement (GRA) in a 14-year follow-up study' },
                  { stat: '42–62%', label: 'experienced moderate to significant symptom improvement (Hanno, 2,809 patients)' },
                  { stat: 'Unequivocal', label: 'von Ophoven 2019 meta-analysis conclusion on PPS efficacy vs placebo' },
                ].map((item) => (
                  <div key={item.stat} className="flex items-start gap-4 pb-4 border-b border-sage/15 last:border-0 last:pb-0">
                    <span className="font-display text-xl font-light text-sage-deep flex-none w-28">{item.stat}</span>
                    <span className="font-body text-[0.75rem] text-muted leading-relaxed">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

