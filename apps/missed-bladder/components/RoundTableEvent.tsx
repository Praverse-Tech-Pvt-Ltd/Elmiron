'use client'

import { useState, useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { RegistrationModal } from './RegistrationModal'

const schedule = [
  { time: '09:00', activity: 'Registration & Welcome Coffee' },
  { time: '09:30', activity: 'Opening Address — Dr. Sanjay Pandey' },
  { time: '10:00', activity: 'Session 1: The MISSED Framework in Clinical Practice' },
  { time: '11:00', activity: 'Case Presentations & Discussion' },
  { time: '12:30', activity: 'Lunch Break' },
  { time: '13:30', activity: 'Session 2: Pharmacotherapy — Elmiron® Evidence Update' },
  { time: '14:30', activity: 'Interactive Case Workshop' },
  { time: '16:00', activity: 'Panel Discussion & Q&A' },
  { time: '17:00', activity: 'Close & Networking' },
]

export function RoundTableEvent() {
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <section ref={ref} className="bg-charcoal py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left — Dr. Pandey */}
            <div>
              <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4">
                Faculty
              </span>
              <h2 className="font-display text-4xl font-light text-white mb-2 leading-tight">
                Dr. Sanjay Pandey
              </h2>
              <p className="font-body text-sm text-white/50 mb-6">
                Senior Urogynaecologist · Bladder Health Specialist · India
              </p>
              <blockquote className="border-l-2 border-sage pl-6 mb-8">
                <p className="font-display text-xl font-light italic text-white/80 leading-relaxed">
                  "The average IC patient sees five physicians over seven years before receiving
                  a correct diagnosis. We can do better — and we must."
                </p>
              </blockquote>
              <p className="font-body text-sm text-white/50 leading-relaxed font-light">
                Dr. Pandey leads the Missed Bladder Disease initiative, bringing together
                urologists, gynaecologists, pain specialists, and physiotherapists to build
                a multidisciplinary diagnostic framework for India.
              </p>
            </div>

            {/* Right — Event card */}
            <div className="border border-white/10 p-10 bg-white/4">
              <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4">
                Women's Bladder Health Round Table
              </span>

              {/* Date */}
              <div className="mb-6">
                <span className="font-display text-6xl font-light text-white">2026</span>
                <p className="font-body text-sm text-white/40 mt-1">Date & venue TBC · India</p>
              </div>

              {/* Schedule */}
              <div className="space-y-2.5 mb-8">
                {schedule.slice(0, 5).map((item) => (
                  <div key={item.time} className="flex gap-4 border-b border-white/8 pb-2.5">
                    <span className="font-body text-[0.7rem] text-white/30 w-12 flex-none pt-0.5">
                      {item.time}
                    </span>
                    <span className="font-body text-sm text-white/70">{item.activity}</span>
                  </div>
                ))}
                <p className="font-body text-[0.65rem] text-white/25 pt-1">
                  + {schedule.length - 5} more sessions
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full font-body text-sm py-3.5 bg-sage text-white hover:bg-sage-deep transition-colors tracking-wide"
              >
                Express Interest in Attending
              </button>

              <p className="font-body text-[0.65rem] text-white/25 text-center mt-3">
                For specialist physicians only · Limited seats
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

