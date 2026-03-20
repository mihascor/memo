import { Link } from 'lib/transition'
import { buttonVariants } from '@/components/ui/button'
import { PageRoutes } from '@/lib/pageroutes'

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Памятка</h1>
      <p className="mb-8 max-w-150 text-foreground sm:text-base">
        Напишу описание.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: 'px-6', size: 'lg' })}
        >
          Вперёд
        </Link>
      </div>
    </section>
  )
}
