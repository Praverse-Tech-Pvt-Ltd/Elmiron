'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function InitiativeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-20 md:py-24 section-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Top — India positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="label-eyebrow shiny-text mb-3 block">
                Available in India
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
                India's best oral{' '}
                <em className="italic text-sage-deep">PPS therapy</em> for IC/BPS
              </h2>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed mb-4 font-light">
                IC/BPS affects an estimated 3–8% of women in India — the majority undiagnosed,
                mismanaged as recurrent UTI, or left without a targeted therapy. Elmiron® changes that.
              </p>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed mb-4 font-light">
                As the only pentosan polysulfate sodium formulation available in India, Elmiron® brings
                35 years of global clinical evidence directly to Indian patients — at a price point
                accessible across the healthcare spectrum.
              </p>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed mb-8 font-light">
                Supported by the Missed Bladder Disease initiative, led by Dr. Sanjay Pandey,
                to close the diagnostic gap through GIBBS-guided frameworks across India.
              </p>
              <a
                href="https://missedbladderdisease.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide inline-block"
              >
                Disease Education Hub ↗
              </a>
            </div>

            {/* Right — Evidence snapshot */}
            <div className="bg-sage-pale p-8 md:p-10 border border-sage/20">
              <span className="label-eyebrow mb-6 block">
                Clinical Evidence Snapshot
              </span>
              <div className="space-y-0">
                {[
                  { stat: '35+ years', label: 'of global clinical research and real-world use' },
                  { stat: '5 / 7 RCTs', label: 'randomised controlled trials confirmed clear efficacy in IC/BPS' },
                  { stat: '54.2%', label: 'of patients reported >50% improvement (GRA) in a 14-year follow-up study' },
                  { stat: '42–62%', label: 'experienced moderate to significant symptom improvement (Hanno, 2,809 patients)' },
                  { stat: 'Unequivocal', label: 'von Ophoven 2019 meta-analysis conclusion on PPS efficacy vs placebo' },
                ].map((item, i) => (
                  <div
                    key={item.stat}
                    className="flex items-start gap-4 py-4 border-b border-sage/15 last:border-0 last:pb-0 first:pt-0 group"
                  >
                    <span className="font-display text-lg md:text-xl font-light text-sage-deep flex-none w-24 md:w-28 group-hover:text-charcoal transition-colors duration-200">
                      {item.stat}
                    </span>
                    <span className="font-body text-[0.74rem] text-muted leading-relaxed pt-0.5">
                      {item.label}
                    </span>
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
