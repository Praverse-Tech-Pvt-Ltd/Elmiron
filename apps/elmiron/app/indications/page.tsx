import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { IndicationsGrid } from '@/components/IndicationsGrid'

export const metadata: Metadata = {
  title: 'Indications',
  description:
    'Clinical indications for Elmiron (Pentosan Polysulfate Sodium) including IC/BPS, radiation cystitis, and more.',
}

export default function IndicationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Clinical Indications
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              Approved & emerging<br />
              <em className="italic text-sage-deep">applications</em>
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              Elmiron® is the first and only FDA-approved oral therapy for Interstitial Cystitis /
              Bladder Pain Syndrome, with emerging evidence supporting its use across a range of
              urothelial conditions.
            </p>
          </div>
        </section>

        <IndicationsGrid />

        {/* Evidence note */}
        <section className="bg-charcoal py-16" data-nav-theme="dark">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-body text-[0.75rem] text-white/30 leading-relaxed text-center max-w-2xl mx-auto">
              Use of Elmiron for conditions other than IC/BPS may be considered off-label in
              some markets. Prescribers should review current evidence and regional regulatory
              status. Full prescribing information available on request from Medical Affairs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

