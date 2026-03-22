'use client'

import { useEffect, useState } from 'react'
import { Link } from 'lib/transition'
import { buttonVariants } from '@/components/ui/button'
import { PageRoutes } from '@/lib/pageroutes'
import FallingTitle from '@/components/FallingTitle'

export default function Home() {
  const [titleDone, setTitleDone] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (!titleDone) return

    const descriptionTimer = setTimeout(() => {
      setShowDescription(true)
    }, 120)

    const buttonTimer = setTimeout(() => {
      setShowButton(true)
    }, 420)

    return () => {
      clearTimeout(descriptionTimer)
      clearTimeout(buttonTimer)
    }
  }, [titleDone])

  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <FallingTitle
        text="ПАМЯТКА"
        className="mb-4 text-4xl font-bold sm:text-7xl"
        onComplete={() => setTitleDone(true)}
      />

      <p
        className={`mb-8 max-w-150 text-foreground sm:text-base ${
          showDescription ? 'animate-fade-soft' : 'opacity-0'
        }`}
      >
        Инструкция для проживающих на планете Земля. Небольшие хитрости для оптимального обустройства и комфорта.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({
            className: `px-6 ${showButton ? 'animate-rise-in' : 'opacity-0'}`,
            size: 'lg',
          })}
        >
          Начало
        </Link>
      </div>
    </section>
  )
}