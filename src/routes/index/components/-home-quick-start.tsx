export const HomeQuickStart = () => {
  return (
    <section className="island-shell mt-8 rounded-2xl p-6">
      <p className="island-kicker mb-2">Quick Start</p>
      <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-(--sea-ink-soft)">
        <li>
          Edit <code>src/routes/index/-page.tsx</code> to customize the home page.
        </li>
        <li>
          Update <code>src/components/common/layout/header.tsx</code> and{' '}
          <code>src/components/common/layout/footer.tsx</code> for brand links.
        </li>
        <li>
          Add routes in <code>src/routes</code> and tweak visual tokens in{' '}
          <code>src/styles.css</code>.
        </li>
      </ul>
    </section>
  )
}
