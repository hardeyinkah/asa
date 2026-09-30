import { useSearchParams } from "react-router-dom"
import EntryLibrary from "../components/explore/EntryLibrary"
import { getCategory } from "../data/categories"
import { canonicalCategory } from "../data/entries"

export default function ExplorePage() {
  const [params] = useSearchParams()
  const category = canonicalCategory(params.get("category"))
  const meta = category === "all" ? undefined : getCategory(category)

  return (
    <EntryLibrary
      category={category}
      eyebrow="Library"
      title={meta?.label ?? "Explore the archive"}
      titleLang={meta?.lang}
      intro="Òrìṣà and proverbs filed so far. Choose a category, or open any record."
    />
  )
}
