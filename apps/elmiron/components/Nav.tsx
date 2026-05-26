'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Formulations', href: '/formulations' },
  { label: 'Indications', href: '/indications' },
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
          <span className="font-display text-xl font-light tracking-wide text-charcoal">
            elmiron<sup className="text-[0.5em] text-muted ml-0.5">®</sup>
          </span>
          <span className="text-[0.6rem] font-body tracking-[0.15em] text-muted uppercase border-l border-sage/30 pl-3">
            
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
            href="https://missedbladderdisease.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sage-deep hover:text-sage border-b border-sage/40 hover:border-sage pb-0.5 transition-colors tracking-wide"
          >
            Disease Education ↗
          </a>
          <Link
            href="#contact"
            className="font-body text-sm px-5 py-2.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sage/20 px-6 py-4 flex flex-col gap-4">
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
            href="https://missedbladderdisease.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-sage-deep tracking-wide"
          >
            Disease Education ↗
          </a>
        </div>
      )}
    </nav>
  )
}

