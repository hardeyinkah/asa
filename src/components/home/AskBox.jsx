import { useState } from "react"
import { Link } from "react-router-dom"
import { searchArchive } from "../../lib/searchArchive"

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

function Answer({ question, result }) {
  return (
    <div role="status" className="mt-6 border-t border-line pt-5 text-left">
      <p className="text-center font-serif text-lg leading-snug text-ink">“{question}”</p>
      {result ? (
        <div className="mt-4 rounded-md border border-line bg-warm px-5 py-5">
          <p className="font-serif text-2xl text-ink" lang="yo">
            {result.name}
          </p>
          {result.excerpt.type === "family" ? (
            <ul className="mt-3 space-y-2">
              {result.excerpt.family.map((person) => (
                <li key={`${person.name}-${person.relation}`} className="text-sm leading-relaxed text-body">
                  <span lang="yo" className="font-serif text-base text-ink">
                    {person.name}
                  </span>
                  <span className="text-muted"> — </span>
                  {person.relation}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-body">{result.excerpt.text}</p>
          )}
          <Link
            to={result.href}
            className="mt-4 inline-block text-sm text-terracotta underline decoration-terracotta/30 underline-offset-[3px] hover:decoration-terracotta"
          >
            View full entry
          </Link>
        </div>
      ) : (
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-body">
          I don&apos;t have an answer for that yet — try browsing the{" "}
          <Link
            to="/explore"
            className="text-terracotta underline decoration-terracotta/30 underline-offset-[3px] hover:decoration-terracotta"
          >
            Explore page
          </Link>
          .
        </p>
      )}
    </div>
  )
}

export default function AskBox() {
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState(null)

  function ask(value) {
    const trimmed = value.trim()
    if (!trimmed) return
    setAnswer({ question: trimmed, result: searchArchive(trimmed) })
    setQuery("")
  }

  function handleSubmit(event) {
    event.preventDefault()
    ask(query)
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
              onClick={() => ask(suggestion)}
              className="rounded-full border border-line bg-warm px-3.5 py-1.5 text-sm text-body transition-colors hover:border-[#C9B49A] hover:text-ink"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          answer ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {answer ? <Answer question={answer.question} result={answer.result} /> : null}
        </div>
      </div>
    </div>
  )
}
