import AskBox from "./AskBox"

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="px-6 pb-20 pt-14 sm:pt-20 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta sm:tracking-[0.22em]">
          Yorùbá heritage, kept and shared
        </p>
        <h1
          id="hero-heading"
          className="mx-auto mt-5 max-w-[12em] text-balance text-[2.5rem] leading-[1.12] sm:text-5xl md:text-[3.25rem]"
        >
          What Yorùbá people have carried.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-body sm:text-lg">
          A library of Òrìṣà, proverbs, and festivals. Written for people at home,
          and for anyone meeting these names from far away.
        </p>
        <AskBox />
      </div>
    </section>
  )
}
