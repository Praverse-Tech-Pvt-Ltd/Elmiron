import React from 'react'

interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-[0.72rem] font-medium tracking-[0.18em] uppercase text-sage-deep mb-3 ${className}`}
    >
      {children}
    </span>
  )
}

