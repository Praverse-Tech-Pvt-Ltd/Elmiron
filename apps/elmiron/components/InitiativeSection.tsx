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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
              Our Initiative
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              The Missed Bladder <em className="italic text-sage-deep">Disease</em> Project
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-4 font-light">
              Millions of women suffer from bladder conditions that go undiagnosed for years —
              dismissed as recurrent UTIs, anxiety, or "normal" pelvic discomfort.
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-8 font-light">
              Led by Dr. Sanjay Pandey, the Missed Bladder Disease initiative is closing this gap
              through physician education and GIBBS-guided diagnostic frameworks
              across India.
            </p>
            <a
              href="https://missedbladderdisease.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide inline-block"
            >
              Visit missedbladderdisease.com ↗
            </a>
          </div>

          {/* Right — featured insight */}
          <div className="bg-sage-pale p-10 border border-sage/20">
            <div className="mb-6">
              <span className="font-display text-6xl font-light text-sage/30">M</span>
              <span className="font-display text-6xl font-light text-sage/20">I</span>
              <span className="font-display text-6xl font-light text-sage/15">S</span>
              <span className="font-display text-6xl font-light text-sage/10">S</span>
              <span className="font-display text-6xl font-light text-sage/8">E</span>
              <span className="font-display text-6xl font-light text-sage/5">D</span>
            </div>
            <h3 className="font-display text-2xl font-light text-charcoal mb-3">
              The MISSED Framework
            </h3>
            <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">
              A diagnostic acronym covering six overlooked bladder condition categories:
              Microbiome, Interstitial Cystitis, Stress, Structural, Endometriosis, Dysbiosis.
            </p>
            <div className="space-y-2">
              {['M — Microbiome / Mast Cell', 'I — Interstitial Cystitis / IC-BPS', 'S — Stress / Somatic', 'S — Structural', 'E — Endometriosis / Endocrine', 'D — Dysbiosis / Deficiency'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-sage-deep rounded-full flex-none" />
                  <span className="font-body text-[0.75rem] text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

