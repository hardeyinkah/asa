import { Link } from "react-router-dom"
import { categories } from "../../data/categories"

export default function CategoryStrip() {
  return (
    <section className="border-t border-line bg-warm" aria-label="Browse by category">
      <ul className="mx-auto grid max-w-6xl sm:grid-cols-2">
        {categories.map((category, index) => {
          const borders = [
            "border-line",
            index > 0 ? "border-t" : "",
            index % 2 === 1 ? "sm:border-l" : "",
            index < 2 ? "sm:border-t-0" : "",
          ].join(" ")

          const body = (
            <>
              <h2 lang={category.lang} className="text-2xl">
                {category.label}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                {category.description}
              </p>
              {category.available ? (
                <span className="mt-6 text-sm text-terracotta">Open →</span>
              ) : (
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  Coming soon
                </p>
              )}
            </>
          )

          if (!category.available) {
            return (
              <li key={category.id} className={`${borders} opacity-60`}>
                <div className="flex h-full flex-col px-6 py-8 md:px-8" aria-disabled="true">
                  {body}
                </div>
              </li>
            )
          }

          return (
            <li key={category.id} className={borders}>
              <Link
                to={category.href}
                className="flex h-full flex-col px-6 py-8 no-underline transition-colors hover:bg-cream md:px-8"
              >
                {body}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
