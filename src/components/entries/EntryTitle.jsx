function DiasporaNames({ names }) {
  return (
    <ul className="flex flex-wrap gap-x-1.5 gap-y-1">
      {names.map((item, index) => (
        <li key={`${item.spelling}-${item.place}`} className="inline">
          {index > 0 ? (
            <span aria-hidden="true" className="text-muted">
              {" "}
              ·{" "}
            </span>
          ) : null}
          <span>{item.spelling}</span>
          <span className="text-muted">, {item.place}</span>
        </li>
      ))}
    </ul>
  )
}

export default function EntryTitle({ entry, category }) {
  const longName = entry.name.length > 48
  const longPronunciation = entry.pronunciation.length > 48
  const facts = [
    entry.meaning ? { label: "Meaning", value: entry.meaning } : null,
    entry.romanized
      ? { label: "Romanized", value: entry.romanized, hint: "Without diacritics" }
      : null,
    entry.diasporaNames?.length
      ? { label: "Diaspora names", value: <DiasporaNames names={entry.diasporaNames} /> }
      : null,
  ].filter(Boolean)

  return (
    <>
      {category ? (
        <p
          lang={category.lang}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta"
        >
          {category.label}
        </p>
      ) : null}

      <header className={category ? "mt-3" : undefined}>
        <h1
          lang="yo"
          className={
            longName
              ? "text-balance text-3xl leading-snug sm:text-4xl"
              : "text-5xl leading-tight sm:text-6xl"
          }
        >
          {entry.name}
        </h1>
        <p
          className={`mt-3 text-sm text-muted ${longPronunciation ? "leading-relaxed" : "tracking-[0.12em]"}`}
        >
          <span className="sr-only">Pronounced </span>
          {entry.pronunciation}
        </p>
        <p className="mt-8 text-pretty font-serif text-xl leading-snug text-ink sm:text-2xl">
          {entry.quickSummary}
        </p>
      </header>

      {facts.length > 0 ? (
        <dl className="mt-10 border-t border-line">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6 sm:py-5"
            >
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {fact.label}
              </dt>
              <dd className="text-base leading-relaxed text-ink">
                {fact.value}
                {fact.hint ? (
                  <span className="mt-1 block text-sm text-muted">{fact.hint}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {entry.practitionerVariants?.length ? (
        <aside className="mt-12 border-l-2 border-gold bg-warm px-5 py-5 sm:px-6">
          <h2 className="text-xl leading-snug sm:text-2xl">
            How different practitioners spell and say this
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">
            Lineages, schools, and traditions spell and pronounce this name
            differently. Nigerian traditional practice, diaspora Ifá, and
            priesthoods such as Santería and Candomblé are all current. No
            single spelling is the correct one.
          </p>
          <ul className="mt-4 space-y-4">
            {entry.practitionerVariants.map((variant) => (
              <li key={variant.tradition}>
                <p className="text-sm font-medium text-ink">{variant.tradition}</p>
                <p className="mt-1 text-sm leading-relaxed text-body">{variant.note}</p>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </>
  )
}
