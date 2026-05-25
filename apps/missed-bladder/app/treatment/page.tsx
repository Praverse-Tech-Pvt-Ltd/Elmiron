import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { TreatmentLadder } from '@/components/TreatmentLadder'
import { ProductCTA } from '@/components/ProductCTA'

export const metadata: Metadata = {
  title: 'Treatment',
  description: 'The IC/BPS treatment ladder — from lifestyle modification to surgical intervention.',
}

export default function TreatmentPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Management
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              The IC/BPS treatment ladder
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              IC/BPS is managed stepwise from conservative measures to interventional procedures.
              A multimodal approach — addressing pain, urothelial function, and psychological
              wellbeing — achieves the best outcomes.
            </p>
          </div>
        </section>

        <TreatmentLadder />
        <ProductCTA />
      </main>
      <Footer />
    </>
  )
}

