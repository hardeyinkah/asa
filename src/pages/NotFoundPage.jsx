import SimplePage from "../components/ui/SimplePage"
import TextLink from "../components/ui/TextLink"

export default function NotFoundPage() {
  return (
    <SimplePage title="This page is not in the archive">
      <p>The address does not match a page or an entry.</p>
      <p>
        <TextLink to="/">Return home</TextLink>
      </p>
    </SimplePage>
  )
}
