import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FormulationCards } from '@/components/FormulationCards'

export const metadata: Metadata = {
  title: 'Formulations for Women with IC/BPS',
  description:
    'Elmiron formulations for women with Interstitial Cystitis / Bladder Pain Syndrome: oral 100mg capsules and intravesical 50mg/mL solution.',
}

export default function FormulationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Available Formulations
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              Two routes,<br />
              <em className="italic text-sage-deep">one goal</em>
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              Elmiron® is available in two distinct formulations to suit the clinical needs of
              women with IC/BPS — oral capsules for systemic convenience, and intravesical solution
              for direct bladder delivery.
            </p>
          </div>
        </section>

        <FormulationCards />

        {/* Dosing guidelines */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-light text-charcoal mb-10">
              Dosing Guidelines
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-sage pl-6">
                <h3 className="font-display text-xl font-light text-charcoal mb-2">Oral (100mg Capsules)</h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Standard dose:</strong> 100 mg three times daily (300 mg/day total). Clinical studies evaluated doses up to 900 mg/day with no dose-response advantage — efficacy is duration-dependent, not dose-dependent.
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Administration:</strong> Take on empty stomach, at least 1 hour before or 2 hours after meals, with a full glass of water.
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Missed dose:</strong> Take as soon as remembered. If close to next scheduled dose, skip and resume normal schedule. Do not double-dose.
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Duration:</strong> First signs of improvement typically at 5–10 weeks. Minimum 3–6 months to assess full clinical benefit. Benefit continues to increase over 1–2 years of continuous use.
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light">
                  <strong className="text-charcoal font-medium">Storage:</strong> Room temperature, dry place. Do not store in bathroom.
                </p>
              </div>
              <div className="border-l-2 border-sage-light pl-6">
                <h3 className="font-display text-xl font-light text-charcoal mb-2">Intravesical (50mg/mL Solution)</h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Dose:</strong> 40 mL (2,000 mg) per instillation
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">
                  <strong className="text-charcoal font-medium">Frequency:</strong> Once weekly for 6 weeks (induction), then monthly (maintenance)
                </p>
                <p className="font-body text-sm text-muted leading-relaxed font-light">
                  <strong className="text-charcoal font-medium">Retention:</strong> The patient should retain the instillation for a minimum of 30 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="bg-charcoal py-20" data-nav-theme="dark">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-light text-white mb-8">
              Safety & Contraindications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-4">
                  Common Side Effects
                </h3>
                <ul className="space-y-2">
                  {[
                    'Diarrhoea and upset stomach',
                    'Abdominal pain or cramps',
                    'Dizziness or headache',
                    'Alopecia (hair loss)',
                    'Mild anticoagulant effect — avoid injury, use soft toothbrush',
                    'Retinal pigmentary changes with very long-term use (>13 years)',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-sage rounded-full flex-none mt-2" />
                      <span className="font-body text-sm text-white/60">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-4">
                  Contraindications & Cautions
                </h3>
                <ul className="space-y-2">
                  {[
                    'Known hypersensitivity to PPS or heparins',
                    'Active bleeding disorders',
                    'Pre-existing retinal eye disease',
                    'Hepatic impairment (use with caution)',
                    'Pregnancy / lactation (consult full PI)',
                    'Concurrent anticoagulant or antiplatelet therapy',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-sage-light/60 rounded-full flex-none mt-2" />
                      <span className="font-body text-sm text-white/60">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Monitoring box */}
            <div className="border border-sage/30 p-6 mb-8">
              <h3 className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-sage-light mb-3">
                Monitoring Requirement
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                A retinal eye examination (including fundoscopy) should be performed within
                <strong className="text-white/80 font-medium"> 6 months of initiating therapy</strong> and
                periodically during treatment. Advise patients to report any changes in vision — including
                difficulty reading, trouble adapting to low light, or blurred/wavy eyesight — immediately,
              and ensure women on long-term therapy attend routine ophthalmologic review.
                Maculopathy risk is cumulative and dose-dependent, typically associated with long-term
                exposure (&gt;13 years or lifetime dose &gt;1,000 g).
              </p>
            </div>

            <p className="font-body text-[0.7rem] text-white/20 leading-relaxed">
              This information is a summary only. Please refer to the complete prescribing information
              for full safety data, drug interactions, and monitoring recommendations. Rx only.
              For BD Head enquiries: isshane.guptaa@swatispentose.com or kanchan.londhe@swatispentose.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

