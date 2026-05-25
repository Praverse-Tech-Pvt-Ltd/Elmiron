import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  italic?: boolean
}

export function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
  italic = false,
}: SectionTitleProps) {
  return (
    <Tag
      className={`font-display font-light leading-tight text-charcoal ${italic ? 'italic' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

