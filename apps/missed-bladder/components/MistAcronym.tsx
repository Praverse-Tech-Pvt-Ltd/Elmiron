'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const letters = [
  {
    letter: 'M',
    title: 'Microbiome & Mast Cell',
    body: 'Disrupted urobiome and mast cell hyperactivation contribute to urothelial inflammation, pelvic hypersensitivity, and recurrent symptoms without detectable infection.',
    conditions: ['Mast Cell Cystitis', 'Urobiome Dysbiosis', 'Eosinophilic Cystitis'],
  },
  {
    letter: 'I',
    title: 'Interstitial Cystitis / BPS',
    body: 'The hallmark condition — chronic bladder pain with urgency and frequency, negative urine cultures, and characteristic cystoscopic findings including Hunner lesions.',
    conditions: ['IC/BPS (Hunner type)', 'IC/BPS (Non-Hunner)', 'Bladder Pain Syndrome'],
  },
  {
    letter: 'S',
    title: 'Stress & Somatic',
    body: 'Psychoneuroimmune pathways link central sensitization, anxiety, and PTSD to bladder hypersensitivity. Often dismissed as psychosomatic, these are real physiological conditions.',
    conditions: ['Central Sensitization', 'Somatic Symptom Disorder', 'Pelvic Floor Dysfunction'],
  },
  {
    letter: 'S',
    title: 'Structural Abnormalities',
    body: 'Anatomical factors — including pelvic organ prolapse, urethral diverticulum, and mesh complications — can masquerade as or co-exist with functional bladder disorders.',
    conditions: ['Pelvic Organ Prolapse', 'Urethral Diverticulum', 'Mesh Complication'],
  },
  {
    letter: 'E',
    title: 'Endometriosis & Endocrine',
    body: 'Bladder endometriosis affects the detrusor in up to 4% of endometriosis patients. Hormonal fluctuations modulate IC/BPS symptom severity throughout the menstrual cycle.',
    conditions: ['Bladder Endometriosis', 'Hormonal IC/BPS', 'Adenomyosis-related pain'],
  },
  {
    letter: 'D',
    title: 'Dysbiosis & Deficiency',
    body: 'Estrogen deficiency, nutritional gaps (D3, Mg, B12), and gut-bladder axis dysbiosis compound urothelial vulnerability, particularly in peri- and post-menopausal women.',
    conditions: ['Estrogen-deficiency Cystitis', 'Atrophic Vaginitis', 'Nutritional Bladder Syndrome'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export function MistAcronym() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            The MISSED Framework
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Six categories, one framework
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-0"
        >
          {letters.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-8 py-8 border-b border-sage/20 group hover:bg-sage-pale/30 px-4 -mx-4 transition-colors"
            >
              {/* Letter */}
              <div className="flex-none w-16">
                <span className="font-display text-5xl font-light text-sage group-hover:text-sage-deep transition-colors">
                  {item.letter}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-light text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-4">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.conditions.map((c) => (
                    <span
                      key={c}
                      className="inline-block px-2.5 py-1 text-[0.65rem] font-body tracking-[0.1em] uppercase bg-sage-pale text-sage-deep border border-sage/25"
                    >
                      {c}
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

