'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BlurText } from './ui/BlurText'

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
    <section
      className="min-h-[100svh] bg-cream flex items-center"
      style={{ paddingTop: '4rem' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 lg:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — content */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="label-eyebrow shiny-text mb-4 block"
          >
            India's Best Oral PPS Therapy
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[3.2rem] sm:text-5xl md:text-6xl font-light leading-[1.05] text-charcoal mb-2"
          >
            Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup>
            <span className="font-script block text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] text-sage-deep mt-1 font-normal tracking-widest">
              for women
            </span>
          </motion.h1>

          <motion.div variants={fadeUp}>
            <BlurText
              text="Relief at the root."
              as="p"
              className="font-display text-xl md:text-2xl lg:text-3xl font-light italic text-sage-deep mb-5"
              delay={100}
              direction="bottom"
              stepDuration={0.4}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-body text-sm md:text-base text-muted leading-relaxed mb-3 max-w-md font-light"
          >
            Pentosan Polysulfate Sodium 100 mg — the only oral medication
            specifically approved for Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS),
            now available and affordable across India.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-body text-sm text-sage-deep leading-relaxed mb-5 max-w-md font-medium"
          >
            Backed by 35+ years of global clinical evidence. 5 out of 7 randomised controlled trials
            confirmed efficacy. Prescribed by leading urologists across India.
          </motion.p>

          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-7">
            {[
              "India's Best Oral PPS Therapy",
              'IC / BPS Approved',
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
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 md:gap-4">
            <Link
              href="/how-it-works"
              className="font-body text-sm px-5 md:px-6 py-2.5 md:py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide"
            >
              Mechanism of Action
            </Link>
            <Link
              href="/formulations"
              className="font-body text-sm px-5 md:px-6 py-2.5 md:py-3 border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide"
            >
              View Formulations
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 pt-8 border-t border-sage/20 grid grid-cols-3 gap-4 md:gap-6"
          >
            {[
              { num: '100mg', label: 'Oral Capsule' },
              { num: '50mg/mL', label: 'Intravesical' },
              { num: '6+', label: 'Indications' },
            ].map((stat, i) => (
              <div key={stat.num} className={i > 0 ? 'border-l border-sage/20 pl-4 md:pl-6' : ''}>
                <div className="font-display text-xl md:text-2xl font-light text-sage-deep">{stat.num}</div>
                <div className="font-body text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — product visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative hidden lg:flex items-center justify-center bg-sage-pale/60 p-8 sm:p-12 lg:p-16 min-h-[360px] md:min-h-[480px] overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(74,122,74,0.25) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-sage/40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-sage/40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-sage/40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-sage/40" />
          <div className="relative">
            <Image
              src="/elmiron.png"
              alt="Elmiron® — Pentosan Polysulfate Sodium 100mg Capsules"
              width={340}
              height={460}
              className="object-contain w-auto max-h-[420px] md:max-h-[460px] mix-blend-multiply"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
