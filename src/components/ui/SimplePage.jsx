import { usePageTitle } from "../../lib/usePageTitle"

export default function SimplePage({
  eyebrow,
  eyebrowLang,
  title,
  titleLang,
  children,
}) {
  usePageTitle(title)

  return (
    <article className="mx-auto max-w-xl px-6 py-16 md:py-20">
      {eyebrow ? (
        <p
          lang={eyebrowLang}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta"
        >
          {eyebrow}
        </p>
      ) : null}
      <h1 lang={titleLang} className="mt-3 text-4xl leading-tight sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-body">
        {children}
      </div>
    </article>
  )
}
