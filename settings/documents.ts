import { Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: '',
    title: 'Вводная часть',
    href: '/introduction',
    items: [
      {
        title: 'Installation',
        href: '/installation',
      },
      {
        title: 'Setup',
        href: '/setup',
      },
      {
        title: 'Changelog',
        href: '/changelog',
      },
    ],
  },
  {
    spacer: true,
  },
  // {
  //   title: 'Navigation',
  //   href: '/navigation',
  //   heading: 'Главы',
  // },
  {
    heading: 'Главы',
    title: 'Structure',
    href: '/structure',
    items: [
      {
        title: 'Deep',
        href: '/deep',
        items: [
          {
            title: 'Deeper',
            href: '/deeper',
            items: [
              {
                title: 'Even deeper',
                href: '/even-deeper',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: 'Markdown',
    href: '/markdown',
    heading: 'Components',
    items: [
      {
        title: 'Cards',
        href: '/cards',
      },
      {
        title: 'Diagrams',
        href: '/diagrams',
      },
      {
        title: 'Filetree',
        href: '/filetree',
      },
      {
        title: 'Lists',
        href: '/lists',
      },
      {
        title: 'Maths',
        href: '/maths',
      },
      {
        title: 'Notes',
        href: '/notes',
      },
      {
        title: 'Steps',
        href: '/steps',
      },
      {
        title: 'Table',
        href: '/table',
      },
      {
        title: 'Tabs',
        href: '/tabs',
      },
    ],
  },
]
