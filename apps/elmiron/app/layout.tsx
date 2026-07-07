import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Italiana } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Elmiron for Women',
    template: '%s | Elmiron for Women',
  },
  description:
    'Elmiron for women with Interstitial Cystitis / Bladder Pain Syndrome — the only FDA-approved oral drug for a condition that affects women at 5-10x the rate of men. Pentosan Polysulfate Sodium 100mg.',
  keywords: [
    'elmiron for women',
    'elmiron',
    'pentosan polysulfate sodium',
    'interstitial cystitis in women',
    'IC BPS treatment for women',
    'women bladder pain',
    'female pelvic pain treatment',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://elmiron.in',
    siteName: 'Elmiron for Women',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${italiana.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

