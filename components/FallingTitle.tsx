'use client'

import { useEffect, useState } from 'react'

type FallingTitleProps = {
  text: string
  className?: string
}

export default function FallingTitle({ text, className = '' }: FallingTitleProps) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <h1 className={className} aria-label={text}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${started ? 'animate-fall' : 'opacity-0'}`}
          style={{
            animationDelay: `${index * 0.08}s`,
            animationFillMode: 'both',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  )
}