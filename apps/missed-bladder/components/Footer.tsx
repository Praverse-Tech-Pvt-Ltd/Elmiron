import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-light mb-2">Missed Bladder Disease</div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs">
              A physician education initiative , led by Dr. Sanjay Pandey, addressing
              the diagnostic gap in women's bladder health across India.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Education
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Pathophysiology', href: '/pathophysiology' },
                { label: 'Symptoms', href: '/symptoms' },
                { label: 'Diagnosis', href: '/diagnosis' },
                { label: 'Treatment', href: '/treatment' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Events & Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/round-table" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Round Table 2026
                </Link>
              </li>
              <li>
                <a
                  href="https://elmiron.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  Elmiron® Product Site ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="font-body text-[0.7rem] text-white/30 leading-relaxed max-w-2xl">
            This website is for educational purposes for healthcare professionals. Content does not
            constitute medical advice. © {new Date().getFullYear()} The Company
          </p>
        </div>
      </div>
    </footer>
  )
}

