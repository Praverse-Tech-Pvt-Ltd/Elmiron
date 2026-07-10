import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DailyChecklist } from '@/components/care/DailyChecklist'

export const metadata: Metadata = {
  title: 'Elmiron Care — Patient Support Program',
  description:
    'Free resources for patients taking ELMIRON® for IC/BPS: diet guide, bladder diary, daily checklist, and a helpline that answers, six days a week.',
}

const resourceLinks = [
  { n: '01', href: '#education', label: 'IC/BPS Education' },
  { n: '02', href: '#diet', label: 'Printable Diet Guide' },
  { n: '03', href: '#diary', label: 'Bladder Diary' },
  { n: '04', href: '#living-well', label: 'Living Well with IC/BPS' },
  { n: '05', href: '#videos', label: 'Expert Videos' },
  { n: '06', href: '#support', label: 'Patient Support' },
]

const joinMethods = [
  { label: 'Call the helpline', value: '1800-209-4044 (toll-free)', href: 'tel:18002094044' },
  { label: 'Message on WhatsApp', value: '+91-72086 06158', href: 'https://wa.me/917208606158' },
  { label: 'Follow for updates', value: '@BeyondIC on Instagram', href: 'https://instagram.com/BeyondIC' },
]

const triggerFoods = [
  { group: 'Drinks', items: 'Coffee, strong tea, cola & soft drinks, energy drinks, alcohol' },
  { group: 'Fruits', items: 'Orange, mosambi, lemon, pineapple, grapes (in some people)' },
  { group: 'Vegetables', items: 'Tomatoes, tomato ketchup, tomato soup' },
  { group: 'Indian foods', items: 'Very spicy curries, green/red chilli, pickles (achar), vinegar-based foods, schezwan sauces, tamarind-heavy chutneys' },
  { group: 'Snacks & others', items: 'Chocolate, some artificial sweeteners, spicy packaged snacks, spicy instant noodles' },
]

const friendlyFoods = [
  { group: 'Grains', items: 'Rice, plain chapati/phulka, jowar & bajra roti, oats, dalia, idli, plain dosa, upma, poha' },
  { group: 'Vegetables', items: 'Lauki, turai, kaddu, petha, cucumber, carrot, beetroot, beans, cabbage, cauliflower, spinach (if tolerated)' },
  { group: 'Fruits', items: 'Pear, sweet apple, banana, papaya, watermelon, muskmelon' },
  { group: 'Protein', items: 'Dal & moong dal (if tolerated), chicken, fish, eggs, paneer, tofu' },
  { group: 'Dairy & snacks', items: 'Milk, curd (if tolerated), plain buttermilk, khakhra, roasted makhana, boiled corn, roasted chana' },
]

const livingWellTips = [
  { title: 'Take ELMIRON® as prescribed', body: "Don't stop without talking to your doctor. Improvement can take 3–6 months, sometimes longer — the bladder lining heals slowly, so keep going even before you feel a difference." },
  { title: 'Stay hydrated, sensibly', body: 'Sip water through the day rather than drinking a lot at once. Cutting back too much concentrates urine, which can irritate the bladder further.' },
  { title: 'Build healthy bladder habits', body: "Don't hold urine for long periods — empty your bladder when you feel the urge, and follow your doctor's advice on any bladder training." },
  { title: 'Stay active, gently', body: 'Low-impact activity — walking, swimming, gentle yoga, stretching — supports overall health. Ease off anything that worsens symptoms during a flare.' },
  { title: 'Manage stress on purpose', body: 'Stress can trigger flares. Deep breathing, meditation, yoga, a relaxing hobby, and enough sleep all help more than they might seem to.' },
  { title: 'Prevent constipation', body: 'A full bowel adds pressure on the bladder. Fibre-rich food (if tolerated), enough water, and staying active all help; ask your doctor if it persists.' },
  { title: 'Protect your sleep', body: 'Poor sleep can heighten pain sensitivity. Keep a regular sleep schedule, cut evening caffeine, and — if your doctor advises it — ease off fluids 2–3 hours before bed.' },
  { title: 'Dress for comfort', body: 'Loose-fitting clothes and breathable cotton underwear reduce pressure on the pelvic area.' },
  { title: 'If you smoke, plan to stop', body: 'Smoking can irritate the bladder and raises the risk of several bladder conditions. Ask your doctor about support to quit.' },
  { title: 'Track what changes', body: 'A bladder diary of fluids, frequency, pain and triggers helps your doctor personalise your treatment.' },
  { title: 'Keep every follow-up', body: 'Regular visits let your doctor monitor progress, adjust treatment, and catch concerns early.' },
]

const videos = [
  { title: 'What is IC/BPS?', body: "A urologist's plain-language walkthrough of symptoms, causes, and what a diagnosis does and doesn't mean." },
  { title: 'How ELMIRON® helps', body: 'What the medication does, why it takes months to show effect, and how to stay consistent.' },
  { title: 'Cooking bladder-friendly, Indian-style', body: 'A dietitian adapts everyday recipes to cut common triggers without losing flavour.' },
  { title: 'Ask a urologist — patient Q&A', body: 'Real questions from the helpline, answered on camera.' },
]

export default function ElmironCarePage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* ============ HERO ============ */}
        <section className="bg-sage-pale py-20 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(74,122,74,0.3) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="max-w-6xl mx-auto px-5 md:px-8 relative grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className="label-eyebrow shiny-text mb-4 block">Elmiron Care Program</span>
              <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-[1.05] mb-6">
                Support that goes<br />home with you.
              </h1>
              <p className="font-body text-base md:text-lg text-muted leading-relaxed font-light max-w-xl mb-8">
                Starting ELMIRON® is one step in a longer routine — diet, habits, tracking,
                patience. Elmiron Care is the free program that helps with the rest: guides, a
                bladder diary, a daily checklist, and people to call when you have a question.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#join"
                  className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide"
                >
                  Join the program
                </a>
                <a
                  href="#resources"
                  className="font-body text-sm px-6 py-3 border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide"
                >
                  See free resources
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-[0.72rem] tracking-wide uppercase text-sage-deep">
                <li>6 free resources</li>
                <li>Helpline, 6 days a week</li>
                <li>No cost to enrol</li>
              </ul>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-white p-7 border border-sage/25 w-full max-w-[300px] relative">
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-sage/50" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-sage/50" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-sage/50" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-sage/50" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-[0.62rem] tracking-[0.15em] uppercase text-sage-deep font-medium">
                    Patient Card
                  </span>
                  <span className="text-clay">♥</span>
                </div>
                <p className="font-display text-xl font-light text-charcoal mb-4">Join Elmiron Care</p>
                <div className="aspect-square w-full border border-sage/20 mb-4">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <rect width="100" height="100" fill="#f8f6f1" />
                    <g fill="#2c2c2a">
                      <rect x="6" y="6" width="24" height="24" /><rect x="12" y="12" width="12" height="12" fill="#f8f6f1" /><rect x="16" y="16" width="4" height="4" fill="#2c2c2a" />
                      <rect x="70" y="6" width="24" height="24" /><rect x="76" y="12" width="12" height="12" fill="#f8f6f1" /><rect x="80" y="16" width="4" height="4" fill="#2c2c2a" />
                      <rect x="6" y="70" width="24" height="24" /><rect x="12" y="76" width="12" height="12" fill="#f8f6f1" /><rect x="16" y="80" width="4" height="4" fill="#2c2c2a" />
                      <rect x="38" y="6" width="4" height="4" /><rect x="46" y="6" width="4" height="4" /><rect x="58" y="6" width="4" height="4" />
                      <rect x="38" y="14" width="4" height="4" /><rect x="50" y="14" width="4" height="4" /><rect x="62" y="14" width="4" height="4" />
                      <rect x="42" y="22" width="4" height="4" /><rect x="54" y="22" width="4" height="4" />
                      <rect x="38" y="30" width="4" height="4" /><rect x="46" y="30" width="4" height="4" /><rect x="58" y="30" width="4" height="4" /><rect x="66" y="30" width="4" height="4" />
                      <rect x="6" y="38" width="4" height="4" /><rect x="14" y="38" width="4" height="4" /><rect x="26" y="38" width="4" height="4" />
                      <rect x="38" y="38" width="12" height="12" /><rect x="54" y="38" width="4" height="4" /><rect x="62" y="38" width="4" height="4" /><rect x="70" y="38" width="4" height="4" /><rect x="82" y="38" width="4" height="4" /><rect x="90" y="38" width="4" height="4" />
                      <rect x="6" y="46" width="4" height="4" /><rect x="18" y="46" width="4" height="4" /><rect x="30" y="46" width="4" height="4" />
                      <rect x="58" y="46" width="4" height="4" /><rect x="74" y="46" width="4" height="4" /><rect x="86" y="46" width="4" height="4" />
                      <rect x="6" y="54" width="4" height="4" /><rect x="14" y="54" width="4" height="4" /><rect x="22" y="54" width="12" height="12" />
                      <rect x="42" y="54" width="4" height="4" /><rect x="50" y="54" width="4" height="4" /><rect x="66" y="54" width="4" height="4" /><rect x="78" y="54" width="4" height="4" /><rect x="90" y="54" width="4" height="4" />
                      <rect x="38" y="70" width="4" height="4" /><rect x="46" y="70" width="4" height="4" /><rect x="58" y="70" width="12" height="12" /><rect x="82" y="70" width="4" height="4" />
                      <rect x="38" y="78" width="4" height="4" /><rect x="50" y="78" width="4" height="4" /><rect x="90" y="78" width="4" height="4" />
                      <rect x="38" y="86" width="4" height="4" /><rect x="46" y="86" width="4" height="4" /><rect x="58" y="86" width="4" height="4" /><rect x="70" y="86" width="4" height="4" /><rect x="82" y="86" width="12" height="12" />
                    </g>
                  </svg>
                </div>
                <p className="font-body text-[0.72rem] text-muted leading-relaxed font-light">
                  This pattern appears on your ELMIRON® pack insert. Prefer a real person? Call or
                  WhatsApp us instead — see below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ JOIN STRIP ============ */}
        <section className="bg-cream py-16 md:py-20 section-divider" id="join">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="mb-10">
              <h2 className="font-display text-3xl font-light text-charcoal mb-2">
                Three ways to join — pick whichever is easiest
              </h2>
              <p className="font-body text-sm text-muted font-light max-w-xl">
                Enrolment is free and takes under a minute. You'll only be asked your name, phone
                number, and prescribing doctor.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {joinMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white p-6 border border-sage/20 hover:border-sage transition-colors duration-200 block"
                >
                  <p className="font-display text-lg font-light text-charcoal mb-1">{m.label}</p>
                  <p className="font-body text-sm text-sage-deep">{m.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RESOURCES INDEX ============ */}
        <section className="bg-sage-pale py-20 md:py-24 section-divider" id="resources">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <span className="label-eyebrow mb-3 block">Free Resources</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-4">
                Everything in your care folder
              </h2>
              <p className="font-body text-sm text-muted font-light max-w-md mx-auto">
                Six things, all included when you join Elmiron Care. Tap any tile to jump straight
                to it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/15">
              {resourceLinks.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="bg-sage-pale hover:bg-white p-7 transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-sage-deep/60">
                      {r.n}
                    </span>
                    <span className="font-body text-xs text-sage/40 group-hover:text-sage-deep group-hover:translate-x-0.5 transition-all duration-200">
                      →
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-light text-charcoal group-hover:text-sage-deep transition-colors duration-200">
                    {r.label}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 01 EDUCATION ============ */}
        <section className="bg-cream py-20 md:py-24 section-divider" id="education">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow mb-3 block">01 · IC/BPS Education</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight">
                Understanding IC/BPS, in plain language
              </h2>
            </div>
            <div>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed font-light mb-8">
                Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS) is a long-term condition of
                the bladder wall that causes recurring pain, pressure or discomfort in the bladder
                and pelvis, often together with a frequent or urgent need to urinate. It is not an
                infection, and it isn't caused by anything you did.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {[
                  { title: 'Who it affects', body: 'IC/BPS can affect anyone, but it is far more common in women, and is often first noticed between the late 20s and 40s. Symptoms and their severity vary a great deal from person to person.' },
                  { title: 'What it feels like', body: 'Pelvic or bladder pain that eases briefly after urinating, needing to go far more often than usual, waking at night to urinate, and discomfort that can flare with certain foods, stress, or hormonal changes.' },
                  { title: "Why it's manageable", body: 'There is no single cure, but most people find a workable combination of medication, diet and lifestyle changes that meaningfully reduces symptoms. It typically takes patience — improvement is measured in months, not days.' },
                  { title: 'Where ELMIRON® fits in', body: 'ELMIRON® (pentosan polysulfate sodium) is prescribed to help relieve bladder pain or discomfort associated with IC/BPS. Take it exactly as your doctor has prescribed — for full prescribing information, refer to the package insert or ask your pharmacist.' },
                ].map((f) => (
                  <div key={f.title} className="bg-white p-6 border border-sage/20">
                    <h3 className="font-display text-base font-light text-charcoal mb-2">{f.title}</h3>
                    <p className="font-body text-sm text-muted leading-relaxed font-light">{f.body}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-[0.78rem] text-muted/70 leading-relaxed border-t border-sage/15 pt-5">
                This section is a general introduction, not a diagnosis or a substitute for advice
                from your treating doctor. If anything here doesn't match what you've been told
                about your own condition, trust your doctor's guidance over this page.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 02 DIET GUIDE ============ */}
        <section className="bg-sage-pale py-20 md:py-24 section-divider" id="diet">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow mb-3 block">02 · Printable Diet Guide</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-5">
                Eat smart. Protect your bladder.
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">
                Certain foods and drinks can irritate the bladder and worsen pain, urgency or
                frequency. Triggers are personal — this guide, adapted for Indian kitchens, helps
                you find yours.
              </p>
              <a
                href="/downloads/IC-BPS-Diet-Guide.docx"
                download
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide inline-block"
              >
                Download the full diet guide ↓
              </a>
            </div>

            <div>
              <div className="bg-white p-6 md:p-7 border border-sage/20 mb-6">
                <h3 className="font-display text-lg font-light text-charcoal mb-3">
                  Step 1 — find your trigger foods
                </h3>
                <ol className="font-body text-sm text-muted leading-relaxed font-light space-y-1.5 list-decimal list-inside">
                  <li>Avoid common bladder irritants for 2 weeks.</li>
                  <li>Reintroduce one food every 2–3 days.</li>
                  <li>If symptoms worsen, that food may be a trigger.</li>
                  <li>Keep a food-and-symptom diary as you go — pairs well with the Bladder Diary below.</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-clay-pale p-6 border border-clay/20">
                  <h3 className="font-display text-base font-light text-clay-deep mb-3">
                    Foods that commonly trigger symptoms
                  </h3>
                  <dl className="space-y-2.5">
                    {triggerFoods.map((g) => (
                      <div key={g.group}>
                        <dt className="font-body text-[0.66rem] tracking-[0.1em] uppercase text-clay-deep/70 mb-0.5">{g.group}</dt>
                        <dd className="font-body text-[0.82rem] text-muted leading-snug font-light">{g.items}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="bg-sage-pale p-6 border border-sage/25">
                  <h3 className="font-display text-base font-light text-sage-deep mb-3">
                    Bladder-friendly Indian foods
                  </h3>
                  <dl className="space-y-2.5">
                    {friendlyFoods.map((g) => (
                      <div key={g.group}>
                        <dt className="font-body text-[0.66rem] tracking-[0.1em] uppercase text-sage-deep/70 mb-0.5">{g.group}</dt>
                        <dd className="font-body text-[0.82rem] text-muted leading-snug font-light">{g.items}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="bg-white p-6 md:p-7 border border-sage/20 mb-6">
                <h3 className="font-display text-lg font-light text-charcoal mb-3">Cooking tips</h3>
                <ul className="font-body text-sm text-muted leading-relaxed font-light space-y-1.5">
                  <li>· Reduce chilli powder and green chillies; limit garam masala if it triggers symptoms.</li>
                  <li>· Go easy on tomato purée; use fresh coriander instead of spicy sauces.</li>
                  <li>· Steam, boil, grill or lightly sauté instead of deep-frying.</li>
                  <li>· Favour fresh, home-cooked, mildly seasoned meals in smaller portions through the day.</li>
                </ul>
              </div>

              <details className="bg-white border border-sage/20 p-6 md:p-7 mb-6">
                <summary className="font-display text-base font-light text-charcoal cursor-pointer">
                  See a sample one-day IC-friendly meal plan
                </summary>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
                  {[
                    { label: 'Breakfast', body: 'Vegetable poha (no green chilli), glass of milk' },
                    { label: 'Mid-morning', body: 'Banana or papaya' },
                    { label: 'Lunch', body: '2 chapatis, lauki sabzi, moong dal, cucumber salad, plain curd (if tolerated)' },
                    { label: 'Evening snack', body: 'Roasted makhana, coconut water or plain water' },
                    { label: 'Dinner', body: 'Steamed rice, grilled fish/chicken or paneer, pumpkin or beans sabzi' },
                  ].map((m) => (
                    <div key={m.label}>
                      <h4 className="font-body text-[0.68rem] tracking-[0.1em] uppercase text-sage-deep mb-1">{m.label}</h4>
                      <p className="font-body text-[0.8rem] text-muted leading-snug font-light">{m.body}</p>
                    </div>
                  ))}
                </div>
              </details>

              <p className="font-body text-[0.78rem] text-muted/70 leading-relaxed border-t border-sage/15 pt-5">
                Every person with IC/BPS is different — a food that troubles one person may not
                affect another. Diet changes complement your treatment; they don't replace it.
                Keep taking ELMIRON® exactly as prescribed.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 03 BLADDER DIARY ============ */}
        <section className="bg-cream py-20 md:py-24 section-divider" id="diary">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow mb-3 block">03 · Bladder Diary</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-5">
                Three days of data says more than a month of memory
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">
                A bladder diary turns "it's been bad lately" into something your doctor can
                actually act on. Fill it in for 3 consecutive days and bring it to your next visit.
              </p>
              <a
                href="/downloads/ELMIRON-Bladder-Diary.docx"
                download
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors duration-200 tracking-wide inline-block mb-5"
              >
                Download the printable diary ↓
              </a>
              <p className="font-body text-[0.78rem] text-muted/70 leading-relaxed">
                Also available bilingually — Hindi instructions are included on the printed sheet.
                यह डायरी हिंदी निर्देशों के साथ भी उपलब्ध है।
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-light text-charcoal mb-3">How to fill it in</h3>
              <ul className="font-body text-sm text-muted leading-relaxed font-light space-y-1.5 mb-7">
                <li>· Record everything you drink through the day, and every time you pass urine.</li>
                <li>· Estimate or measure urine volume if you can.</li>
                <li>· Note urgency, pain and any leakage against each entry.</li>
                <li>· Keep to your normal routine — don't change habits just because you're tracking.</li>
              </ul>

              <div className="overflow-x-auto bg-white border border-sage/20 mb-7">
                <table className="w-full font-body text-[0.78rem] min-w-[520px]">
                  <thead>
                    <tr className="bg-sage-pale text-charcoal">
                      {['Time', 'Fluid intake', 'Urine output (mL)', 'Urgency 0–3', 'Pain 0–10', 'Leakage'].map((h) => (
                        <th key={h} className="text-left font-medium px-4 py-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-t border-sage/10">
                      <td className="px-4 py-3">7:40 am</td><td className="px-4 py-3">Water, 250 mL</td><td className="px-4 py-3">180</td><td className="px-4 py-3">1</td><td className="px-4 py-3">2</td><td className="px-4 py-3">—</td>
                    </tr>
                    <tr className="border-t border-sage/10">
                      <td className="px-4 py-3">11:15 am</td><td className="px-4 py-3">—</td><td className="px-4 py-3">150</td><td className="px-4 py-3">2</td><td className="px-4 py-3">4</td><td className="px-4 py-3">✓</td>
                    </tr>
                    <tr className="border-t border-sage/10">
                      <td colSpan={6} className="text-center italic text-muted/60 px-4 py-3">
                        + 3 days of rows on the printable sheet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
                <div className="bg-white p-5 border border-sage/20">
                  <h4 className="font-display text-base font-light text-charcoal mb-1.5">Urgency scale</h4>
                  <p className="font-body text-[0.8rem] text-muted font-light leading-relaxed">
                    <strong className="text-charcoal font-medium">0</strong> No urgency ·{' '}
                    <strong className="text-charcoal font-medium">1</strong> Mild, can wait ·{' '}
                    <strong className="text-charcoal font-medium">2</strong> Strong, need a toilet soon ·{' '}
                    <strong className="text-charcoal font-medium">3</strong> Unable to hold
                  </p>
                </div>
                <div className="bg-white p-5 border border-sage/20">
                  <h4 className="font-display text-base font-light text-charcoal mb-1.5">Pain scale</h4>
                  <p className="font-body text-[0.8rem] text-muted font-light leading-relaxed">
                    <strong className="text-charcoal font-medium">0</strong> No pain →{' '}
                    <strong className="text-charcoal font-medium">10</strong> Worst possible pain
                  </p>
                </div>
              </div>

              <p className="font-body text-[0.78rem] text-muted/70 leading-relaxed border-t border-sage/15 pt-5">
                Only to be shared with you and your healthcare provider. Bring the completed diary
                to every clinic visit — it helps your doctor monitor your response to ELMIRON®
                treatment.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 04 LIVING WELL ============ */}
        <section className="bg-sage-pale py-20 md:py-24 section-divider" id="living-well">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16 mb-12">
              <div>
                <span className="label-eyebrow mb-3 block">04 · Living Well with IC/BPS</span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-5">
                  Small, steady habits — not one big fix
                </h2>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">
                  Treatment works alongside daily habits. None of these need to be perfect;
                  consistency matters far more than intensity.
                </p>
                <a
                  href="/downloads/Living-Well-with-IC-BPS.docx"
                  download
                  className="font-body text-sm px-6 py-3 border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide inline-block"
                >
                  Download the full guide ↓
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {livingWellTips.map((tip) => (
                  <div key={tip.title} className="border-l-2 border-sage pl-4">
                    <h3 className="font-display text-base font-light text-charcoal mb-1">{tip.title}</h3>
                    <p className="font-body text-[0.84rem] text-muted leading-relaxed font-light">{tip.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <DailyChecklist />
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="bg-white p-6 md:p-7 border border-sage/20">
                <h3 className="font-display text-lg font-light text-sage-deep mb-3">During a flare</h3>
                <ul className="font-body text-sm text-muted leading-relaxed font-light space-y-1.5">
                  <li>✓ Drink water regularly and avoid your known trigger foods.</li>
                  <li>✓ Rest, and skip strenuous activity for a day or two.</li>
                  <li>✓ Use your relaxation techniques.</li>
                  <li>✓ Keep taking your medicines as prescribed.</li>
                  <li>✓ Contact your doctor if symptoms are severe or don't ease.</li>
                </ul>
              </div>
              <div className="bg-clay-pale p-6 md:p-7 border border-clay/30">
                <h3 className="font-display text-lg font-light text-clay-deep mb-3">
                  Seek medical attention immediately if you have
                </h3>
                <ul className="font-body text-sm text-muted leading-relaxed font-light space-y-1.5">
                  <li className="text-clay-deep">! Fever or chills</li>
                  <li className="text-clay-deep">! Blood in your urine</li>
                  <li className="text-clay-deep">! Inability to pass urine</li>
                  <li className="text-clay-deep">! Severe or worsening pain</li>
                  <li className="text-clay-deep">! Persistent vomiting</li>
                  <li className="text-clay-deep">! Any new or concerning symptom</li>
                </ul>
              </div>
            </div>

            <p className="font-display text-lg italic text-sage-deep text-center max-w-2xl mx-auto">
              IC/BPS is a chronic condition, but most people reach good symptom control with
              consistent treatment and self-care. Healing takes time — stay with it.
            </p>
          </div>
        </section>

        {/* ============ 05 EXPERT VIDEOS ============ */}
        <section className="bg-cream py-20 md:py-24 section-divider" id="videos">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="max-w-xl mb-10">
              <span className="label-eyebrow mb-3 block">05 · Expert Videos</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-4">
                Hear it explained, not just read it
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed font-light">
                Short videos from urologists and IC/BPS specialists, in the works for the Elmiron
                Care library. New topics are added regularly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              {videos.map((v) => (
                <div key={v.title} className="bg-white border border-sage/20">
                  <div className="relative aspect-video bg-charcoal flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full border border-white/50 bg-white/10 flex items-center justify-center text-white text-sm pl-0.5">
                      ▶
                    </span>
                    <span className="absolute top-3 right-3 bg-black/40 text-white font-body text-[0.62rem] tracking-[0.1em] uppercase px-3 py-1">
                      Coming soon
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-light text-charcoal mb-1.5">{v.title}</h3>
                    <p className="font-body text-[0.82rem] text-muted leading-relaxed font-light">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-[0.78rem] text-muted/70">
              Want a topic covered? Tell us on the{' '}
              <a href="#support" className="text-sage-deep hover:text-charcoal transition-colors">
                helpline or WhatsApp
              </a>{' '}
              and we'll add it to the list.
            </p>
          </div>
        </section>

        {/* ============ 06 PATIENT SUPPORT ============ */}
        <section className="bg-sage-pale py-20 md:py-24 section-divider" id="support">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16">
            <div>
              <span className="label-eyebrow mb-3 block">06 · Patient Support</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-5">
                Need help? We're a call away.
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed font-light">
                Questions about your medicine, your symptoms, or the program itself — our support
                team is trained to help, and will point you back to your doctor whenever that's the
                right next step.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 md:p-7 border border-sage/20">
                <h3 className="font-display text-lg font-light text-charcoal mb-4">What we can help with</h3>
                <ul className="font-body text-sm text-muted leading-relaxed font-light space-y-2">
                  <li>✓ Understanding how and when to take ELMIRON®</li>
                  <li>✓ Questions about the free resources on this page</li>
                  <li>✓ Enrolling in the Elmiron Care program</li>
                  <li>✓ Connecting you back to your prescribing doctor</li>
                  <li>✓ General guidance on diet and lifestyle habits</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-7 border border-sage/20">
                <h3 className="font-display text-lg font-light text-charcoal mb-4">Reach us</h3>
                <div className="space-y-3.5">
                  <a href="tel:18002094044" className="block border-b border-sage/12 pb-3.5">
                    <span className="font-body text-[0.68rem] tracking-[0.1em] uppercase text-sage-deep block mb-0.5">Toll-free helpline</span>
                    <span className="font-body text-sm text-charcoal">1800-209-4044</span>
                  </a>
                  <a href="https://wa.me/917208606158" target="_blank" rel="noopener noreferrer" className="block border-b border-sage/12 pb-3.5">
                    <span className="font-body text-[0.68rem] tracking-[0.1em] uppercase text-sage-deep block mb-0.5">WhatsApp support</span>
                    <span className="font-body text-sm text-charcoal">+91-72086 06158</span>
                  </a>
                  <a href="https://instagram.com/BeyondIC" target="_blank" rel="noopener noreferrer" className="block">
                    <span className="font-body text-[0.68rem] tracking-[0.1em] uppercase text-sage-deep block mb-0.5">Instagram</span>
                    <span className="font-body text-sm text-charcoal">@BeyondIC</span>
                  </a>
                </div>
                <p className="font-body text-[0.78rem] text-muted mt-5 pt-4 border-t border-sage/12">
                  <strong className="text-charcoal font-medium">Monday – Saturday</strong>, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PATIENT DISCLAIMER ============ */}
        <section className="bg-cream py-12">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="border border-sage/20 p-6 md:p-7">
              <p className="font-body text-[0.72rem] text-muted/80 leading-relaxed">
                <strong className="text-charcoal">For patients prescribed ELMIRON® (pentosan polysulfate sodium).</strong>{' '}
                This page is provided for general educational purposes and does not replace
                professional medical advice, diagnosis or treatment. Always take ELMIRON® exactly
                as prescribed, and consult your treating physician before making changes to your
                medication, diet or exercise routine. For complete prescribing information, refer
                to the package insert accompanying your medicine.
              </p>
              <p className="font-body text-[0.72rem] text-muted/80 leading-relaxed mt-3">
                If you believe you are experiencing a medical emergency, contact your doctor or
                nearest hospital immediately — do not wait for a callback from this program.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
