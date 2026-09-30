import { Link } from "react-router-dom"
import { getFeaturedEntries } from "../../data/entries"
import EntryCard from "../entries/EntryCard"

export default function FeaturedEntries() {
  const featured = getFeaturedEntries()
  if (featured.length === 0) return null

  return (
    <section aria-labelledby="featured-heading" className="px-6 pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="featured-heading" className="text-3xl">
            Featured entries
          </h2>
          <Link
            to="/explore"
            className="text-sm text-terracotta no-underline hover:underline"
          >
            Browse the library →
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry) => (
            <li key={entry.id} className="h-full">
              <EntryCard entry={entry} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
