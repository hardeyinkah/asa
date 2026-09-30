import CategoryStrip from "../components/home/CategoryStrip"
import FeaturedEntries from "../components/home/FeaturedEntries"
import Hero from "../components/home/Hero"
import { usePageTitle } from "../lib/usePageTitle"

export default function HomePage() {
  usePageTitle()

  return (
    <>
      <Hero />
      <FeaturedEntries />
      <CategoryStrip />
    </>
  )
}
