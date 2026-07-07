import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { MechanismGrid } from '@/components/MechanismGrid'

export const metadata: Metadata = {
  title: 'Mechanism of Action for Women with IC/BPS',
  description:
    'How Elmiron (Pentosan Polysulfate Sodium) works to restore the bladder GAG layer and relieve IC/BPS symptoms in women.',
}

const pathophysiologyPoints = [
  {
    title: 'Defective Urothelium',
    body: 'In women with IC/BPS, the urothelial glycosaminoglycan (GAG) layer is damaged, allowing urinary solutes to penetrate the bladder wall, triggering inflammation and pain.',
  },
  {
    title: 'Mast Cell Activation',
    body: 'Submucosally, mast cells release histamine and other inflammatory mediators, perpetuating the pain-inflammation cycle and causing detrusor muscle irritability — a pattern seen disproportionately in women presenting with chronic pelvic pain.',
  },
  {
    title: 'Neural Sensitization',
    body: 'Chronic inflammation sensitizes bladder afferent nerves, leading to central sensitization and amplified pain perception — hallmarks of IC/BPS that make early recognition in women essential.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Mechanism of Action for Women
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              How Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup> works for women
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              Elmiron (Pentosan Polysulfate Sodium) is a semi-synthetic heparin analog that acts
              locally on the bladder urothelium to restore the protective GAG layer, reduce
              inflammation, and break the IC/BPS pain cycle — a condition that predominantly
              affects women.
            </p>
          </div>
        </section>

        {/* Pathophysiology */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-light text-charcoal mb-10">
              Understanding IC/BPS Pathophysiology in Women
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pathophysiologyPoints.map((point, i) => (
                <div key={point.title} className="bg-white p-8 border border-sage/20">
                  <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-sage-deep/60 mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-light text-charcoal mb-3">{point.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed font-light">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MechanismGrid />

        {/* Pharmacokinetics */}
        <section className="bg-sage-pale py-20 section-divider">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-light text-charcoal mb-8">
              Pharmacokinetics
            </h2>
            <dl className="space-y-4">
              {[
                { term: 'Absorption', def: 'Poorly absorbed orally (~3–6%). Local action on urothelium is the primary mechanism, not systemic absorption.' },
                { term: 'Distribution', def: 'Distributed primarily to the urothelium and liver. Binds to GAG-deficient areas of the bladder wall where protective repair is needed.' },
                { term: 'Metabolism', def: 'Hepatic desulfation and depolymerization. Excreted primarily in urine and feces.' },
                { term: 'Elimination', def: 'Half-life approximately 4.8 hours after oral dosing. Urinary excretion ~6% of dose.' },
                { term: 'Onset', def: 'First signs of improvement typically at 5–10 weeks. Maximum clinical benefit observed at 3–6 months of continuous therapy, with benefit continuing to increase over 1–2 years in long-term use.' },
              ].map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col md:flex-row md:gap-8 pb-4 border-b border-sage/15"
                >
                  <dt className="font-body text-[0.72rem] font-medium tracking-[0.12em] uppercase text-charcoal w-32 flex-none mb-1 md:mb-0">
                    {item.term}
                  </dt>
                  <dd className="font-body text-sm text-muted leading-relaxed font-light">
                    {item.def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
                Clinical Evidence
              </span>
              <h2 className="font-display text-4xl font-light text-charcoal leading-tight max-w-xl">
                35+ years of randomised controlled evidence in women
              </h2>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {[
                { num: '7', label: 'Randomised Controlled Trials' },
                { num: '5/7', label: 'RCTs confirmed clear efficacy' },
                { num: '54%', label: 'Women with >50% GRA improvement (Ali et al, 2011)' },
                { num: '2,809', label: 'Patients in landmark open-label study, predominantly women (Hanno, 1997)' },
              ].map((s) => (
                <div key={s.num} className="bg-white p-6 border border-sage/20">
                  <div className="font-display text-4xl font-light text-sage-deep mb-2">{s.num}</div>
                  <div className="font-body text-[0.7rem] text-muted uppercase tracking-wide leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Key Studies */}
            <div className="space-y-4">
              {[
                {
                  author: 'Hanno PM (1997)',
                  n: '2,809 patients, predominantly women',
                  finding: '42–62% experienced moderate to significant symptom improvement. Response increased with duration — some patients reported benefit beyond 90 months of continuous use.',
                },
                {
                  author: 'Al-Zahrani & Gajewski (2011)',
                  n: '271 patients · 14-year follow-up',
                  finding: '54.2% of women reported >50% improvement on Global Response Assessment (GRA). Efficacy was higher in those who continued therapy beyond one year, and in patients with positive cystoscopic findings at baseline.',
                },
                {
                  author: 'von Ophoven et al (2019)',
                  n: 'Meta-analysis · 6 RCTs',
                  finding: '"Unequivocally concluded that oral PPS is efficacious compared to placebo in the treatment of bladder pain, urinary urgency, and frequency of micturition." Benefit was even greater in the cystoscopy-confirmed subgroup.',
                },
                {
                  author: 'Parsons & Mulholland (1987)',
                  n: '62 patients',
                  finding: 'Statistically significant improvement in subjective and objective parameters vs placebo. 80% of responders who restarted PPS after stopping had rapid return of symptom relief, confirming the drug\'s mechanism is reversible and reproducible.',
                },
                {
                  author: 'Nickel JC et al (2005)',
                  n: '380 patients · Dose-ranging study',
                  finding: '~49.6% classified as responders at 300mg/day. Response was related to duration of therapy, not dose. All three doses (300, 600, 900 mg/day) showed significant ICSI score improvement at 32 weeks.',
                },
              ].map((study) => (
                <div key={study.author} className="flex flex-col md:flex-row gap-6 bg-white p-8 border border-sage/20 hover:border-sage/40 transition-colors">
                  <div className="flex-none md:w-56">
                    <div className="font-display text-base font-light text-charcoal mb-1">{study.author}</div>
                    <div className="font-body text-[0.65rem] text-sage-deep uppercase tracking-wide">{study.n}</div>
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-sm text-muted leading-relaxed font-light">{study.finding}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-[0.68rem] text-muted/60 mt-8 leading-relaxed">
              Sources: Taneja R. Current status of oral pentosan polysulphate in bladder pain syndrome/interstitial cystitis. Int Urogynecol J. 2020. DOI 10.1007/s00192-020-04517-9. Studies referenced are peer-reviewed publications in indexed urology and urogynecology journals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

