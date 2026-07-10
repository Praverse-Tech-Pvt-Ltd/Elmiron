'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ITEMS = [
  { key: 'elmiron', label: 'Take ELMIRON® as prescribed' },
  { key: 'water', label: 'Drink enough water' },
  { key: 'food-good', label: 'Eat bladder-friendly foods' },
  { key: 'food-avoid', label: 'Avoid my trigger foods' },
  { key: 'active', label: 'Stay physically active' },
  { key: 'stress', label: 'Manage stress' },
  { key: 'constipation', label: 'Prevent constipation' },
  { key: 'diary', label: 'Keep my bladder diary' },
  { key: 'followup', label: 'Attend follow-up appointments' },
] as const

const STORAGE_KEY = 'elmironCareChecklist'

function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

function loadState(): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
    if (raw.day !== todayKey()) return {}
    return raw.items || {}
  } catch {
    return {}
  }
}

function saveState(items: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ day: todayKey(), items }))
  } catch {
    /* storage unavailable — checklist still works for this session */
  }
}

export function DailyChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [hydrated, setHydrated] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    setChecked(loadState())
    setHydrated(true)
  }, [])

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      saveState(next)
      return next
    })
  }

  const done = ITEMS.filter((item) => checked[item.key]).length
  const pct = Math.round((done / ITEMS.length) * 100)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white p-7 md:p-9 border border-sage/20 border-t-[3px] border-t-sage"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
        <div>
          <h3 className="font-display text-2xl font-light text-charcoal mb-1">
            Your daily IC/BPS checklist
          </h3>
          <p className="font-body text-sm text-muted font-light">
            Tick these off as you go. Saved on this device only — nothing is sent anywhere.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setChecked({})
            saveState({})
          }}
          className="font-body text-[0.72rem] tracking-[0.1em] uppercase text-muted hover:text-clay border border-sage/30 hover:border-clay/50 px-4 py-2 transition-colors duration-200 flex-none"
        >
          Reset
        </button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
        {ITEMS.map((item) => {
          const isChecked = hydrated && !!checked[item.key]
          return (
            <li key={item.key}>
              <label className="group flex items-center gap-3 py-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.key)}
                  className="peer sr-only"
                />
                <span
                  className={`flex-none w-5 h-5 border flex items-center justify-center transition-colors duration-150 ${
                    isChecked ? 'bg-sage border-sage' : 'border-charcoal/30 group-hover:border-sage'
                  }`}
                >
                  <svg
                    viewBox="0 0 16 16"
                    className={`w-3 h-3 transition-opacity duration-150 ${isChecked ? 'opacity-100' : 'opacity-0'}`}
                    fill="none"
                  >
                    <polyline
                      points="3,8 6.5,11.5 13,4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </span>
                <span
                  className={`font-body text-sm transition-colors duration-150 ${
                    isChecked ? 'text-muted line-through' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </span>
              </label>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center gap-4 mt-7 pt-6 border-t border-sage/15">
        <div className="flex-1 h-[3px] bg-sage-pale">
          <div
            className="h-full bg-sage-deep transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="font-body text-[0.72rem] tracking-wide text-muted flex-none">
          {done} of {ITEMS.length} done today
        </span>
      </div>
    </motion.div>
  )
}
