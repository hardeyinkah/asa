import TextLink from "../ui/TextLink"

export default function EntryList({ entries }) {
  if (!entries.length) {
    return <p>Nothing is filed under this heading yet.</p>
  }

  return (
    <ul className="space-y-5">
      {entries.map((entry) => (
        <li key={entry.id}>
          <TextLink to={`/entries/${entry.id}`}>
            <span lang="yo">{entry.name}</span>
          </TextLink>
          <p className="mt-1 text-sm leading-relaxed">{entry.oneLiner}</p>
        </li>
      ))}
    </ul>
  )
}
