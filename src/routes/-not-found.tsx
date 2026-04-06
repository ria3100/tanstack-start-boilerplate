import { Link } from '@tanstack/react-router'

export const RootNotFoundPage = () => {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <p className="island-kicker mb-3">404</p>
        <h1 className="display-title mb-4 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Page not found.
        </h1>
        <p className="mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          The page you requested does not exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
        >
          Back to home
        </Link>
      </section>
    </main>
  )
}
