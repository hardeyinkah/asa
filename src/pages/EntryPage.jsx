import { useParams } from "react-router-dom"
import EntryBody from "../components/entries/EntryBody"
import EntryTitle from "../components/entries/EntryTitle"
import SimplePage from "../components/ui/SimplePage"
import TextLink from "../components/ui/TextLink"
import { getCategory } from "../data/categories"
import { getEntry } from "../data/entries"
import { usePageTitle } from "../lib/usePageTitle"

export default function EntryPage() {
  const { id } = useParams()
  const entry = getEntry(id)

  usePageTitle(entry ? entry.name : "Not in the archive")

  if (!entry) {
    return (
      <SimplePage title="Not in the archive">
        <p>No record matches this address.</p>
        <p>
          <TextLink to="/">Return home</TextLink>
        </p>
      </SimplePage>
    )
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-14 md:py-20">
      <EntryTitle entry={entry} category={getCategory(entry.category)} />
      <EntryBody entry={entry} />
    </article>
  )
}
