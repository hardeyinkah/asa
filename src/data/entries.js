// Seed data for Àṣà
// Òrìṣà profiles, proverbs (Òwe), and Story Time tellings (Ìtàn).
// pronunciation is a phonetic guide for a future audio player.
// No recordings are stored here. See EntryTitle for the player hook.
// verified: false means the spelling or the telling still needs a speaker.
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

  {
    id: "ogun",
    name: "Ògún",
    category: "Orisha",
    quickSummary:
      "Òrìṣà of iron, tools, and the road that has to be cut open — called on by smiths, hunters, and anyone whose work depends on metal.",
    pronunciation: "oh-GOON (approximate — worth confirming with a fluent speaker)",
    meaning:
      "His name is tied to iron itself. Tradition treats the same metal as what clears a farm and what can wound.",
    romanized: "Ogun",
    oneLiner: "Òrìṣà of iron, the hunt, and the opened path.",
    diasporaNames: [
      { place: "Brazil (Candomblé)", spelling: "Ogum" },
      { place: "Cuba (Santería)", spelling: "Oggún" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Ògún, with full diacritics. Town festivals differ; Ìrè-Èkìtì is often named as a center, not as the only one.",
      },
      {
        tradition: "Cuban Santería / Lucumí lineages",
        note: "Oggún. Catholic pairings exist in some houses and are not universal.",
      },
      {
        tradition: "Brazilian Candomblé houses",
        note: "Ogum. Tools and the color green are widely mentioned; local bead patterns differ.",
      },
    ],
    overview:
      "Ògún is the òrìṣà of iron. Smiths, hunters, farmers who use a cutlass, and, in later life, drivers and mechanics, are among those who address him. Yoruba tradition does not separate the useful blade from the dangerous one: the iron that opens a path is the iron that can cut.",
    symbols: [
      "Iron tools: cutlass, hoe, anvil",
      "The dog, widely named as his animal",
      "Colors: green is often named; black, red, and white also appear by lineage",
    ],
    story:
      "One widely told account says that after a bout of violence — some say in war, some say while he was in palm wine — Ògún struck his own people, then withdrew into the earth in grief. He is remembered both as the one who clears the way and as a warning about iron in the wrong hands. The details of that withdrawal differ by teller.",
    family: [],
    relatedEntries: [],
    diasporaConnections:
      "He is Ogum in Brazilian Candomblé and Oggún in Cuban Santería. Those names grew in the diaspora; they are not a second god invented apart from Ògún, and houses still differ on colors, tools, and Catholic pairings.",
    sources: [
      "Wikipedia — Ogun",
      "William Bascom — The Yoruba of Southwestern Nigeria (survey of Ògún among smiths and hunters)",
    ],
    accountsVary:
      "Parentage, the town that claims him first, and the colors of his beads are not one account. Palm fronds are often named at his shrines; that practice is widespread and not identical everywhere. No single oríkì is copied here.",
  },

  {
    id: "osun",
    name: "Ọ̀ṣun",
    category: "Orisha",
    quickSummary:
      "Òrìṣà of the Ọ̀ṣun River — freshwater, beauty, fertility, and the cool power that tradition says the other òrìṣà could not finish the world without.",
    pronunciation: "aw-SHOON (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Her name is the river's name. The shrine town most widely named with her is Òṣogbo, in today's Ọ̀ṣun State.",
    romanized: "Osun / Oshun",
    oneLiner: "Òrìṣà of the Ọ̀ṣun River, freshwater, and fertility.",
    diasporaNames: [
      { place: "Brazil (Candomblé)", spelling: "Oxum" },
      { place: "Cuba (Santería)", spelling: "Ochún" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Ọ̀ṣun of the river at Òṣogbo. Brass, gold cloth, and the fan are widely mentioned.",
      },
      {
        tradition: "Cuban Santería / Lucumí lineages",
        note: "Ochún. Often paired with a Marian figure; which saint varies by house.",
      },
      {
        tradition: "Brazilian Candomblé houses",
        note: "Oxum. Yellow and gold are widely used; offerings and bead counts differ.",
      },
    ],
    overview:
      "Ọ̀ṣun is a river òrìṣà, tied in Nigeria to the Ọ̀ṣun River and to Òṣogbo. She is associated with freshwater, fertility, beauty, and diplomacy. In many tellings she is a wife of Ṣàngó. That kinship is not the only one published: some accounts name other partners, including a close tie to Òrúnmìlà.",
    symbols: [
      "River water",
      "Brass and the color gold or yellow",
      "The fan",
      "Honey, a widely mentioned offering",
    ],
    story:
      "One widely told account says the other òrìṣà set about finishing the world and left Ọ̀ṣun out. The work failed until she was included. The story is read as a teaching that a plan which shuts women out of the work cannot hold. Which meeting, and which sacred verse, the story is pinned to differs by lineage, so no odù name is asserted here.",
    family: [
      {
        id: "sango",
        name: "Ṣàngó",
        relation: "Husband in many accounts — other accounts name different partners",
      },
    ],
    relatedEntries: ["sango", "yemoja"],
    diasporaConnections:
      "Oxum in Brazil and Ochún in Cuba carry her river into houses far from Òṣogbo. The Catholic figures sometimes placed beside her are a diaspora practice, not part of the river shrine at Òṣogbo itself.",
    sources: [
      "Wikipedia — Ọshun",
      "Wikipedia — Osun-Osogbo",
    ],
    accountsVary:
      "Who her husband is, which saint a diaspora house names, and which odù tells the 'left out of creation' story are not settled here. Honey and brass are widely mentioned and are not a full list of any one shrine's practice.",
  },

  {
    id: "esu",
    name: "Èṣù",
    category: "Orisha",
    quickSummary:
      "The messenger at the crossroads — the one tradition says must be acknowledged if a sacrifice is to reach the òrìṣà it was meant for.",
    pronunciation: "eh-SHOO (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Associated with the crossroads, with messages, and with the choice a person is about to make. He is not a translation of the devil.",
    romanized: "Esu / Eshu",
    oneLiner: "Òrìṣà of the crossroads, messages, and sacrifice carried to its destination.",
    diasporaNames: [
      { place: "Brazil (Candomblé)", spelling: "Exu" },
      { place: "Cuba (Santería)", spelling: "Eleguá / Elegbá" },
    ],
    practitionerVariants: [
      {
        tradition: "Nigerian traditionalists",
        note: "Èṣù. A laterite shrine and the crossroads are widely described. Praise names differ by town and are not listed here.",
      },
      {
        tradition: "Cuban Santería / Lucumí lineages",
        note: "Eleguá or Elegbá is the name most often heard. Treating that figure as identical to Èṣù in every detail is disputed.",
      },
      {
        tradition: "Brazilian Candomblé houses",
        note: "Exu. Equating every Exu of the terreiros with Yoruba Èṣù, one for one, is a claim many scholars and priests refuse.",
      },
    ],
    overview:
      "Èṣù is the òrìṣà who stands at the crossing and carries what is offered. Ifá practice treats him as the one who takes a sacrifice to the òrìṣà it names. Nineteenth-century Christian writers glossed him as Satan. That gloss is a translation imposed from outside. It is rejected by Yoruba traditional practice, and it is not used as a definition here.",
    symbols: [
      "The crossroads",
      "A laterite mound, often described at a shrine or a junction",
      "Colors: red and black are often named; houses differ",
    ],
    story:
      "A common teaching says a rite that forgets Èṣù has not yet been delivered. He is not remembered as random cruelty. He is remembered as the one who will not carry a message that pretends he is not there. Stories in which he tests people's choices are many; no single trick is given here as the official one.",
    family: [
      {
        id: "orunmila",
        name: "Òrúnmìlà",
        relation: "Worked with in Ifá — a working relationship, not a claim that they are kin",
      },
    ],
    relatedEntries: ["orunmila"],
    diasporaConnections:
      "Exu in Brazil and Eleguá in Cuba grew in the diaspora from this figure and from other crossing spirits. The names are related. They are not a license to treat every diaspora Exu as the same person as Èṣù of a particular Yoruba town.",
    sources: [
      "Wikipedia — Eshu",
      "Missionary glosses that equate Èṣù with Satan are cited in histories of translation; they are not a Yoruba definition",
    ],
    accountsVary:
      "Praise names, the exact form of the laterite shrine, and how far Exu or Eleguá can be called 'the same' as Èṣù are left open. The rejection of the devil gloss is the point that does not vary in the sources used here.",
  },

  {
    id: "iwa-lewa",
    name: "Ìwà lẹwà",
    category: "Proverb",
    quickSummary:
      "\"Character is beauty\" — a proverb that puts conduct ahead of looks.",
    pronunciation: "ee-WAH LEH-wah (approximate — worth confirming with a fluent speaker)",
    meaning: "Ìwà is character or conduct. Ẹwà is beauty. The line says the first is the real form of the second.",
    romanized: "Iwa lewa",
    oneLiner: "A proverb that beauty worth having is character.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "One of the shortest and most quoted Yoruba lines on ìwà. It is used to praise someone whose conduct is the thing people trust, and to correct someone who is relying on appearance.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Said when a family or a friend is naming what they actually value in a person — at a marriage talk, a correction, or a praise.",
    sources: ["Yoruba proverb collections (the short form Ìwà lẹwà is consistent; longer forms add a second clause)"],
    accountsVary:
      "A longer form adds that ìwà is the beauty one should seek. The two-word line is the form recorded here.",
  },

  {
    id: "suuru-ni-baba-iwa",
    name: "Sùúrù ni baba ìwà",
    category: "Proverb",
    quickSummary: "\"Patience is the father of character.\"",
    pronunciation: "SOO-oo-roo nee BAH-bah EE-wah (approximate — worth confirming with a fluent speaker)",
    meaning: "Sùúrù is patience. Baba is father. Ìwà is character. Patience is named as what character grows from.",
    romanized: "Suuru ni baba iwa",
    oneLiner: "A proverb that puts patience under character.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "A household line. It tells the listener that losing one's temper is not a separate problem from who they are: character is being asked to wait.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: ["iwa-lewa"],
    diasporaConnections: null,
    contextOfUse:
      "Said to someone who is about to answer in anger, or as praise for a person who did not.",
    sources: ["Yoruba proverb collections (wording is stable in the short form)"],
    accountsVary: null,
  },

  {
    id: "ise-ni-oogun-ise",
    name: "Iṣẹ́ ni òògùn ìṣẹ́",
    category: "Proverb",
    quickSummary: "\"Work is the medicine for poverty.\"",
    pronunciation: "ee-SHEH nee AW-aw-goon ee-SHEH (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Iṣẹ́ is work. Òògùn is medicine. The second ìṣẹ́ is poverty. The line says work is how poverty is treated.",
    romanized: "Ise ni oogun ise",
    oneLiner: "A proverb that names work as the remedy for poverty.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "The two nouns are close in sound and opposite in sense, which is the point of the line. It is not a claim that every poor person is at fault. It is a push toward labor as the remedy the proverb is willing to name.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Said to urge someone to start the work in front of them, including a young person being told to learn a trade.",
    sources: ["Yoruba proverb collections (the pun on iṣẹ́ / ìṣẹ́ is the usual form)"],
    accountsVary: null,
  },

  {
    id: "omode-gbon-agba-gbon",
    name: "Ọmọdé gbọ́n, àgbà gbọ́n, la fi dá Ilé-Ifẹ̀",
    category: "Proverb",
    quickSummary:
      "\"The young are wise, the elders are wise; that is how Ilé-Ifẹ̀ was founded.\"",
    pronunciation:
      "aw-maw-DEH gbawn, AHN-gbah gbawn, lah fee dah ee-leh-ee-FEH (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Both the child and the elder have wisdom to contribute. The founding of Ilé-Ifẹ̀ is named as the proof.",
    romanized: "Omode gbon, agba gbon, la fi da Ile-Ife",
    oneLiner: "A proverb that a town needs the sense of both ages.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "It belongs with the proverb about the shelf and the gourd. Neither age is told to keep quiet. Ilé-Ifẹ̀, the city tradition treats as a beginning place, is the example.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: ["owo-omode-ko-to-pepe"],
    diasporaConnections: null,
    contextOfUse:
      "Said when an elder is dismissing a younger person's idea, or when a younger person is dismissing an elder's.",
    sources: ["Yoruba proverb collections (Ilé-Ifẹ̀ is the city named in the usual form)"],
    accountsVary: null,
  },

  {
    id: "agba-ki-i-wa-loja",
    name: "Àgbà kì í wà lọ́jà, kí orí ọmọ tuntun wó",
    category: "Proverb",
    quickSummary:
      "\"An elder does not stand in the market and let a child's head go crooked.\"",
    pronunciation:
      "AHN-gbah kee ee wah LAW-jah, kee aw-REE aw-maw toon-toon waw (approximate — worth confirming with a fluent speaker)",
    meaning:
      "If an elder is present, a child should not be left in trouble. Presence is an obligation to step in.",
    romanized: "Agba ki i wa loja, ki ori omo tuntun wo",
    oneLiner: "A proverb that an elder on the scene is responsible for stepping in.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "The market is the public place. A crooked head is the picture of a child left uncorrected or unprotected. The line is aimed at the adult, not at the child.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: ["omode-gbon-agba-gbon"],
    diasporaConnections: null,
    contextOfUse:
      "Said when an older person watched a wrong thing happen and did nothing, or to remind them before they walk away.",
    sources: ["Yoruba proverb collections"],
    accountsVary:
      "Some printings say orí ọmọ ó wo, without tuntun. The duty of the elder is the same.",
  },

  {
    id: "ori-eni-ni-oosa-eni",
    name: "Orí ẹni ni òòṣà ẹni",
    category: "Proverb",
    quickSummary: "\"One's own head is one's divinity.\"",
    pronunciation: "aw-REE eh-nee nee AW-aw-shah eh-nee (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Orí is the personal head, also a divinity in Yoruba thought. Òòṣà is a deity. The line says a person's own head is the deity that is theirs.",
    romanized: "Ori eni ni oosa eni",
    oneLiner: "A proverb on the personal head as one's own divinity.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "Orí is not a metaphor borrowed from English 'mind.' In Yoruba religion the head is a divinity one propitiates. The proverb tells the hearer to look to that head, not only to a shrine across town.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Said when someone is blaming every outcome on other people or on a distant power, and is being turned back toward their own head.",
    sources: ["Yoruba proverb and orí teachings (the sense is stable; the particles are not)"],
    accountsVary: "Some say orí ẹni l'òòṣà ẹni. The particles differ in print.",
    verified: false,
    unverifiedNote:
      "The sense is widely taught. The exact tone marks and the choice between ni and l' are not locked here.",
  },

  {
    id: "bi-owe-bi-owe",
    name: "Bí òwe bí òwe là ń lùlù ògìdìgbó; ọlọ́gbọ́n ní í jó o, òmòràn ní í mọ̀ ọ́n",
    category: "Proverb",
    quickSummary:
      "\"It is as a proverb that the ògìdìgbó drum is beaten; the wise dance to it, the discerning understand it.\"",
    pronunciation:
      "bee AW-weh bee AW-weh lah n LOO-loo aw-ghee-DEE-gbaw (approximate — the whole line needs a fluent speaker)",
    meaning:
      "A proverb is like a drum pattern. Hearing the words is not the same as knowing the step they call for.",
    romanized: "Bi owe bi owe la n lulu ogidigbo; ologbon ni i jo o, omoran ni i mo on",
    oneLiner: "A proverb about why proverbs are beaten like a drum.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "This is the line Yoruba speakers use to explain òwe itself. The drum is not decoration. A person can hear it and still miss the dance.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Said when a proverb has just been spoken and the speaker wants the hearer to take the hidden point, not only the surface sentence.",
    sources: ["Yoruba proverb collections (the ògìdìgbó image is stable; the spelling of the clauses is not)"],
    accountsVary: "Tone marks and where the clauses break differ from book to book.",
    verified: false,
    unverifiedNote:
      "Do not treat this spelling as final. A fluent speaker should confirm the tones and the split of the clauses.",
  },

  {
    id: "ko-si-eni-to-mo-ona-orun",
    name: "Kò sí ẹni tó mọ ọ̀nà ọ̀run",
    category: "Proverb",
    quickSummary: "\"No one knows the road to heaven.\"",
    pronunciation: "koh see eh-nee taw maw AW-nah aw-ROON (approximate — worth confirming with a fluent speaker)",
    meaning: "Ọ̀run is the otherworld, often glossed as heaven. The road there is not something the living can map.",
    romanized: "Ko si eni to mo ona orun",
    oneLiner: "A proverb that the way of the dead is not known by the living.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "Said in the face of a death. It refuses a neat explanation of why this person, and why now. The living are told they do not have that map.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse: "Heard at mourning, and when someone is speaking with too much certainty about another person's fate.",
    sources: ["Yoruba proverb collections, including lines used at funerals"],
    accountsVary: "Some add a second clause. The refusal to claim the road is the part that stays.",
  },

  {
    id: "ajoye-ko-dun",
    name: "Àjọjẹ kò dùn bí ẹnìkan ò ní",
    category: "Proverb",
    quickSummary: "\"Eating together is not sweet if one person has nothing.\"",
    pronunciation:
      "ah-jaw-JEH koh doon bee eh-nee-kahn aw nee (approximate — worth confirming with a fluent speaker)",
    meaning:
      "A shared meal fails if someone at it is left out of the food. Company without a portion is not the good the proverb means.",
    romanized: "Ajoje ko dun bi enikan o ni",
    oneLiner: "A proverb that a common table requires every person to have a share.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "It is about meals and about any common project. Being invited is not the same as being fed. The line is used when a group is celebrating past someone who was left out.",
    symbols: [],
    story: null,
    family: [],
    relatedEntries: [],
    diasporaConnections: null,
    contextOfUse:
      "Said at a meal, a meeting, or a division of money, when one person's empty place is being ignored.",
    sources: ["Yoruba proverb collections"],
    accountsVary: "Tone on àjọjẹ and the choice of bí or tí vary in print.",
    verified: false,
    unverifiedNote: "The gloss is stable. The tone marks on this line should be confirmed before they are treated as final.",
  },

  {
    id: "ijapa-shell",
    name: "Why Ìjàpá's shell is cracked",
    category: "Story",
    quickSummary:
      "A tortoise story about a feast and a fall. Greed is what cracks the shell.",
    pronunciation: "ee-JAH-pah (approximate — worth confirming with a fluent speaker)",
    meaning:
      "The lesson usually drawn is that taking more than your share leaves a mark you cannot hide.",
    romanized: "Ijapa",
    oneLiner: "An Ìjàpá story about greed and a broken shell.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "Ìjàpá the tortoise is the trickster of Yoruba folktale. This is one of the stories told to explain the seams on his shell. It is a retelling, not a transcript of one elder's performance.",
    symbols: [],
    story:
      "Ìjàpá was called to a feast in ọ̀run, the sky world. He ate, and he was not satisfied to have eaten. He hid more food in his shell to carry home. On the way back he fell. The shell broke. It was stuck together again, which is why a tortoise shell looks as if it has been mended. Some tellings say birds had lent him feathers to get there, and took the feathers back when they saw he was hiding food. The fall is the part the stories share.",
    family: [],
    relatedEntries: ["ijapa-wisdom"],
    diasporaConnections: null,
    contextOfUse:
      "Told to children, and to adults who are being warned without being named. Trickster stories are entertainment and correction at once.",
    sources: [
      "Yoruba oral tradition (Ìjàpá tales). Similar trickster-feast plots are told elsewhere in West Africa; this is filed as a Yoruba telling.",
    ],
    accountsVary:
      "Who invites him, whether feathers are involved, and how the shell is mended change with the teller.",
    verified: false,
    unverifiedNote:
      "This is one English retelling. It is not the only Yoruba version, and it is not a recording of a performance.",
  },

  {
    id: "ijapa-wisdom",
    name: "Ìjàpá and the calabash of wisdom",
    category: "Story",
    quickSummary:
      "Ìjàpá tries to keep all wisdom for himself. A child shows him he has not.",
    pronunciation: "ee-JAH-pah (approximate — worth confirming with a fluent speaker)",
    meaning: "No one person holds all wisdom. A child can see what a clever adult cannot.",
    romanized: "Ijapa",
    oneLiner: "An Ìjàpá story about trying to own every wise thing.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "A short telling of the calabash-of-wisdom plot as it is told of Ìjàpá. Other West African tricksters carry a similar plot. It is filed here as a Yoruba story, with that limit stated.",
    symbols: [],
    story:
      "Ìjàpá gathered wisdom into a calabash and set out to hang it at the top of a tree, where only he could reach it. He tied the calabash to his front and could not climb. A child watching told him to carry it on his back. He climbed at once. Then he understood that the calabash was not complete, because the child had known something he had missed. Tellings differ on whether he broke the calabash or left it. They agree that the plan to own every wise thing failed.",
    family: [],
    relatedEntries: ["ijapa-shell"],
    diasporaConnections: null,
    contextOfUse:
      "Told when someone is acting as if they already know every answer, including an elder who will not hear a younger person.",
    sources: [
      "Yoruba oral tradition (Ìjàpá tales). A similar wisdom-gourd plot is told of other tricksters; do not treat those as the same story.",
    ],
    accountsVary: "The ending — broken gourd, or gourd left in the tree — is not one version.",
    verified: false,
    unverifiedNote:
      "This is one English retelling. Confirm the details you intend to perform with someone who tells Ìjàpá in Yoruba.",
  },

  {
    id: "ijapa-race",
    name: "Ìjàpá's race",
    category: "Story",
    quickSummary:
      "A faster animal races Ìjàpá and loses, because the tortoise has posted his relatives along the road.",
    pronunciation: "ee-JAH-pah (approximate — worth confirming with a fluent speaker)",
    meaning:
      "Cleverness can counter speed. Many tellers also want the hearer to notice that the win was a cheat.",
    romanized: "Ijapa",
    oneLiner: "An Ìjàpá race won by relatives hidden along the road.",
    diasporaNames: [],
    practitionerVariants: [],
    overview:
      "The race against a faster animal is a standard Ìjàpá plot. Who the other animal is, and whether the story praises the trick or scolds it, depends on the teller.",
    symbols: [],
    story:
      "A swifter animal mocked Ìjàpá and agreed to a race. Ìjàpá asked his relatives to hide along the path, each ready to answer when called. Whenever the swift animal looked ahead, a tortoise voice said it was already there. The swift animal exhausted itself. Ìjàpá was waiting at the end — or a relative was, which is the trick. Hearers are left to decide whether they admire the plan.",
    family: [],
    relatedEntries: ["ijapa-shell", "ijapa-wisdom"],
    diasporaConnections: null,
    contextOfUse:
      "Told for the pleasure of the trick, and sometimes as a warning that a result can be clever and still be unfair.",
    sources: ["Yoruba oral tradition (Ìjàpá tales)"],
    accountsVary:
      "The other racer is not always the same animal. Some tellings celebrate the trick. Others lean on the cheating. Both are current.",
    verified: false,
    unverifiedNote:
      "The animal in the race and the moral emphasis are not fixed. This retelling does not choose a single town's version.",
  },
]

export default entries

const CATEGORY_ALIASES = {
  orisa: "Orisha",
  proverbs: "Proverb",
  stories: "Story",
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
