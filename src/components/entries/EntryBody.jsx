import { Link } from "react-router-dom"
import { getEntry } from "../../data/entries"
import EntrySection from "./EntrySection"

function FamilyCard({ person }) {
  const linked = person.id ? getEntry(person.id) : undefined
  const body = (
    <>
      <p lang="yo" className="font-serif text-xl text-ink">
        {person.name}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-body">{person.relation}</p>
    </>
  )

  if (!linked) {
    return <div className="h-full rounded-md border border-line px-4 py-4">{body}</div>
  }

  return (
    <Link
      to={`/entries/${person.id}`}
      className="block h-full rounded-md border border-line bg-warm px-4 py-4 no-underline transition-colors hover:border-[#D9CBB6]"
    >
      {body}
    </Link>
  )
}

export default function EntryBody({ entry }) {
  return (
    <>
      {entry.overview ? (
        <EntrySection id="overview" title="Overview">
          <p>{entry.overview}</p>
        </EntrySection>
      ) : null}

      {entry.symbols?.length ? (
        <EntrySection id="symbols" title="Symbols and associations">
          <ul className="flex flex-wrap gap-2">
            {entry.symbols.map((symbol) => (
              <li
                key={symbol}
                className="rounded-full border border-line bg-warm px-3 py-1.5 text-sm text-ink"
              >
                {symbol}
              </li>
            ))}
          </ul>
        </EntrySection>
      ) : null}

      {entry.story ? (
        <EntrySection id="story" title="Story">
          {entry.story.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </EntrySection>
      ) : null}

      {entry.contextOfUse ? (
        <EntrySection id="context" title="When it is said">
          <p>{entry.contextOfUse}</p>
        </EntrySection>
      ) : null}

      {entry.family?.length ? (
        <EntrySection id="family" title="Family and relationships">
          <ul className="grid gap-3 sm:grid-cols-2">
            {entry.family.map((person) => (
              <li key={`${person.name}-${person.relation}`} className="h-full">
                <FamilyCard person={person} />
              </li>
            ))}
          </ul>
        </EntrySection>
      ) : null}

      {entry.diasporaConnections ? (
        <EntrySection id="diaspora" title="Diaspora connections">
          <p>{entry.diasporaConnections}</p>
        </EntrySection>
      ) : null}

      {entry.sources?.length || entry.accountsVary ? (
        <EntrySection id="sources" title="Sources and notes">
          {entry.sources?.length ? (
            <ul className="list-disc space-y-2 pl-5">
              {entry.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          ) : null}
          {entry.accountsVary ? (
            <p className="border-l-2 border-gold pl-4">
              <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
                Accounts vary
              </span>
              {entry.accountsVary}
            </p>
          ) : null}
        </EntrySection>
      ) : null}

      <section
        aria-labelledby="contributions"
        className="mt-12 rounded-md border border-dashed border-line bg-warm px-5 py-6"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Unverified
        </p>
        <h2 id="contributions" className="mt-2 text-2xl">
          Contributed knowledge
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Oral tradition and notes sent in by readers will be kept here, apart
          from the researched record above. Nothing has been submitted for this
          entry.
        </p>
      </section>
    </>
  )
}
