import { useState } from "react"

const SUGGESTIONS = ["What is Ìwà?", "Festivals this month", "Ṣàngó in Brazil"]

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AskBox() {
  const [query, setQuery] = useState("")
  const [noted, setNoted] = useState("")

  function note(value) {
    const trimmed = value.trim()
    if (!trimmed) return
    console.log("Àṣà question:", trimmed)
    setNoted(trimmed)
    setQuery("")
  }

  function handleSubmit(event) {
    event.preventDefault()
    note(query)
  }

  return (
    <div id="ask" className="mx-auto mt-10 w-full max-w-xl scroll-mt-28">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-2xl border border-line bg-white p-1.5 pl-4 transition-colors focus-within:border-[#C9B49A] sm:pl-5"
      >
        <label htmlFor="ask-input" className="sr-only">
          Ask Àṣà a question
        </label>
        <input
          id="ask-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask Àṣà — “Who are Ṣàngó’s wives?”"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent py-2 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-none"
        />
        <button
          type="submit"
          disabled={!query.trim()}
          aria-label="Send question"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta text-warm transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          <SendIcon />
        </button>
      </form>

      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((suggestion) => (
          <li key={suggestion}>
            <button
              type="button"
              onClick={() => note(suggestion)}
              className="rounded-full border border-line bg-warm px-3.5 py-1.5 text-sm text-body transition-colors hover:border-[#C9B49A] hover:text-ink"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>

      {noted ? (
        <div role="status" className="mt-6 border-t border-line pt-5 text-center">
          <p className="font-serif text-lg leading-snug text-ink">“{noted}”</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-body">
            An answer will sit here once Àṣà is connected. For now the question
            stays on this page.
          </p>
        </div>
      ) : null}
    </div>
  )
}
