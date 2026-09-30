import { yorubaNumber } from "../../data/languageBasics"

const table = Array.from({ length: 100 }, (_, index) => yorubaNumber(index + 1))

export default function NumbersPanel() {
  return (
    <section aria-labelledby="numbers" className="mt-16">
      <h2 id="numbers" className="text-3xl">
        Numbers
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-body">
        Counting runs by twenties. A number ending in 1–4 adds onto the ten
        below it. A number ending in 5–9 subtracts from the ten above it.
        Rows marked unverified follow that pattern, and the contracted spelling
        still needs a speaker to confirm it.
      </p>
      <div className="mt-8 max-w-xl overflow-hidden rounded-md border border-line bg-warm">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Yoruba numbers from 1 to 100</caption>
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="w-28 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
              >
                Number
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
              >
                Yoruba
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => (
              <tr key={item.value} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-4 py-3 align-top font-medium text-ink">
                  {item.value}
                </th>
                <td className="px-4 py-3">
                  {item.verified ? (
                    <span lang="yo" className="font-serif text-lg text-ink">
                      {item.yoruba}
                    </span>
                  ) : (
                    <span className="inline-flex flex-wrap items-center gap-2">
                      <span className="text-sm text-body">{item.yoruba}</span>
                      <span
                        title={item.note}
                        className="inline-flex rounded-full border border-line px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted"
                      >
                        Unverified
                        {item.note ? <span className="sr-only">. {item.note}</span> : null}
                      </span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
