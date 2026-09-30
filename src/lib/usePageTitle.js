import { useEffect } from "react"

const SITE = "Àṣà"

export function usePageTitle(page) {
  useEffect(() => {
    document.title = page
      ? `${page} — ${SITE}`
      : `${SITE} — Yorùbá heritage, kept and shared`
  }, [page])
}
