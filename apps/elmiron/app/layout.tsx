import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
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

export const metadata: Metadata = {
  title: {
    default: 'Elmiron',
    template: '%s | Elmiron',
  },
  description:
    'The only FDA-approved oral drug for Interstitial Cystitis / Bladder Pain Syndrome. Pentosan Polysulfate Sodium 100mg .',
  keywords: [
    'elmiron',
    'pentosan polysulfate sodium',
    'interstitial cystitis',
    'IC BPS treatment',
    'bladder pain',
    
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://elmiron.in',
    siteName: 'Elmiron',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {/* Pharmaceutical disclaimer bar */}
        <div className="disclaimer-bar">
          For healthcare professionals only. Prescription drug. Please read prescribing information before use.
        </div>
        {children}
      </body>
    </html>
  )
}

