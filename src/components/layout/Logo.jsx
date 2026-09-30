import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 no-underline">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] bg-terracotta font-serif text-[1.05rem] leading-none text-warm">
        <span className="translate-y-px" lang="yo">
          À
        </span>
      </span>
      <span
        lang="yo"
        className="font-serif text-[1.45rem] font-medium leading-none tracking-tight text-ink"
      >
        Àṣà
      </span>
    </Link>
  )
}
