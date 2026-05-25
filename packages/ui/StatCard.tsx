import React from 'react'

interface StatCardProps {
  number: string
  label: string
  className?: string
}

export function StatCard({ number, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="font-display text-4xl font-light text-sage-deep leading-none mb-2">
        {number}
      </div>
      <div className="font-body text-[0.78rem] text-muted tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}

