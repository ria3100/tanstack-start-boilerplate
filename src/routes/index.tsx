import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from './index/-page'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'TanStack Start Boilerplate',
      },
      {
        name: 'description',
        content:
          'Starter template for TanStack Start with routing, Tailwind CSS, testing, and reusable app structure.',
      },
    ],
  }),
  component: HomePage,
})
