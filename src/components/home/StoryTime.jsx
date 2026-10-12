import { Link } from "react-router-dom"
import { getEntriesByCategory } from "../../data/entries"

export default function StoryTime() {
  const stories = getEntriesByCategory("Story")
  if (stories.length === 0) return null

  return (
    <section aria-labelledby="story-time-heading" className="border-t border-line px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="story-time-heading" className="text-3xl">
            Story Time
          </h2>
          <Link to="/stories" className="text-sm text-terracotta no-underline hover:underline">
            All the tellings →
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <li key={story.id} className="h-full">
              <Link
                to={`/entries/${story.id}`}
                className="flex h-full flex-col rounded-md border border-line bg-warm px-5 py-5 no-underline transition-colors hover:border-[#D9CBB6]"
              >
                <h3 lang="yo" className="text-2xl leading-snug text-ink">
                  {story.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{story.oneLiner}</p>
                <span className="mt-4 text-sm text-terracotta">Read →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
