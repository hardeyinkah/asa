import { syllableGuide } from "../../data/languageBasics"

const sentence = syllableGuide.sentenceExample

export default function SyllablePanel() {
  return (
    <section aria-labelledby="syllables" className="mt-16">
      <h2 id="syllables" className="text-3xl">
        How words are built
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-body">
        {syllableGuide.rule}
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {syllableGuide.examples.map((item) => (
          <li
            key={item.word}
            className="rounded-md border border-line bg-warm px-4 py-4"
          >
            <p lang="yo" className="font-serif text-2xl text-ink">
              {item.syllables.map((syllable, index) => (
                <span key={`${item.word}-${index}`}>
                  {index > 0 ? (
                    <span className="px-1 text-muted" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {syllable}
                </span>
              ))}
            </p>
            <p className="mt-2 text-sm text-body">{item.meaning}</p>
          </li>
        ))}
      </ul>

      <div className="mt-5 max-w-xl rounded-md border border-line bg-warm px-5 py-5">
        <p lang="yo" className="font-serif text-3xl text-ink">
          {sentence.yoruba}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-body">{sentence.meaning}</p>
        <p className="mt-1 text-sm text-muted">Literal: {sentence.literal}</p>
        <ul className="mt-4 space-y-2 border-t border-line pt-4">
          {sentence.breakdown.map((item) => (
            <li key={item.part} className="text-sm leading-relaxed text-body">
              <span lang="yo" className="font-serif text-lg text-ink">
                {item.part}
              </span>
              <span className="text-muted"> — </span>
              {item.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
