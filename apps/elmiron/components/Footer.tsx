import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-light mb-2">
              elmiron<sup className="text-[0.5em] text-white/40 ml-0.5">®</sup>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs">
              Pentosan Polysulfate Sodium 100mg. The only FDA-approved oral therapy for
              Interstitial Cystitis / Bladder Pain Syndrome.
            </p>
            <p className="font-body text-[0.7rem] text-white/30 tracking-wide uppercase">
              Manufactured by The Company
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Formulations', href: '/formulations' },
                { label: 'Indications', href: '/indications' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://missedbladder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  Disease Education Hub ↗
                </a>
              </li>
              <li>
                <Link href="#contact" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Contact Medical Affairs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-[0.7rem] text-white/30 leading-relaxed max-w-2xl">
            Rx only. For use by licensed healthcare professionals only. This material is intended for
            healthcare professionals in India. Please refer to the full prescribing information.
            © {new Date().getFullYear()} The Company All rights reserved.
          </p>
          <p className="font-body text-[0.7rem] text-white/20">
            contact@elmiron.com
          </p>
        </div>
      </div>
    </footer>
  )
}

