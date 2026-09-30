import { alphabet } from "../../data/languageBasics"

export default function AlphabetPanel() {
  return (
    <section aria-labelledby="alphabet" className="mt-14">
      <h2 id="alphabet" className="text-3xl">
        Alphabet
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-body">
        Twenty-five letters of the Nigerian orthography. Yoruba does not use
        C, Q, V, X, or Z. The sound on each card is a guide for English speakers.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {alphabet.map((item) => (
          <li
            key={item.letter}
            className="rounded-md border border-line bg-warm px-4 py-4"
          >
            <p lang="yo" className="font-serif text-3xl text-ink">
              {item.letter}
            </p>
            <p lang="yo" className="mt-2 font-serif text-lg text-ink">
              {item.sound}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-body">{item.example}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
