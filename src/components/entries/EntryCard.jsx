import { Link } from "react-router-dom"
import { getCategory } from "../../data/categories"

const HEADER_FILL = {
  terracotta: "linear-gradient(165deg, #C4623C 0%, #8C3A22 100%)",
  gold: "linear-gradient(165deg, #E0B15A 0%, #A56F1C 100%)",
  olive: "linear-gradient(165deg, #748564 0%, #3E4C34 100%)",
}

const ACCENT_BY_ID = {
  sango: "terracotta",
  obatala: "gold",
  orunmila: "olive",
  yemoja: "terracotta",
  ogun: "olive",
  osun: "gold",
  esu: "terracotta",
  "owo-omode-ko-to-pepe": "olive",
}

function cardDescription(entry) {
  const spellings = (entry.diasporaNames ?? []).map((item) => item.spelling.split(" / ")[0])
  if (spellings.length === 0) return entry.oneLiner
  return `${entry.oneLiner.replace(/\.$/, "")} — ${spellings.join(", ")}.`
}

export default function EntryCard({ entry }) {
  const category = getCategory(entry.category)
  const accent = ACCENT_BY_ID[entry.id] ?? "terracotta"
  const longName = entry.name.length > 48

  return (
    <Link
      to={`/entries/${entry.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-warm no-underline transition-colors hover:border-[#D9CBB6]"
    >
      <div
        className="relative h-32 overflow-hidden px-5 pt-4"
        style={{ background: HEADER_FILL[accent] }}
      >
        <span className="relative z-10 inline-flex rounded-full bg-warm px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
          <span lang={category?.lang}>{category?.label ?? entry.category}</span>
        </span>
        <span
          aria-hidden="true"
          lang="yo"
          className="pointer-events-none absolute bottom-1 right-4 select-none font-serif text-6xl leading-none text-white/30"
        >
          {entry.name.charAt(0)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3
          lang="yo"
          className={`text-ink transition-colors group-hover:text-terracotta ${longName ? "text-xl leading-snug" : "text-2xl"}`}
        >
          {entry.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{cardDescription(entry)}</p>
      </div>
    </Link>
  )
}
