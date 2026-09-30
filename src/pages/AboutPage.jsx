import SimplePage from "../components/ui/SimplePage"

export default function AboutPage() {
  return (
    <SimplePage eyebrow="About" title="Why this archive exists">
      <p>
        Àṣà is a reading archive of Yorùbá culture. It is a portfolio project,
        and it is also a place meant to be read. This page will say who is
        making it, and who it is for.
      </p>
      <section className="rounded-md border border-dashed border-line bg-warm px-5 py-6">
        <h2 className="text-2xl">In my own words</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Reserved for a first-person account of who is building Àṣà, and why.
        </p>
      </section>
      <section className="rounded-md border border-dashed border-line bg-warm px-5 py-6">
        <h2 className="text-2xl">Build in public</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Episodes from the video series will be linked here as they are published.
        </p>
      </section>
    </SimplePage>
  )
}
