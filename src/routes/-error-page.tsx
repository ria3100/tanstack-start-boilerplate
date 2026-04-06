export const RootErrorPage = ({ error }: { error: Error }) => {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <p className="island-kicker mb-3">Application error</p>
        <h1 className="display-title mb-4 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Something went wrong.
        </h1>
        <p className="mb-3 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          Reload the page or return home. If the issue persists, inspect the server or browser logs.
        </p>
        <pre className="overflow-x-auto rounded-2xl border border-(--line) bg-black/5 p-4 text-sm text-(--sea-ink-soft)">
          {error.message}
        </pre>
      </section>
    </main>
  )
}
