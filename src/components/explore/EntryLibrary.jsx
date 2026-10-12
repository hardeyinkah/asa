import { Link, useLocation } from "react-router-dom"
import { canonicalCategory, getEntriesByCategory } from "../../data/entries"
import { usePageTitle } from "../../lib/usePageTitle"
import EntryCard from "../entries/EntryCard"

const FILTERS = [
  { id: "all", label: "All", to: "/explore" },
  { id: "Orisha", label: "Òrìṣà", lang: "yo", to: "/explore?category=Orisha" },
  { id: "Proverb", label: "Proverbs", to: "/proverbs" },
  { id: "Story", label: "Stories", to: "/stories" },
]

function filterIsActive(filterId, category, pathname) {
  if (filterId === "Proverb") return category === "Proverb" || pathname === "/proverbs"
  if (filterId === "Story") return category === "Story" || pathname === "/stories"
  if (filterId === "all") return category === "all" && pathname === "/explore"
  return category === filterId
}

export default function EntryLibrary({
  category = "all",
  eyebrow,
  eyebrowLang,
  title,
  titleLang,
  intro,
}) {
  usePageTitle(title)
  const { pathname } = useLocation()
  const resolved = canonicalCategory(category)
  const list = getEntriesByCategory(resolved)

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      {eyebrow ? (
        <p
          lang={eyebrowLang}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta"
        >
          {eyebrow}
        </p>
      ) : null}
      <h1 lang={titleLang} className="mt-3 text-4xl leading-tight sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-body">{intro}</p>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {FILTERS.map((filter) => {
          const active = filterIsActive(filter.id, resolved, pathname)
          return (
            <Link
              key={filter.id}
              to={filter.to}
              lang={filter.lang}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "rounded-full bg-terracotta px-3.5 py-1.5 text-sm text-warm no-underline"
                  : "rounded-full border border-line bg-warm px-3.5 py-1.5 text-sm text-body no-underline transition-colors hover:border-[#C9B49A] hover:text-ink"
              }
            >
              {filter.label}
            </Link>
          )
        })}
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-body">Nothing is filed under this category yet.</p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((entry) => (
            <li key={entry.id} className="h-full">
              <EntryCard entry={entry} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
