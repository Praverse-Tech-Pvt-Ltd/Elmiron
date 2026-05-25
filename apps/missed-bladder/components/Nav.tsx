'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Pathophysiology', href: '/pathophysiology' },
  { label: 'Symptoms', href: '/symptoms' },
  { label: 'Diagnosis', href: '/diagnosis' },
  { label: 'Treatment', href: '/treatment' },
  { label: 'Round Table', href: '/round-table' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-7 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-sage/20' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-lg font-light tracking-wide text-charcoal">
            Missed Bladder Disease
          </span>
          <span className="hidden md:inline text-[0.6rem] font-body tracking-[0.15em] text-muted uppercase border-l border-sage/30 pl-3">
            
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted hover:text-charcoal tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://elmiron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sage-deep hover:text-sage border-b border-sage/40 hover:border-sage pb-0.5 transition-colors tracking-wide"
          >
            Elmiron® ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-cream border-t border-sage/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-charcoal tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://elmiron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sage-deep tracking-wide"
          >
            Elmiron® ↗
          </a>
        </div>
      )}
    </nav>
  )
}

