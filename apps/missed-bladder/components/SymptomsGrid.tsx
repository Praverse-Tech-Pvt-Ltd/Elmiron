'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const symptoms = [
  {
    name: 'Pelvic Pain',
    description: 'Suprapubic or perineal pain worsening with bladder filling and relieved by voiding. The cardinal symptom of IC/BPS.',
    severity: 'HIGH',
    severityColor: 'bg-sage-deep',
  },
  {
    name: 'Urinary Urgency',
    description: 'Sudden, compelling desire to void that is difficult to defer. Different from OAB urgency — often driven by pain anticipation.',
    severity: 'HIGH',
    severityColor: 'bg-sage-deep',
  },
  {
    name: 'Urinary Frequency',
    description: 'Voiding >8 times/day and often multiple times nightly. Average IC patient voids 16–60 times daily in severe cases.',
    severity: 'HIGH',
    severityColor: 'bg-sage-deep',
  },
  {
    name: 'Dyspareunia',
    description: 'Pelvic pain during or after sexual intercourse due to inflamed bladder wall proximity to vaginal structures.',
    severity: 'MODERATE',
    severityColor: 'bg-sage',
  },
  {
    name: 'Nocturia',
    description: 'Waking ≥2 times per night to void. Disrupts sleep quality and is a major contributor to quality-of-life impairment.',
    severity: 'MODERATE',
    severityColor: 'bg-sage',
  },
  {
    name: 'Pelvic Floor Tension',
    description: 'Hypertonic pelvic floor muscles secondary to chronic pain guarding. Often mistaken for vaginismus or pudendal neuralgia.',
    severity: 'MODERATE',
    severityColor: 'bg-sage',
  },
  {
    name: 'Hematuria',
    description: 'Microscopic or gross hematuria present in ~10% of cases. Requires cystoscopy to exclude malignancy before IC diagnosis.',
    severity: 'VARIABLE',
    severityColor: 'bg-sage-light',
  },
  {
    name: 'Vulvodynia',
    description: 'Chronic vulvar pain without identifiable cause, frequently co-existing with IC/BPS due to shared pelvic sensitization.',
    severity: 'VARIABLE',
    severityColor: 'bg-sage-light',
  },
]

export function SymptomsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-sage-pale py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Clinical Presentation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Recognizing IC/BPS symptoms
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {symptoms.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-white p-6 border border-sage/20 hover:border-sage/40 transition-colors group"
            >
              {/* Severity bar */}
              <div className={`w-full h-1 ${s.severityColor} mb-4`} />

              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg font-light text-charcoal leading-snug">{s.name}</h3>
                <span className="font-body text-[0.55rem] tracking-[0.12em] uppercase text-muted flex-none ml-2 mt-1">
                  {s.severity}
                </span>
              </div>
              <p className="font-body text-xs text-muted leading-relaxed font-light">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'High Frequency', color: 'bg-sage-deep' },
            { label: 'Moderate Frequency', color: 'bg-sage' },
            { label: 'Variable', color: 'bg-sage-light' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-6 h-1 ${l.color}`} />
              <span className="font-body text-[0.68rem] text-muted uppercase tracking-wide">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

