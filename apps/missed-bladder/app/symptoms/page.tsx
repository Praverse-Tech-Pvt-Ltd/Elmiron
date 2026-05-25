import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SymptomsGrid } from '@/components/SymptomsGrid'

export const metadata: Metadata = {
  title: 'Symptoms',
  description: 'Recognizing the symptoms of IC/BPS and missed bladder conditions in women.',
}

export default function SymptomsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Clinical Presentation
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              Recognising IC/BPS symptoms
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              The symptom complex of IC/BPS overlaps significantly with conditions like OAB,
              endometriosis, and recurrent UTI. Understanding the nuances allows earlier diagnosis
              and prevents years of unnecessary suffering.
            </p>
          </div>
        </section>

        <SymptomsGrid />

        {/* Differential section */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-light text-charcoal mb-8">
              Common Misdiagnoses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { wrong: 'Recurrent UTI', right: 'IC/BPS (negative cultures)', note: 'Up to 60% of IC patients receive ≥3 antibiotic courses before correct diagnosis' },
                { wrong: 'Overactive Bladder', right: 'IC/BPS with urgency', note: 'OAB is driven by detrusor overactivity; IC/BPS urgency is pain-motivated' },
                { wrong: 'Anxiety / Psychosomatic', right: 'Central sensitization', note: 'Somatic symptoms have documented neurobiological basis in IC/BPS' },
                { wrong: 'Endometriosis only', right: 'Bladder endometriosis + IC/BPS', note: '30–50% of endometriosis patients have co-existing bladder pathology' },
              ].map((d) => (
                <div key={d.wrong} className="bg-white p-6 border border-sage/20">
                  <div className="flex gap-4 items-start mb-3">
                    <div className="text-center">
                      <span className="font-body text-[0.6rem] tracking-wide uppercase text-muted/60 block mb-1">Often diagnosed as</span>
                      <span className="font-body text-sm font-medium text-charcoal">{d.wrong}</span>
                    </div>
                    <span className="font-body text-muted mt-4">→</span>
                    <div className="text-center">
                      <span className="font-body text-[0.6rem] tracking-wide uppercase text-sage-deep/60 block mb-1">Actually</span>
                      <span className="font-body text-sm font-medium text-charcoal">{d.right}</span>
                    </div>
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed italic">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

