import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" data-nav-theme="dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="font-display text-2xl font-light mb-1 tracking-wide">
              elmiron<sup className="text-[0.5em] text-white/40 ml-0.5">®</sup>
            </div>
            <div className="w-8 h-px bg-sage/40 mb-4" />
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs font-light">
              Pentosan Polysulfate Sodium 100mg. The only FDA-approved oral therapy for
              Interstitial Cystitis / Bladder Pain Syndrome — a condition that affects women at
              far higher rates than men.
            </p>
            <p className="font-body text-[0.68rem] text-white/25 tracking-wide uppercase">
              India's best oral PPS therapy for women with IC/BPS
            </p>

            <div className="border-t border-sage/20 pt-4 mt-4">
              <p className="font-body text-[0.68rem] text-white/40 tracking-wide uppercase mb-1">
                Manufactured &amp; Distributed by
              </p>
              <a
                href="https://polysacc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[0.82rem] text-sage hover:text-sage-light transition-colors tracking-wide font-medium"
              >
                Polysaccharide Chemistry Pvt Ltd ↗
              </a>
              <p className="font-body text-[0.7rem] text-white/30 mt-0.5">
                404 &amp; 405, Sona Chambers, Kalbadevi, Mumbai - 400002
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/35 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Formulations', href: '/formulations' },
                { label: 'Emerging', href: '/indications' },
                { label: 'Elmiron Care (Patients)', href: '/elmiron-care' },
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

            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/35 mb-4 mt-8">
              Related Sites
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://missedbladderdisease.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-sage hover:text-sage-light transition-colors"
                >
                  Missed Bladder Disease ↗
                </a>
              </li>
              <li>
                <a
                  href="https://polysacc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-sage hover:text-sage-light transition-colors"
                >
                  polysacc.com ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#contact" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Contact BD Head
                </Link>
              </li>
              <li>
                <a href="mailto:isshane.guptaa@swatispentose.com" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  isshane.guptaa@swatispentose.com
                </a>
              </li>
              <li>
                <a href="mailto:kanchan.londhe@swatispentose.com" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  kanchan.londhe@swatispentose.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-[0.68rem] text-white/28 leading-relaxed max-w-2xl">
            Rx only. For use by licensed healthcare professionals only. This material is intended for
            healthcare professionals in India. Please refer to the full prescribing information.
            © {new Date().getFullYear()} Polysaccharide Chemistry Pvt Ltd. All rights reserved.
          </p>
          <div className="font-body text-[0.7rem] text-white/30 leading-relaxed">
            <a href="mailto:isshane.guptaa@swatispentose.com" className="block hover:text-white transition-colors">
              Isshane Guptaa, BD Head · isshane.guptaa@swatispentose.com
            </a>
            <a href="mailto:kanchan.londhe@swatispentose.com" className="block hover:text-white transition-colors">
              Ms Kanchan Londhe · kanchan.londhe@swatispentose.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
