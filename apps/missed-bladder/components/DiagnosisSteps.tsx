'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Symptom Assessment',
    body: 'Apply validated tools: ICSI/ICPI (IC Symptom/Problem Index), PUF score, and O\'Leary-Sant questionnaire. Minimum 6 weeks of symptoms required for diagnosis.',
    tools: ['ICSI/ICPI', 'PUF Score', "O'Leary-Sant"],
  },
  {
    n: '02',
    title: 'Urinalysis & Culture',
    body: 'Exclude bacterial UTI via midstream urine culture. IC/BPS diagnosis requires absence of infection. Microscopic hematuria warrants upper tract imaging and cystoscopy.',
    tools: ['MSU Culture', 'Urinalysis', 'Urine Cytology'],
  },
  {
    n: '03',
    title: 'Cystoscopy ± Hydrodistension',
    body: 'Identify Hunner lesions (present in ~10% of IC/BPS) or glomerulations post-hydrodistension. Biopsy if lesions seen. Rules out carcinoma in situ.',
    tools: ['Cystoscopy', 'Hydrodistension', 'Biopsy if indicated'],
  },
  {
    n: '04',
    title: 'Potassium Sensitivity Test',
    body: 'Intravesical KCl test demonstrates urothelial permeability. A positive result supports IC/BPS diagnosis and predicts response to GAG-layer therapies.',
    tools: ['Intravesical KCl', 'Pain/Urgency Score'],
  },
  {
    n: '05',
    title: 'Differential Exclusion',
    body: 'Exclude endometriosis, pelvic floor dysfunction, pudendal neuralgia, bladder malignancy, radiation cystitis. Multidisciplinary assessment recommended.',
    tools: ['Pelvic USS', 'Urodynamics', 'Laparoscopy if needed'],
  },
  {
    n: '06',
    title: 'Diagnosis & Classification',
    body: 'Apply ESSIC or AUA IC/BPS diagnostic criteria. Classify as Hunner-type vs. non-Hunner-type. Begin treatment ladder accordingly.',
    tools: ['ESSIC Criteria', 'AUA Guidelines', 'MISSED Framework'],
  },
]

export function DiagnosisSteps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Diagnostic Pathway
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            A structured approach to diagnosis
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.n}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col md:flex-row gap-6 bg-white p-8 border border-sage/20 hover:border-sage/40 transition-colors group"
            >
              <div className="flex-none">
                <span className="font-display text-3xl font-light text-sage/40 group-hover:text-sage/60 transition-colors">
                  {step.n}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-light text-charcoal mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">{step.body}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((t) => (
                    <span key={t} className="inline-block px-2.5 py-1 text-[0.62rem] font-body tracking-[0.1em] uppercase bg-sage-pale text-sage-deep border border-sage/25">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

