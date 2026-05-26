'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProductBox } from './ProductBox'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function Hero() {
  return (
    <section className="min-h-screen bg-cream flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — content */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4"
          >
             Prescription Therapy
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-light leading-tight text-charcoal mb-2"
          >
            Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-light italic text-sage-deep mb-6"
          >
            Relief at the root.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-muted leading-relaxed mb-2 max-w-md font-light"
          >
            Pentosan Polysulfate Sodium 100 mg — India's only oral therapy
            approved for Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS).
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-body text-sm text-sage-deep leading-relaxed mb-4 max-w-md font-medium"
          >
            Now accessible and affordable across India — prescribed by leading urologists.
          </motion.p>

          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
            {[
              'India\'s Only PPS Oral',
              'IC / BPS',
              'Schedule H',
              'Oral + Intravesical',
            ].map((badge) => (
              <span
                key={badge}
                className="inline-block px-3 py-1 text-[0.65rem] font-body font-medium tracking-[0.12em] uppercase bg-sage-pale text-sage-deep border border-sage/30"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/how-it-works"
              className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide"
            >
              Mechanism of Action
            </Link>
            <Link
              href="/formulations"
              className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
            >
              View Formulations
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-sage/20 grid grid-cols-3 gap-6"
          >
            {[
              { num: '100mg', label: 'Oral Capsule' },
              { num: '50mg/mL', label: 'Intravesical' },
              { num: '6+', label: 'Indications' },
            ].map((stat) => (
              <div key={stat.num}>
                <div className="font-display text-2xl font-light text-sage-deep">{stat.num}</div>
                <div className="font-body text-[0.7rem] text-muted uppercase tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — product box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center bg-sage-pale/50 p-16 min-h-[480px]"
        >
          <ProductBox />
        </motion.div>
      </div>
    </section>
  )
}

