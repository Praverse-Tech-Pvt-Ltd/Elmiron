import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'outline'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantStyles = {
  primary: 'bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep',
  ghost:   'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
  outline: 'border border-sage text-sage-deep hover:bg-sage-pale',
}

const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-body font-medium tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const cls = `${base} ${variantStyles[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}

