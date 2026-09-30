// Seed data for Àṣà
// Five starter entries: four Òrìṣà profiles + one proverb (Òwe)
// Drop this file into your project (e.g. src/data/entries.js) and import it
// wherever the Explore page / entry pages need to read from it.

export const entries = [
  {
    id: "sango",
    name: "Ṣàngó",
    category: "Orisha",
    quickSummary:
      "The Òrìṣà of thunder, lightning, and royal justice — a former king of Ọ̀yọ́ deified after his death.",
    pronunciation: "SHAHN-goh",
    meaning:
      "Associated with royal and thunderous power; tradition remembers him as a historical king of Ọ̀yọ́ before his deification.",
    romanized: "Shango / Sango",
    oneLiner: "Òrìṣà of thunder, lightning, fire, and justice.",
    diasporaNames: [
      { place: "Trinidad", spelling: "Shango" },
      { place: "Brazil (Candomblé)", spelling: "Xangô" },
      { place: "Cuba (Santería)", spelling: "Changó" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Ṣàngó, with full diacritics; emphasis on his history as the third or fourth Aláàfin of Ọ̀yọ́ (accounts vary on which).",
      },
      {
        tradition: "Cuban Santería / Lucumí lineages",
        note: "Changó; often paired with Catholic syncretism (Saint Barbara).",
      },
      {
        tradition: "Brazilian Candomblé houses",
        note: "Xangô; associated with the double axe (oxê) and red-and-white beads.",
      },
    ],
    overview:
      "Ṣàngó is one of the most powerful and widely feared Òrìṣà in the Yoruba pantheon — a deity of thunder, lightning, fire, and kingship, worshipped across West Africa and the diaspora. Yoruba tradition holds that he was a real historical king of the Ọ̀yọ́ Empire who was deified after his death.",
    symbols: [
      "Double-headed axe (oṣé)",
      "Colors: red and white",
      "Sacred animal: the ram",
      "Sacred day: varies by tradition",
    ],
    story:
      "Ṣàngó carries the oṣé, a double-headed axe symbolizing balanced justice. Tradition remembers him as someone who listens to the cries of the oppressed — his fury restores cosmic order rather than serving simple cruelty. Sources differ on whether he was the third or fourth Aláàfin (king) of Ọ̀yọ́.",
    family: [
      { id: "osun", name: "Ọ̀ṣun", relation: "Wife — goddess of freshwater and love" },
      { id: "oya", name: "Ọya", relation: "Wife — goddess of storms and the Niger River" },
      { id: "oba", name: "Ọba", relation: "Wife — goddess of the Ọba River" },
    ],
    relatedEntries: ["osun", "oya"],
    diasporaConnections:
      "Ṣàngó's worship spread through the transatlantic slave trade to the Caribbean and the Americas, becoming foundational to Santería in Cuba and Candomblé/Umbanda in Brazil. Communities in Trinidad and Recife, Brazil carry his name.",
    sources: [
      "Wikipedia — Shango",
      "mythologyblog.com — Who is Shango? Guide to the Yoruba Orisha of Thunder",
      "oriire.com — Sàngó and His Wives",
    ],
    accountsVary:
      "Sources differ on whether Ṣàngó was the third or fourth Aláàfin of Ọ̀yọ́ — noted here rather than resolved.",
  },

  {
    id: "obatala",
    name: "Ọbatálá",
    category: "Orisha",
    quickSummary:
      "The king of all Òrìṣà, credited with molding humans in the womb — associated entirely with white, purity, and calm wisdom.",
    pronunciation: "oh-BAH-tah-lah",
    meaning:
      "Regarded as the 'sculptor of humankind'; his name is tied to kingship over the Òrìṣà (Oba ti Ala — roughly 'king of the white cloth').",
    romanized: "Obatala",
    oneLiner: "Òrìṣà of creation, purity, and calm wisdom.",
    diasporaNames: [
      { place: "Brazil (Candomblé)", spelling: "Oxalá" },
      { place: "Cuba (Santería)", spelling: "Obatalá" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Ọbatálá; spouse named Yemòó in this tradition.",
      },
      {
        tradition: "Diaspora / Americas lineages",
        note: "Spouse often named Yemọja instead of Yemòó — a difference worth noting rather than resolving.",
      },
    ],
    overview:
      "Ọbatálá is the king of all Òrìṣà, believed to have created and molded humans in the womb — the 'sculptor of humankind.' He represents purity and consciousness, and is venerated in white: white cloth, white doves, a white crown.",
    symbols: [
      "Color: white, exclusively",
      "White cloth and white doves",
      "The crown (as king of the Òrìṣà)",
    ],
    story:
      "In creation tradition, Olódùmarè sent Ọbatálá to finish creating the earth, but he became intoxicated on palm wine along the way and failed to complete the task — his brother Odùduwà finished it instead. The story is often read as a caution about self-control, even for the most exalted figures. Ọbatálá is also said to have gone on to create humans using clay and water.",
    family: [
      {
        id: null,
        name: "Yemòó / Yemọja",
        relation: "Spouse — name differs by tradition (see practitioner variants above)",
      },
      { id: null, name: "Yewá", relation: "Divine offspring" },
    ],
    relatedEntries: [],
    diasporaConnections:
      "Known as Oxalá in Brazilian Candomblé, often syncretized with Our Lord of Bonfim; known as Obatalá in Cuban Santería, syncretized with Our Lady of Mercy.",
    sources: [
      "Wikipedia — Ọbatala",
      "mythopedia.com — Ọbatala",
      "ileoro.org — Meet the Orishas: Obàtálá, The King of White Cloth",
    ],
    accountsVary:
      "His spouse is named Yemòó in Nigerian tradition, but Yemọja in many Americas-based traditions — recorded as a genuine variation, not an error.",
  },

  {
    id: "orunmila",
    name: "Òrúnmìlà",
    category: "Orisha",
    quickSummary:
      "Second only to Olódùmarè himself — the source of the Ifá divination system and the Òrìṣà of fate, prophecy, and knowledge.",
    pronunciation: "oh-ROON-mee-lah",
    meaning: "Praised as 'Igbákejì Olódùmarè' — second-in-command to the Supreme Being.",
    romanized: "Orunmila",
    oneLiner: "Òrìṣà of wisdom, divination, and fate; source of the Ifá system.",
    diasporaNames: [{ place: "Cuba (Santería/Lucumí)", spelling: "Orunla / Orúla" }],
    practitionerVariants: [
      {
        tradition: "Babaláwo lineages (Nigeria and diaspora)",
        note: "Study of the 256 Odù Ifá; heavy emphasis on Òrúnmìlà as teacher-prophet rather than distant deity.",
      },
      {
        tradition: "Cuban Santería / Lucumí",
        note: "Referred to as Orunla or Orúla; venerated within a Catholic-syncretic framework.",
      },
    ],
    overview:
      "Òrúnmìlà is one of the most principal deities in Yoruba religion, venerated as the Òrìṣà of wisdom, knowledge, fate, prophecy, and divination. He is regarded as a primordial deity who existed before humanity.",
    symbols: [
      "Colors: green, yellow, and white",
      "Ọ̀pọ́n Ifá (divination tray)",
      "Cowries, kola nuts, palm nuts",
    ],
    story:
      "Òrúnmìlà is credited as the creator of the Ifá divination system. Priests (babaláwo) and priestesses (ìyánífá) study the 256 Odù Ifá — a body of verses, stories, and prayers said to have been passed down from when Òrúnmìlà walked the earth as a prophet.",
    family: [
      {
        id: null,
        name: "Àlàyérú and Òrókò",
        relation: "Named as his earthly parents in some accounts",
      },
    ],
    relatedEntries: [],
    diasporaConnections:
      "Venerated across Santería, Candomblé, Umbanda, Haitian Vodou, and folk-Catholic traditions, usually as Orunla or Orúla.",
    sources: [
      "Wikipedia — Òrúnmìlà",
      "mythopedia.com — Orunmila",
      "newyorklatinculture.com — Orunmila is the Yoruba Orisha of Wisdom and Divination",
    ],
    accountsVary: null,
  },

  {
    id: "yemoja",
    name: "Yemọja",
    category: "Orisha",
    quickSummary:
      "Mother of waters and protector of women — one of the most widely venerated Òrìṣà across the entire diaspora.",
    pronunciation: "yeh-MOH-jah",
    meaning:
      "Tied to Nigeria's Ògùn River in her original context; the name is associated with motherhood and river waters.",
    romanized: "Yemoja / Yemaya",
    oneLiner: "Òrìṣà of motherhood, protection, and waters.",
    diasporaNames: [
      { place: "Brazil", spelling: "Yemanjá / Iemanjá / Janaína" },
      { place: "Cuba", spelling: "Yemayá / Yemallá" },
      { place: "Trinidad", spelling: "Emanja / Yemonjá" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Yemọja tied specifically to the Ògùn River, not the ocean.",
      },
      {
        tradition: "Brazilian and Cuban traditions",
        note: "Shifted to goddess of the ocean itself, reflecting adaptation to new geography rather than a naming difference alone.",
      },
      {
        tradition: "Catholic-syncretic lineages",
        note: "Merged with Our Lady of Regla and various Virgin Mary representations.",
      },
    ],
    overview:
      "Yemọja is a major water deity in Yoruba religion, functioning as a mother figure and protector of women. In Nigeria she is tied to the Ògùn River; in Brazil and Cuba she became associated with the ocean.",
    symbols: [
      "Water, the moon",
      "Cowrie shells (wealth)",
      "The number seven",
      "Colors: blue and white/crystal",
    ],
    story:
      "Described as motherly and strongly protective, Yemọja is said to comfort and cleanse her children of sorrow. One tradition holds that when her waters broke, it caused a great flood that created rivers and streams. Though generally gentle, tradition holds she can be destructive when angered — mirroring turbulent floodwaters.",
    family: [
      {
        id: "obatala",
        name: "Ọbatálá",
        relation: "Spouse in some (mainly Americas-based) traditions",
      },
    ],
    relatedEntries: ["obatala"],
    diasporaConnections:
      "One of the most widely venerated Òrìṣà in the diaspora — Yemanjá in Brazil, Yemayá in Cuba, Emanja in Trinidad — often merged with Catholic Marian figures during the transatlantic slave trade era.",
    sources: [
      "Wikipedia — Yemọja",
      "ileoro.org — Meet the Òrìṣà: Yemoja, The Mother of Waters",
      "originalbotanica.com — Orisha Yemaya: Queen of the Sea",
    ],
    accountsVary:
      "Her role shifts from river deity (Nigeria) to ocean deity (Brazil/Cuba) — a real adaptation across geography, not a contradiction to resolve.",
  },

  {
    id: "owo-omode-ko-to-pepe",
    name: "Ọ̀wọ́ ọmọdé kò tó pẹpẹ, tí àgbà kò wọ akèrègbè",
    category: "Proverb",
    quickSummary:
      "\"A child's hand can't reach the shelf, an elder's hand can't fit in the gourd\" — a proverb about why generations need each other.",
    pronunciation:
      "OH-woh oh-moh-DEH koh toh peh-PEH, tee AHN-gbah koh woh ah-keh-reh-GBEH (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Literally: a child's hand is too small to reach the high shelf (pẹpẹ); an elder's hand is too large to fit into the narrow neck of a gourd (akèrègbè).",
    romanized: "Owo omode ko to pepe, ti agbalagba ko wo keregbe",
    oneLiner: "A proverb about interdependence between the young and the old.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "One of the most widely cited Yoruba proverbs on interdependence. It explains why a community needs both the young and the old — each has a task only they can do well, and neither generation is self-sufficient without the other.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Commonly said in family or community settings when someone questions why an elder needs help with something 'simple,' or why a child is being given responsibility — the proverb reframes both as necessary, not lesser.",
    sources: ["Yoruba proverb collections (consistent wording across multiple sources)"],
    accountsVary: null,
  },
]

export default entries

const CATEGORY_ALIASES = {
  orisa: "Orisha",
  proverbs: "Proverb",
}

export function canonicalCategory(categoryId) {
  if (!categoryId || categoryId === "all") return "all"
  return CATEGORY_ALIASES[categoryId] ?? categoryId
}

export function getEntry(id) {
  if (!id) return undefined
  return entries.find((entry) => entry.id === id)
}

export function getFeaturedEntries() {
  return entries.filter((entry) => entry.category === "Orisha")
}

export function getEntriesByCategory(categoryId) {
  const category = canonicalCategory(categoryId)
  if (category === "all") return entries
  return entries.filter((entry) => entry.category === category)
}
