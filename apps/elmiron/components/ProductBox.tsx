'use client'

import { motion } from 'framer-motion'

export function ProductBox() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-sage-pale rounded-full blur-3xl opacity-40 scale-75" />

      {/* Product box — CSS 3D */}
      <motion.div
        initial={{ opacity: 0, rotateY: -20, rotateX: 8 }}
        animate={{ opacity: 1, rotateY: -8, rotateX: 4 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '800px',
        }}
        className="relative w-52 h-72"
      >
        {/* Main face */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            boxShadow: '20px 20px 60px rgba(74,122,74,0.12), -4px -4px 20px rgba(255,255,255,0.8)',
          }}
        >
          {/* Top half — sage green */}
          <div className="flex-1 bg-sage-deep flex flex-col items-center justify-center px-4 py-6">
            {/* small text */}
            <span className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-white/50 mb-3">
              
            </span>
            {/* Product name */}
            <span className="font-display text-4xl font-light text-white tracking-wide">
              elmiron
            </span>
            <sup className="font-body text-[0.55rem] text-white/60 self-start ml-2 -mt-1">®</sup>

            {/* Decorative line */}
            <div className="w-12 h-px bg-white/30 mt-4" />
          </div>

          {/* Bottom half — white */}
          <div className="flex-none bg-white px-5 py-5 border-t-2 border-sage/20">
            <p className="font-body text-[0.6rem] text-muted tracking-wide uppercase mb-1">
              Pentosan Polysulfate Sodium
            </p>
            <p className="font-display text-xl font-light text-charcoal mb-3">100 mg</p>

            <div className="space-y-1 mb-3">
              <div className="flex justify-between">
                <span className="font-body text-[0.55rem] text-muted uppercase tracking-wide">Form</span>
                <span className="font-body text-[0.55rem] text-charcoal">Hard Capsules</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-[0.55rem] text-muted uppercase tracking-wide">Pack</span>
                <span className="font-body text-[0.55rem] text-charcoal">30 Capsules</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-[0.55rem] text-muted uppercase tracking-wide">Rx</span>
                <span className="font-body text-[0.55rem] text-charcoal">Schedule H</span>
              </div>
            </div>

            {/* FDA badge */}
            <div className="inline-flex items-center gap-1 bg-sage-pale px-2 py-1">
              <span className="font-body text-[0.5rem] tracking-[0.12em] uppercase text-sage-deep font-medium">
                FDA Approved
              </span>
            </div>
          </div>
        </div>

        {/* Right side face (3D effect) */}
        <div
          className="absolute top-0 right-0 h-full bg-sage/80"
          style={{
            width: '20px',
            transform: 'rotateY(90deg) translateX(10px)',
            transformOrigin: 'right',
            opacity: 0.4,
          }}
        />
      </motion.div>
    </div>
  )
}

