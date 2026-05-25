import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { MistAcronym } from '@/components/MistAcronym'
import { SymptomsGrid } from '@/components/SymptomsGrid'
import { ProductCTA } from '@/components/ProductCTA'
import { RoundTableEvent } from '@/components/RoundTableEvent'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MistAcronym />
        <SymptomsGrid />
        <ProductCTA />
        <RoundTableEvent />
      </main>
      <Footer />
    </>
  )
}

