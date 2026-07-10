'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Formulations', href: '/formulations' },
  { label: 'Emerging', href: '/indications' },
  { label: 'Elmiron Care', href: '/elmiron-care' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-nav-theme="dark"]')
    if (!darkSections.length) return

    const navHeight = 64
    const observer = new IntersectionObserver(
      (entries) => setIsDark(entries.some((e) => e.isIntersecting)),
      {
        rootMargin: `0px 0px -${window.innerHeight - navHeight}px 0px`,
        threshold: 0,
      },
    )

    darkSections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const textMuted = isDark ? 'text-white/60' : 'text-muted'
  const textPrimary = isDark ? 'text-white' : 'text-charcoal'
  const textAccent = isDark ? 'text-sage-light' : 'text-sage-deep'
  const barColor = isDark ? 'bg-white' : 'bg-charcoal'
  const borderHover = isDark
    ? 'border-white/60 text-white hover:bg-white hover:text-charcoal'
    : 'border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white'

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-charcoal/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]'
            : 'bg-cream/97 backdrop-blur-md shadow-[0_1px_0_rgba(138,171,138,0.2)]'
          : 'bg-transparent'
      }`}
      style={{ top: 0 }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className={`font-display text-xl font-light tracking-wide transition-all duration-300 group-hover:opacity-70 ${textPrimary}`}>
            Elmiron<sup className="text-[0.5em] opacity-60 ml-0.5">®</sup>
          </span>
          <span className={`hidden xl:block text-[0.6rem] font-body tracking-[0.15em] uppercase border-l border-sage/30 pl-3 transition-colors duration-300 ${textMuted}`}>
            Pentosan Polysulfate Sodium for Women
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide whitespace-nowrap transition-colors duration-200 hover:opacity-100 ${textMuted}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://missedbladderdisease.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-sm border-b pb-0.5 whitespace-nowrap transition-colors duration-200 tracking-wide ${textAccent} border-current`}
          >
            Disease Education ↗
          </a>
          <a
            href="https://polysacc.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-sm tracking-wide whitespace-nowrap transition-colors duration-200 hover:opacity-100 ${textMuted}`}
          >
            polysacc.com ↗
          </a>
          <Link
            href="/#contact"
            className={`font-body text-sm px-5 py-2 border whitespace-nowrap transition-all duration-200 tracking-wide ${borderHover}`}
          >
            Contact
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px transition-all duration-300 ${barColor} ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${barColor} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${barColor} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className={`lg:hidden overflow-hidden backdrop-blur-md border-t ${
              isDark ? 'bg-charcoal/97 border-white/10' : 'bg-cream/97 border-sage/15'
            }`}
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-wide py-2.5 border-b last:border-0 transition-colors ${
                    isDark ? 'text-white/70 border-white/8 hover:text-white' : 'text-charcoal border-sage/10 hover:text-sage-deep'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://missedbladderdisease.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-body text-sm tracking-wide py-2.5 border-b transition-opacity hover:opacity-75 ${
                  isDark ? 'text-sage-light border-white/8' : 'text-sage-deep border-sage/10'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Disease Education ↗
              </a>
              <a
                href="https://polysacc.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-body text-sm tracking-wide py-2.5 border-b transition-opacity hover:opacity-75 ${
                  isDark ? 'text-white/70 border-white/8' : 'text-charcoal border-sage/10'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                polysacc.com ↗
              </a>
              <Link
                href="/#contact"
                className={`font-body text-sm tracking-wide py-2.5 transition-colors ${
                  isDark ? 'text-white/70 hover:text-white' : 'text-charcoal hover:text-sage-deep'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Medical Affairs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
