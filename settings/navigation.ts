import { PageRoutes } from '@/lib/pageroutes'

type NavigationItem = {
  title: string
  href: string
  external?: boolean
}

export const Navigations: NavigationItem[] = [
  {
    title: 'Главная',
    href: `/docs${PageRoutes[0].href}`,
  },
  // {
  //   title: 'Rubix',
  //   href: 'https://rubixstudios.com.au',
  //   external: true,
  // },
]

export const GitHubLink = {
  href: 'https://github.com/mihascor/memo',
}