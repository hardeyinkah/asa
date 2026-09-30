import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { scrollToId } from "../../lib/scrollToId"
import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

export default function RootLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const found = scrollToId(hash.slice(1))
      if (found && hash === "#ask") {
        document.getElementById("ask-input")?.focus({ preventScroll: true })
      }
      if (found) return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-warm focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
