import { Link } from 'lib/transition'
import { Fragment } from 'react'
import { LuHouse } from 'react-icons/lu'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { PageRoutes } from '@/lib/pageroutes'
import { toTitleCase } from '@/utils/toTitleCase'

const breadcrumbLabels: Record<string, string> = {
  // Примеры. Потом заменишь на свои папки и свои русские названия.
  'introduction': 'Вводная часть',
  'setup': 'Установка',
  'nastroika': 'Настройка',
  'struktura-saita': 'Структура сайта',
}
const getBreadcrumbLabel = (path: string) => breadcrumbLabels[path] || toTitleCase(path)

export function ArticleBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                title="Домой"
                aria-label="Домой"
                href={`/docs${PageRoutes[0].href}`}
              >
                <LuHouse className="h-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {paths.length > 2 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    title={getBreadcrumbLabel(paths[0])}
                    aria-label={getBreadcrumbLabel(paths[0])}
                    href={`/docs/${paths[0]}`}
                  >
                    {getBreadcrumbLabel(paths[0])}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis className="h-1" />
              </BreadcrumbItem>

              {paths.slice(-1).map((path, i) => {
                const index = paths.length - 1 + i
                const href = `/docs/${paths.slice(0, index + 1).join('/')}`

                return (
                  <Fragment key={path}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index < paths.length - 1 ? (
                        <BreadcrumbLink asChild>
                          <Link
                            title={getBreadcrumbLabel(path)}
                            aria-label={getBreadcrumbLabel(path)}
                            href={href}
                          >
                            {getBreadcrumbLabel(path)}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="b">{getBreadcrumbLabel(path)}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                )
              })}
            </>
          ) : (
            paths.map((path, index) => {
              const href = `/docs/${paths.slice(0, index + 1).join('/')}`

              return (
                <Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link
                          title={getBreadcrumbLabel(path)}
                          aria-label={getBreadcrumbLabel(path)}
                          href={href}
                        >
                          {getBreadcrumbLabel(path)}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="b">{getBreadcrumbLabel(path)}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
