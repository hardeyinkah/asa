import { entries } from "../data/entries"
import { events } from "../data/events"

const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "do",
  "does",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "there",
  "this",
  "to",
  "was",
  "what",
  "when",
  "where",
  "which",
  "who",
  "whom",
  "whose",
  "why",
  "with",
])

const EXCERPT_FIELDS = [
  "family",
  "diaspora",
  "symbols",
  "story",
  "overview",
  "oneLiner",
  "quickSummary",
]

// A match in the entry's own description outranks a match that only
// mentions someone else (a wife's relation, a source title, a related id).
const FIELD_WEIGHT = {
  name: 3,
  romanized: 3,
  oneLiner: 3,
  quickSummary: 3,
  overview: 3,
  symbols: 3,
  meaning: 3,
  story: 2,
  diaspora: 2,
  contextOfUse: 2,
  details: 2,
  family: 0,
  sources: 0,
  relatedEntries: 0,
}

function fold(value) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
}

function keywordForms(word) {
  const forms = [word]
  if (word === "wives") forms.push("wife")
  else if (word.endsWith("s") && word.length > 4) forms.push(word.slice(0, -1))
  return forms
}

export function keywordsFrom(question) {
  const tokens = fold(question).split(/[^\p{L}\p{N}]+/u)
  return tokens.filter((word) => word.length >= 3 && !STOPWORDS.has(word))
}

function field(id, text) {
  const value = text?.trim() ?? ""
  return { id, text: value, folded: fold(value) }
}

function keywordHits(keyword, folded) {
  return keywordForms(keyword).some((form) => folded.includes(form))
}

function documents() {
  const fromEntries = entries.map((entry) => {
    const diaspora = (entry.diasporaNames ?? [])
      .map((item) => `${item.spelling}, ${item.place}`)
      .join(" · ")
    const familyText = (entry.family ?? [])
      .map((person) => `${person.name} ${person.relation}`)
      .join(" ")

    return {
      id: entry.id,
      kind: "entry",
      name: entry.name,
      href: `/entries/${entry.id}`,
      quickSummary: entry.quickSummary,
      family: entry.family ?? [],
      fields: [
        field("name", entry.name),
        field("romanized", entry.romanized),
        field("meaning", entry.meaning),
        field("oneLiner", entry.oneLiner),
        field("quickSummary", entry.quickSummary),
        field("overview", entry.overview),
        field("story", entry.story),
        field("symbols", (entry.symbols ?? []).join(" · ")),
        field("contextOfUse", entry.contextOfUse),
        field("diaspora", diaspora),
        field("family", familyText),
        field("sources", (entry.sources ?? []).join(" ")),
        field("relatedEntries", (entry.relatedEntries ?? []).join(" ")),
      ],
    }
  })

  const fromEvents = events.map((event) => ({
    id: event.id,
    kind: "event",
    name: event.name,
    href: `/events#${event.id}`,
    quickSummary: event.quickSummary,
    family: [],
    fields: [
      field("name", event.name),
      field("quickSummary", event.quickSummary),
      field("overview", event.overview),
      field("story", event.significance),
      field("details", (event.details ?? []).join(" ")),
      field("oneLiner", `${event.location}. ${event.period}`),
    ],
  }))

  return [...fromEntries, ...fromEvents]
}

const ARCHIVE = documents()

function distinctiveFields(doc, keywords) {
  const identity = doc.fields.filter((item) => item.id === "name" || item.id === "romanized")
  const matched = new Set()

  for (const keyword of keywords) {
    if (identity.some((item) => keywordHits(keyword, item.folded))) continue
    for (const item of doc.fields) {
      if (item.id === "name" || item.id === "romanized") continue
      if (keywordHits(keyword, item.folded)) matched.add(item.id)
    }
  }

  return matched
}

function excerptFor(doc, keywords) {
  const matched = distinctiveFields(doc, keywords)
  const chosen = EXCERPT_FIELDS.find((id) => id !== "quickSummary" && matched.has(id))
  if (chosen === "family" && doc.family.length) {
    return { type: "family", family: doc.family }
  }
  if (chosen) {
    const text = doc.fields.find((item) => item.id === chosen)?.text
    if (text) return { type: "text", text }
  }
  return { type: "text", text: doc.quickSummary }
}

export function searchArchive(question) {
  const keywords = keywordsFrom(question)
  if (keywords.length === 0) return null

  let best = null

  for (const doc of ARCHIVE) {
    let score = 0

    for (const keyword of keywords) {
      let bestWeight = 0
      for (const item of doc.fields) {
        if (!keywordHits(keyword, item.folded)) continue
        bestWeight = Math.max(bestWeight, FIELD_WEIGHT[item.id] ?? 0)
      }
      score += bestWeight
    }

    if (score === 0) continue
    if (!best || score > best.score) best = { doc, score }
  }

  if (!best || best.score < 1) return null

  return {
    id: best.doc.id,
    kind: best.doc.kind,
    name: best.doc.name,
    href: best.doc.href,
    excerpt: excerptFor(best.doc, keywords),
  }
}
