import EventCard from "../components/events/EventCard"
import { events } from "../data/events"
import { usePageTitle } from "../lib/usePageTitle"

export default function EventsPage() {
  usePageTitle("Festivals and visits")

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta">
        Festivals
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Festivals and visits</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-body">
        Dates are not fixed in advance. Each record gives the usual timing, and
        says so when a date is still unconfirmed.
      </p>

      {events.length === 0 ? (
        <p className="mt-10 text-body">No festivals are filed yet.</p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {events.map((event) => (
            <li key={event.id} className="h-full">
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
