import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" data-nav-theme="dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="font-display text-2xl font-light mb-1 tracking-wide">
              elmiron<sup className="text-[0.5em] text-white/40 ml-0.5">®</sup>
            </div>
            <div className="w-8 h-px bg-sage/40 mb-4" />
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs font-light">
              Pentosan Polysulfate Sodium 100mg. The only FDA-approved oral therapy for
              Interstitial Cystitis / Bladder Pain Syndrome.
            </p>
            <p className="font-body text-[0.68rem] text-white/25 tracking-wide uppercase">
              India's only oral PPS therapy for IC/BPS
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/35 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Formulations', href: '/formulations' },
                { label: 'Indications', href: '/indications' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/35 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://missedbladderdisease.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  Disease Education Hub ↗
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  Contact Medical Affairs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-[0.68rem] text-white/28 leading-relaxed max-w-2xl">
            Rx only. For use by licensed healthcare professionals only. This material is intended for
            healthcare professionals in India. Please refer to the full prescribing information.
            © {new Date().getFullYear()} Elmiron®. All rights reserved.
          </p>
          <div className="font-body text-[0.68rem] text-white/28 shrink-0">
            <a
              href="mailto:elmiron@elmiron.in"
              className="hover:text-white/70 transition-colors duration-200"
            >
              Medical Affairs · elmiron@elmiron.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
