import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { MechanismGrid } from '@/components/MechanismGrid'
import { FormulationCards } from '@/components/FormulationCards'
import { IndicationsGrid } from '@/components/IndicationsGrid'
import { StatGrid } from '@/components/StatGrid'
import { InitiativeSection } from '@/components/InitiativeSection'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatGrid />
        <MechanismGrid />
        <FormulationCards />
        <IndicationsGrid />
        <InitiativeSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

