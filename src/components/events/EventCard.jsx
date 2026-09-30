export default function EventCard({ event }) {
  const hasMore =
    event.overview ||
    event.significance ||
    event.details?.length ||
    event.sources?.length ||
    event.accountsVary

  return (
    <article
      id={event.id}
      className="flex h-full scroll-mt-24 flex-col rounded-md border border-line bg-warm px-5 py-5"
    >
      <h2 lang="yo" className="text-2xl leading-snug">
        {event.name}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink">{event.location}</p>
      <p className="mt-3">
        <span className="inline-flex rounded-full border border-gold bg-[#F8EED8] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[#7A5A16]">
          {event.status}
        </span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{event.period}</p>
      <p className="mt-3 text-sm leading-relaxed text-body">{event.quickSummary}</p>

      {hasMore ? (
        <details className="group mt-4 border-t border-line pt-3">
          <summary className="cursor-pointer text-sm text-terracotta marker:text-terracotta">
            Overview, significance, and details
          </summary>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-pretty text-body">
            {event.overview ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Overview
                </p>
                <p className="mt-2">{event.overview}</p>
              </div>
            ) : null}
            {event.significance ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Significance
                </p>
                <p className="mt-2">{event.significance}</p>
              </div>
            ) : null}
            {event.details?.length ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Details
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {event.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {event.sources?.length ? (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Sources
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {event.sources.map((source) => (
                    <li key={source}>{source}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {event.accountsVary ? (
              <p className="border-l-2 border-gold pl-4">
                <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
                  Accounts vary
                </span>
                {event.accountsVary}
              </p>
            ) : null}
          </div>
        </details>
      ) : null}
    </article>
  )
}
