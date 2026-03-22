'use client'

import { useEffect, useRef, useState } from 'react'

type FallingTitleProps = {
  text: string
  className?: string
  onComplete?: () => void
}

export default function FallingTitle({
  text,
  className = '',
  onComplete,
}: FallingTitleProps) {
  const [started, setStarted] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const letters = text.split('')
  const lastIndex = letters.length - 1

  return (
    <h1 className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`relative inline-block ${started ? 'animate-fall' : 'opacity-0'}`}
          style={{
            animationDelay: `${index * 0.08}s`,
            animationFillMode: 'both',
          }}
          onAnimationEnd={() => {
            if (index === lastIndex && !completedRef.current) {
              completedRef.current = true
              onComplete?.()
            }
          }}
        >
          <span className="absolute left-[7px] -top-[5px] pointer-events-none text-primary opacity-40 blur-[0.5px]">
            {letter === ' ' ? '\u00A0' : letter}
          </span>

          <span className="relative">{letter === ' ' ? '\u00A0' : letter}</span>
        </span>
      ))}
    </h1>
  )
}