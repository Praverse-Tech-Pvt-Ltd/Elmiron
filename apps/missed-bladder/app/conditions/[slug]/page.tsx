import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ProductCTA } from '@/components/ProductCTA'

// Static params for build — extend with Sanity when connected
export async function generateStaticParams() {
  return [
    { slug: 'interstitial-cystitis' },
    { slug: 'bladder-pain-syndrome' },
    { slug: 'mast-cell-cystitis' },
    { slug: 'radiation-cystitis' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const name = params.slug.replace(/-/g, ' ')
  return {
    title: name.charAt(0).toUpperCase() + name.slice(1),
    description: `Clinical information on ${name} — part of the Missed Bladder Disease educational initiative.`,
  }
}

// Static content map (replace with Sanity fetch when connected)
const conditionContent: Record<string, {
  name: string
  category: string
  overview: string
  symptoms: string[]
  pathophysiology: string
  treatment: string
}> = {
  'interstitial-cystitis': {
    name: 'Interstitial Cystitis / BPS',
    category: 'I — Interstitial',
    overview: 'Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS) is a chronic condition characterised by bladder pain or pressure with urgency and frequency, in the absence of identifiable infection or other pathology.',
    symptoms: ['Suprapubic pain worsening with bladder filling', 'Urinary urgency and frequency (>8/day)', 'Nocturia', 'Pelvic pressure', 'Dyspareunia'],
    pathophysiology: 'Urothelial GAG layer deficiency allows urinary irritants to penetrate the bladder wall, triggering mast cell activation, neurogenic inflammation, and eventually central sensitization.',
    treatment: 'Conservative lifestyle measures, oral Pentosan Polysulfate Sodium (Elmiron®), intravesical instillations, and escalation to neuromodulation or surgery in refractory cases.',
  },
  'mast-cell-cystitis': {
    name: 'Mast Cell Cystitis',
    category: 'M — Microbiome / Mast Cell',
    overview: 'Mast Cell Cystitis is characterized by elevated mast cell density (>28 cells/mm²) in the detrusor muscle, with histamine-driven bladder inflammation and hypersensitivity.',
    symptoms: ['Severe urgency', 'Pelvic burning pain', 'Urticaria (in systemic mast cell disease)', 'Frequency', 'Recurrent symptoms with triggers (foods, stress)'],
    pathophysiology: 'Activated mast cells release histamine, tryptase, and prostaglandins, increasing urothelial permeability and sensitizing bladder afferents.',
    treatment: 'Antihistamines (H1 + H2), hydroxyzine, cromolyn sodium, dietary mast cell trigger avoidance, and PPS for GAG layer repair.',
  },
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = conditionContent[params.slug] ?? {
    name: params.slug.replace(/-/g, ' '),
    category: 'Bladder Condition',
    overview: 'Detailed clinical information for this condition is being prepared. Please check back soon.',
    symptoms: [],
    pathophysiology: '',
    treatment: '',
  }

  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
              {condition.category}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-4">
              {condition.name}
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-cream py-16 section-divider">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-light text-charcoal mb-4">Overview</h2>
            <p className="font-body text-base text-muted leading-relaxed font-light">{condition.overview}</p>
          </div>
        </section>

        {condition.symptoms.length > 0 && (
          <section className="bg-sage-pale py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-6">Key Symptoms</h2>
              <ul className="space-y-2.5">
                {condition.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-sage rounded-full flex-none mt-2" />
                    <span className="font-body text-sm text-charcoal">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {condition.pathophysiology && (
          <section className="bg-cream py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-4">Pathophysiology</h2>
              <p className="font-body text-base text-muted leading-relaxed font-light">{condition.pathophysiology}</p>
            </div>
          </section>
        )}

        {condition.treatment && (
          <section className="bg-cream py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-4">Treatment Approach</h2>
              <p className="font-body text-base text-muted leading-relaxed font-light">{condition.treatment}</p>
            </div>
          </section>
        )}

        <ProductCTA />
      </main>
      <Footer />
    </>
  )
}
