import { Link } from 'lib/transition'
import { buttonVariants } from '@/components/ui/button'
import { PageRoutes } from '@/lib/pageroutes'
import FallingTitle from '@/components/FallingTitle'

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      {/* <h1 className="mb-4 text-4xl font-bold sm:text-7xl">ПАМЯТКА</h1> */}
      <FallingTitle text="ПАМЯТКА" className="mb-4 text-4xl font-bold sm:text-7xl" />
      <p className="mb-8 max-w-150 text-foreground sm:text-base animate-fade-soft">
        Инструкция для проживающих на планете Земля. Небольшие хитрости для оптимального обустройства и комфорта.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: 'px-6 animate-rise-in' , size: 'lg' })}
        >
          Начало
        </Link>
      </div>
    </section>
  )
}
