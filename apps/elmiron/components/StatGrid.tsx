'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { num: '35+', label: 'Years of global clinical use' },
  { num: '54%', label: 'Patients reporting >50% improvement (Ali et al, 2011)' },
  { num: '5/7', label: 'RCTs confirmed efficacy in IC/BPS' },
  { num: '2,809', label: 'Patients in landmark long-term study (Hanno, 1997)' },
]

export function StatGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="bg-charcoal py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.num}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-center"
          >
            <div className="font-display text-4xl font-light text-sage-light mb-2">{stat.num}</div>
            <div className="font-body text-[0.7rem] text-white/40 uppercase tracking-[0.15em]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

