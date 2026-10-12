import { Link, NavLink, useLocation } from "react-router-dom"
import { scrollToId } from "../../lib/scrollToId"
import Logo from "./Logo"

const NAV = [
  { to: "/explore", label: "Explore" },
  { to: "/proverbs", label: "Proverbs" },
  { to: "/stories", label: "Stories" },
  { to: "/events", label: "Events" },
  { to: "/learn", label: "Learn Yoruba" },
  { to: "/about", label: "About" },
]

function linkClass(isActive) {
  return [
    "text-sm no-underline transition-colors",
    isActive
      ? "text-ink underline decoration-terracotta decoration-1 underline-offset-[6px]"
      : "text-body hover:text-ink",
  ].join(" ")
}

function NavLinks({ className }) {
  return (
    <ul className={className}>
      {NAV.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} className={({ isActive }) => linkClass(isActive)}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

function AskButton() {
  const location = useLocation()

  function handleClick(event) {
    if (location.pathname !== "/") return
    event.preventDefault()
    scrollToId("ask")
    document.getElementById("ask-input")?.focus({ preventScroll: true })
  }

  return (
    <Link
      to="/#ask"
      onClick={handleClick}
      className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-terracotta px-4 py-2 text-sm text-warm no-underline transition-colors hover:bg-terracotta-dark"
    >
      Ask a question
    </Link>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream">
      <div className="mx-auto hidden h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 md:grid">
        <Logo />
        <nav aria-label="Primary">
          <NavLinks className="flex items-center gap-5 lg:gap-7" />
        </nav>
        <div className="justify-self-end">
          <AskButton />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:hidden">
        <Logo />
        <AskButton />
      </div>
      <nav aria-label="Primary" className="md:hidden">
        <NavLinks className="flex flex-wrap gap-x-4 gap-y-2 px-6 pb-3" />
      </nav>
    </header>
  )
}
