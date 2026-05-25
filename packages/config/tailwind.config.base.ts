import type { Config } from 'tailwindcss'

const config: Partial<Config> = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8aab8a',
          light:   '#b8cdb8',
          pale:    '#e8f0e8',
          deep:    '#4a7a4a',
        },
        cream:    '#f8f6f1',
        charcoal: '#2c2c2a',
        muted:    '#6b6b68',
        border:   'rgba(138,171,138,0.25)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'tag': ['0.72rem', { letterSpacing: '0.18em', fontWeight: '500' }],
      },
      borderColor: {
        DEFAULT: 'rgba(138,171,138,0.25)',
      },
      boxShadow: {
        'product': '20px 20px 60px rgba(74,122,74,0.12)',
        'card': '0 1px 3px rgba(44,44,42,0.06)',
      },
    },
  },
  plugins: [],
}

export default config

