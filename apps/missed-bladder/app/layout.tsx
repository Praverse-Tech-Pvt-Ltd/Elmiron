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
    default: "Missed Bladder Disease | Women's Bladder Health",
    template: "%s | Missed Bladder Disease",
  },
  description:
    "Understanding IC/BPS and overlooked bladder conditions in women. Led by Dr. Sanjay Pandey in collaboration with .",
  keywords: [
    'missed bladder disease',
    'interstitial cystitis women',
    'bladder pain syndrome',
    'IC BPS India',
    'Dr Sanjay Pandey',
    'bladder health',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://missedbladder.com',
    siteName: 'Missed Bladder Disease',
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
        <div className="disclaimer-bar">
          For healthcare professionals only. Educational resource. Not a substitute for clinical judgment.
        </div>
        {children}
      </body>
    </html>
  )
}

