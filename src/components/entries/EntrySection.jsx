export default function EntrySection({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-pretty text-body">
        {children}
      </div>
    </section>
  )
}
