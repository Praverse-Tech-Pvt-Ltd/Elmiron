import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DiagnosisSteps } from '@/components/DiagnosisSteps'

export const metadata: Metadata = {
  title: 'Diagnosis',
  description: 'A structured pathway for diagnosing IC/BPS and missed bladder conditions.',
}

export default function DiagnosisPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Diagnostic Pathway
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              How to diagnose IC/BPS
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              IC/BPS is a diagnosis of exclusion requiring systematic evaluation. Following a
              structured diagnostic pathway reduces time to diagnosis and prevents unnecessary
              antibiotic courses and invasive procedures.
            </p>
          </div>
        </section>

        <DiagnosisSteps />
      </main>
      <Footer />
    </>
  )
}

