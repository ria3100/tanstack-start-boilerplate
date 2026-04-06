import { createFileRoute } from '@tanstack/react-router'

import { AboutPage } from './-page'

export const Route = createFileRoute('/about/')({
  head: () => ({
    meta: [
      {
        title: 'About | TanStack Start Boilerplate',
      },
      {
        name: 'description',
        content: 'Overview of the TanStack Start boilerplate structure and intended usage.',
      },
    ],
  }),
  component: AboutPage,
})
