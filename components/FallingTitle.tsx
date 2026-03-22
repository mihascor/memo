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
        // <span
        //   key={index}
        //   className={`inline-block ${started ? 'animate-fall' : 'opacity-0'}`}
        //   style={{
        //     animationDelay: `${index * 0.08}s`,
        //     animationFillMode: 'both',
        //   }}
        // >
        //   {letter === ' ' ? '\u00A0' : letter}
        // </span>
        <span
          key={index}
          className={`relative inline-block ${started ? 'animate-fall' : 'opacity-0'}`}
          style={{
            animationDelay: `${index * 0.08}s`,
            animationFillMode: 'both',
          }}
        >
          {/* тень */}
          <span
            // className="absolute left-[7px] -top-[5px] opacity-30 pointer-events-none text-primary"
            className="absolute left-[7px] -top-[5px] opacity-40 pointer-events-none text-primary blur-[0.5px]"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>

          {/* основная буква */}
          <span className="relative">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        </span>
      ))}
    </h1>
  )
}