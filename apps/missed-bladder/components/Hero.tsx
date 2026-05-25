'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export function Hero() {
  return (
    <section className="min-h-screen bg-cream flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4"
          >
            Physician Education · Physician Education Initiative
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-light leading-tight text-charcoal mb-4"
          >
            The bladder conditions{' '}
            <em className="italic text-sage-deep">we keep missing</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-muted leading-relaxed mb-8 max-w-md font-light"
          >
            Millions of women with Interstitial Cystitis, Bladder Pain Syndrome, and related
            conditions go undiagnosed for 5–7 years. This initiative exists to close that gap.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/pathophysiology"
              className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide"
            >
              Explore the Science
            </Link>
            <Link
              href="/round-table"
              className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
            >
              Join the Round Table
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-sage/20"
          >
            {[
              { num: '5–7', label: 'Avg. years to diagnosis' },
              { num: '90%', label: 'Cases in women' },
              { num: '6', label: 'MISSED categories' },
            ].map((s) => (
              <div key={s.num}>
                <div className="font-display text-2xl font-light text-sage-deep">{s.num}</div>
                <div className="font-body text-[0.7rem] text-muted uppercase tracking-wide mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — MISSED acronym visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="bg-charcoal p-12 min-h-[480px] flex flex-col justify-center"
        >
          <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-8">
            The Diagnostic Framework
          </p>
          <div className="space-y-4">
            {[
              { letter: 'M', label: 'Microbiome / Mast Cell' },
              { letter: 'I', label: 'Interstitial Cystitis / BPS' },
              { letter: 'S', label: 'Stress / Somatic Disorders' },
              { letter: 'S', label: 'Structural Abnormalities' },
              { letter: 'E', label: 'Endometriosis / Endocrine' },
              { letter: 'D', label: 'Dysbiosis / Deficiency' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 border-b border-white/8 pb-4">
                <span className="font-display text-4xl font-light text-sage w-10 flex-none">
                  {item.letter}
                </span>
                <span className="font-body text-sm text-white/70 font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

