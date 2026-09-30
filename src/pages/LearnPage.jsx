import AlphabetPanel from "../components/learn/AlphabetPanel"
import NumbersPanel from "../components/learn/NumbersPanel"
import SyllablePanel from "../components/learn/SyllablePanel"
import TonePanel from "../components/learn/TonePanel"
import { usePageTitle } from "../lib/usePageTitle"

export default function LearnPage() {
  usePageTitle("Learn Yoruba")

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta">
        Language
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Learn Yoruba</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-body">
        Letters and tones, how a word is put together, then the numbers from
        one to one hundred.
      </p>
      <AlphabetPanel />
      <TonePanel />
      <SyllablePanel />
      <NumbersPanel />
    </section>
  )
}
