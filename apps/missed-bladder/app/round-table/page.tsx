import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RoundTableEvent } from '@/components/RoundTableEvent'

export const metadata: Metadata = {
  title: "Women's Bladder Health Round Table 2026",
  description:
    "Register your interest for the Women's Bladder Health Round Table 2026, led by Dr. Sanjay Pandey.",
}

export default function RoundTablePage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-cream py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Annual Event
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              Women's Bladder Health<br />
              <em className="italic text-sage-deep">Round Table 2026</em>
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              A one-day specialist conclave bringing together urologists, gynaecologists, pain
              specialists, and physiotherapists to advance the diagnosis and management of
              overlooked bladder conditions in women across India.
            </p>
          </div>
        </section>

        <RoundTableEvent />
      </main>
      <Footer />
    </>
  )
}

