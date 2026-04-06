const FEATURES = [
  ['Type-Safe Routing', 'Routes and links stay in sync across every page.'],
  ['Server Functions', 'Call server code from your UI without creating API boilerplate.'],
  ['Streaming by Default', 'Ship progressively rendered responses for faster experiences.'],
  ['Tailwind Native', 'Design quickly with utility-first styling and reusable tokens.'],
] as const

export const HomeFeatureGrid = () => {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map(([title, description], index) => (
        <article
          key={title}
          className="island-shell feature-card rise-in rounded-2xl p-5"
          style={{ animationDelay: `${index * 90 + 80}ms` }}
        >
          <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">{title}</h2>
          <p className="m-0 text-sm text-(--sea-ink-soft)">{description}</p>
        </article>
      ))}
    </section>
  )
}
