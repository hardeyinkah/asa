import Logo from "./Logo"

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-body">
            Yorùbá heritage, kept and shared.
          </p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          Compiled from published histories and studies. Where accounts disagree,
          the entry says so. Elders, priests, and the communities who keep these
          traditions remain the authorities.
        </p>
      </div>
    </footer>
  )
}
