import { toneExample, tones } from "../../data/languageBasics"

export default function TonePanel() {
  return (
    <section aria-labelledby="tones" className="mt-16">
      <h2 id="tones" className="text-3xl">
        Tones
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-body">
        The same letters with a different pitch are different words. Yoruba
        writes three tones.
      </p>

      <div className="mt-8 rounded-md border border-line bg-warm px-5 py-5 md:px-6">
        <ul className="grid gap-6 sm:grid-cols-3">
          {tones.map((item) => (
            <li key={item.tone}>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
                {item.tone}
              </p>
              <p lang="yo" className="mt-2 font-serif text-xl leading-snug text-ink">
                {item.mark}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-line pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            {toneExample.word}
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {toneExample.breakdown.map((item) => (
              <li
                key={item.spelling}
                className="rounded-md border border-line bg-cream px-4 py-4"
              >
                <p lang="yo" className="font-serif text-3xl text-ink">
                  {item.spelling}
                </p>
                <p className="mt-1 text-sm text-body">{item.meaning}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body">{toneExample.note}</p>
        </div>
      </div>
    </section>
  )
}
