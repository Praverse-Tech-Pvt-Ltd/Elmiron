import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sage' | 'charcoal' | 'outline'
  className?: string
}

const variants = {
  sage:     'bg-sage-pale text-sage-deep border border-sage/30',
  charcoal: 'bg-charcoal text-white',
  outline:  'border border-sage text-sage-deep',
}

export function Badge({ children, variant = 'sage', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

