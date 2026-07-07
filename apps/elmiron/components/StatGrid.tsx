'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CountUp } from './ui/CountUp'

const stats = [
  { num: 35, suffix: '+', label: 'Years of global clinical use in women with IC/BPS' },
  { num: 54, suffix: '%', label: 'Women reporting >50% improvement (Ali et al, 2011)' },
  { display: '5/7', label: 'RCTs confirmed efficacy in women with IC/BPS' },
  { num: 2809, suffix: '', label: 'Women in landmark long-term study (Hanno, 1997)' },
]

export function StatGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="bg-charcoal py-14 md:py-16" data-nav-theme="dark">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={`text-center py-8 px-4 md:px-6 ${
              i < stats.length - 1 ? 'border-r border-white/8' : ''
            } ${i >= 2 ? 'border-t border-white/8 md:border-t-0' : ''}`}
          >
            <div className="font-display text-3xl md:text-4xl font-light text-sage-light mb-2 leading-none">
              {'display' in stat ? (
                stat.display
              ) : (
                <CountUp end={stat.num!} suffix={stat.suffix} duration={1600} />
              )}
            </div>
            <div className="font-body text-[0.68rem] text-white/40 uppercase tracking-[0.12em] leading-relaxed max-w-[140px] mx-auto">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
