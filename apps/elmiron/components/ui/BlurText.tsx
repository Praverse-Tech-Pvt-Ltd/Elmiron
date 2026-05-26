'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'

type AnimTarget = Record<string, number | string>

function buildKeyframes(from: AnimTarget, steps: AnimTarget[]) {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))])
  const keyframes: Record<string, (number | string)[]> = {}
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])]
  })
  return keyframes
}

interface BlurTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  className?: string
  animateBy?: 'words' | 'chars'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  stepDuration?: number
}

export function BlurText({
  text = '',
  as: Tag = 'p',
  delay = 120,
  className = '',
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.1,
  rootMargin = '0px',
  stepDuration = 0.38,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const fromSnapshot: AnimTarget = direction === 'top'
    ? { filter: 'blur(8px)', opacity: 0, y: -24 }
    : { filter: 'blur(8px)', opacity: 0, y: 24 }

  const toSnapshots: AnimTarget[] = [
    { filter: 'blur(3px)', opacity: 0.5, y: direction === 'top' ? 4 : -4 },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ]

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) => i / (stepCount - 1))

  return (
    // @ts-ignore — polymorphic tag
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={fromSnapshot}
          animate={inView ? buildKeyframes(fromSnapshot, toSnapshots) : fromSnapshot}
          transition={{
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
            ease: 'easeOut',
          }}
        >
          {segment === ' ' ? ' ' : segment}
          {animateBy === 'words' && index < elements.length - 1 && ' '}
        </motion.span>
      ))}
    </Tag>
  )
}
