export const categories = [
  {
    id: "Orisha",
    label: "Òrìṣà",
    lang: "yo",
    description:
      "Divine figures, the stories told about them, and the names they carry abroad.",
    available: true,
    href: "/explore?category=Orisha",
  },
  {
    id: "Proverb",
    label: "Proverbs",
    description:
      "Òwe: compressed wisdom, with the situation each saying belongs to.",
    available: true,
    href: "/proverbs",
  },
  {
    id: "Story",
    label: "Stories",
    description: "Ìtàn: short tellings, with the lesson each one is remembered for.",
    available: true,
    href: "/stories",
  },
  {
    id: "festivals",
    label: "Festivals",
    description: "Dates, towns, and notes on visiting with respect.",
    available: true,
    href: "/events",
  },
]

export function getCategory(id) {
  return categories.find((category) => category.id === id)
}
