'use client'

import { useState } from 'react'
import Link from 'next/link'

const lines = [
  {
    id: 'first',
    label: '1st Line',
    title: 'Education, Lifestyle & Diet Modification',
    body: 'Patient education, bladder training, dietary elimination (acidic foods, caffeine, alcohol, artificial sweeteners), stress management, physiotherapy referral.',
    treatments: [
      'Bladder training / timed voiding',
      'IC diet elimination protocol',
      'Pelvic floor physiotherapy',
      'Stress & pain psychology referral',
    ],
    product: null,
  },
  {
    id: 'second',
    label: '2nd Line',
    title: 'Oral Pharmacotherapy',
    body: 'Pentosan polysulfate sodium (Elmiron®) is the only FDA-approved oral drug specifically for IC/BPS. Tricyclics (amitriptyline) and hydroxyzine may adjunct for pain and mast cell modulation.',
    treatments: [
      'Pentosan Polysulfate Sodium (Elmiron® 100mg TDS)',
      'Amitriptyline 10–75 mg/night',
      'Hydroxyzine 25–50 mg/night',
      'Quercetin / GAG supplements',
    ],
    product: { name: 'Elmiron®', href: 'https://elmiron.com' },
  },
  {
    id: 'third',
    label: '3rd Line',
    title: 'Intravesical Instillations',
    body: 'Direct bladder instillations bypass oral absorption limitations. DMSO cocktails (DMSO + heparin + lignocaine + triamcinolone) or PPS intravesical solution provide targeted relief.',
    treatments: [
      'PPS Intravesical (Elmiron® 50mg/mL)',
      'DMSO + Heparin + Lignocaine cocktail',
      'Hyaluronic acid (Cystistat®)',
      'Chondroitin sulphate (Uracyst®)',
    ],
    product: { name: 'Elmiron® Intravesical', href: 'https://elmiron.com/formulations' },
  },
  {
    id: 'fourth',
    label: '4th Line',
    title: 'Interventional Procedures',
    body: 'For refractory IC/BPS. Botulinum toxin A injections, sacral neuromodulation (InterStim®), and hydrodistension under anaesthesia offer significant relief in carefully selected patients.',
    treatments: [
      'Botulinum toxin A (100–200 U) cystoscopic injection',
      'Sacral neuromodulation (SNM)',
      'Hydrodistension under GA',
      'Pudendal nerve blocks',
    ],
    product: null,
  },
  {
    id: 'fifth',
    label: '5th Line',
    title: 'Surgical Options',
    body: 'Reserved for severe, refractory cases only. Fulguration of Hunner lesions (if present) may provide dramatic relief. Cyclosporin A for immunomodulation. Augmentation cystoplasty or urinary diversion as last resort.',
    treatments: [
      'Fulguration / laser ablation of Hunner lesions',
      'Cyclosporin A 1.5–3 mg/kg/day',
      'Augmentation cystoplasty',
      'Urinary diversion (rare)',
    ],
    product: null,
  },
]

export function TreatmentLadder() {
  const [active, setActive] = useState('first')
  const current = lines.find((l) => l.id === active)!

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Treatment Pathway
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            The IC/BPS treatment ladder
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left nav */}
          <div className="space-y-1">
            {lines.map((line) => (
              <button
                key={line.id}
                onClick={() => setActive(line.id)}
                className={`w-full text-left px-4 py-4 border-l-2 transition-all font-body text-sm tracking-wide ${
                  active === line.id
                    ? 'border-l-sage text-charcoal bg-white'
                    : 'border-l-transparent text-muted hover:text-charcoal hover:border-l-sage/30'
                }`}
              >
                <span className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-sage-deep block mb-0.5">
                  {line.label}
                </span>
                {line.title}
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="md:col-span-2 bg-white p-10 border border-sage/20">
            <span className="inline-block text-[0.65rem] font-body tracking-[0.15em] uppercase text-sage-deep mb-3">
              {current.label}
            </span>
            <h3 className="font-display text-2xl font-light text-charcoal mb-4">{current.title}</h3>
            <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">{current.body}</p>

            <ul className="space-y-2.5 mb-8">
              {current.treatments.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-sage rounded-full flex-none mt-1.5" />
                  <span className="font-body text-sm text-charcoal">{t}</span>
                </li>
              ))}
            </ul>

            {current.product && (
              <div className="border border-sage/30 p-6 bg-sage-pale/50">
                <span className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-sage-deep block mb-2">
                  Featured Product
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-light text-charcoal">
                    {current.product.name}
                  </span>
                  <a
                    href={current.product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm px-5 py-2.5 bg-sage text-white hover:bg-sage-deep transition-colors tracking-wide"
                  >
                    View Product ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

