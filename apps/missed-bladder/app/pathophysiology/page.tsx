import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { PathophysiologyGrid } from '@/components/PathophysiologyGrid'

export const metadata: Metadata = {
  title: 'Pathophysiology',
  description: 'Understanding the pathophysiology of IC/BPS — from urothelial damage to central sensitization.',
}

export default function PathophysiologyPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Disease Science
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              IC/BPS Pathophysiology
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              Interstitial Cystitis / Bladder Pain Syndrome is a multifactorial condition involving
              urothelial dysfunction, neurogenic inflammation, mast cell activation, and central
              sensitization — a cascade that takes years to reverse without targeted intervention.
            </p>
          </div>
        </section>

        <PathophysiologyGrid />
      </main>
      <Footer />
    </>
  )
}

