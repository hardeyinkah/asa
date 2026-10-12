// Seed data for the Events section of Àṣà
// Two real Yoruba festivals, dates marked as pending since exact annual
// dates vary and aren't fixed in advance. Drop into src/data/events.js.

export const events = [
  {
    id: "eyo-festival",
    name: "Eyò Festival (Adamu Orisha Play)",
    location: "Lagos Island, Lagos, Nigeria",
    status: "Awaiting confirmed date",
    period: "No fixed annual date — held when tradition and occasion call for it",
    quickSummary:
      "Lagos's most iconic masquerade procession — white-clad Eyò spirits move through Lagos Island in a tradition tied to honoring the dead and welcoming new leadership.",
    overview:
      "The Eyò Festival, also called the Adamu Orisha Play, is a Yoruba cultural celebration unique to Lagos. It originated in the 18th century as a secret-society ritual and today is one of the city's most recognized cultural events, often drawing large crowds and international attention.",
    significance:
      "Historically, the festival served to escort the soul of a departed king (Oba) or chief to the afterlife and to usher in a new leader. Today it also marks significant occasions — state visits, anniversaries, or in honor of notable deceased figures.",
    details: [
      "The Eyò masquerades are white-clad figures representing spirits of the dead, called 'agogoro Eyò' (tall Eyò) in Yoruba",
      "Five distinct groups take part, each identified by a different color and hat style: Àdìmú (black/white), Labá (red), Oníko (yellow), Ológede (green), and Agẹrẹ (purple)",
      "The first recorded procession was in 1854, honoring Oba Akitoye",
      "Because it's tied to specific occasions rather than a fixed calendar date, announcements typically come from Lagos traditional authorities closer to the event"
    ],
    sources: ["Wikipedia — Eyo festival", "oriire.com — The Eyo Festival: Uncovering the Sacred Symbolisms"],
    accountsVary: null
  },

  {
    id: "agemo-festival",
    name: "Àgemọ Festival",
    location: "Ìjẹ̀bú towns, Ogun State — a Yoruba tradition neighboring Lagos",
    status: "Awaiting confirmed date",
    period: "Typically observed between June and August, over about seven days",
    quickSummary:
      "A masquerade festival honoring the Àgemọ spirit, most closely associated with the Ìjẹ̀bú people — included here as a widely known neighboring Yoruba tradition, not strictly a Lagos festival.",
    overview:
      "The Àgemọ Festival centers on venerating Àgemọ, a spirit deity publicly represented by a moving raffia mat. It's most closely associated with the Ìjẹ̀bú people of Ogun State, though versions of it exist across other Yoruba communities.",
    significance:
      "The festival is meant to protect children, bless the community's future, ward off epidemics and evil, and ensure good rainfall. It historically coincided with the maize harvest season.",
    details: [
      "Includes processions to the Imosan shrine",
      "Features traditional rites, drumming, and stilt dancers",
      "Runs roughly seven days when observed",
      "A note on accuracy: this is an Ìjẹ̀bú (Ogun State) tradition rather than a Lagos-state festival — included here because it's a well-known, closely related Yoruba tradition, and worth being upfront about that distinction rather than folding it into 'Lagos festivals' without context"
    ],
    sources: ["Wikipedia — Agemo festival"],
    accountsVary:
      "Geographic framing matters here — this is Ìjẹ̀bú/Ogun State in origin, not Lagos proper, even though it's often discussed alongside Lagos traditions."
  },

  {
    id: "osun-osogbo",
    name: "Ọ̀ṣun Òṣogbo Festival",
    location: "Òṣogbo, Ọ̀ṣun State, Nigeria — the shrine grove of the Ọ̀ṣun River",
    status: "Awaiting confirmed date",
    period: "Held once a year, widely placed in August; the week is announced by the town",
    quickSummary:
      "The yearly procession to the Ọ̀ṣun River at Òṣogbo, when the town carries offerings to Ọ̀ṣun and a votary maid bears the calabash.",
    overview:
      "Ọ̀ṣun Òṣogbo is the festival of the river òrìṣà at her shrine town. The sacred grove is known beyond Nigeria and is listed by UNESCO. The public days draw worshippers and visitors. It is a living rite of Òṣogbo, not a staged copy of one.",
    significance:
      "The festival renews the town's bond with Ọ̀ṣun and with the river. The procession and the offerings are the part outsiders most often see. What is done inside the shrine is not fully public, and this record does not pretend to describe it.",
    details: [
      "A votary maid, the Arugba, carries a calabash in the procession. Published accounts agree on that role and differ on details of her preparation",
      "The grove and the river are the destination, not a hall in another city",
      "Crowds have grown as the festival has become widely known. Going as a spectator is not the same as being a devotee",
      "The exact week is set locally. August is the usual month named in print, not a promise of a calendar date"
    ],
    sources: ["Wikipedia — Osun-Osogbo", "UNESCO listing for the Osun-Osogbo Sacred Grove"],
    accountsVary:
      "Which day the procession walks, and what a visitor is allowed to see, change with the year and with the shrine. Do not treat a travel blog's timetable as the rite."
  },

  {
    id: "ogun-festival",
    name: "Ògún Festival",
    location: "Many Yoruba towns — Ìrè-Èkìtì and Ondo are often named; neither is the only site",
    status: "Awaiting confirmed date",
    period: "Annual in the towns that keep it; the month is not the same town to town",
    quickSummary:
      "Festivals for Ògún, the òrìṣà of iron, kept in more than one town. There is no single national date.",
    overview:
      "Ògún is honoured with festivals where smiths, hunters, and the town that claims him gather. Ìrè-Èkìtì is widely called a center. Ondo has its own well-known observance. Other towns keep days of their own. Folding all of these into one calendar entry would be false.",
    significance:
      "The festivals mark iron, the hunt, and the dangerous usefulness of the blade. Dog, palm frond, and iron tools appear in descriptions. Which of those a given town puts first is local.",
    details: [
      "Do not arrive expecting one shared timetable. Ask in the town whose festival you mean",
      "Iron objects and the hunt are the themes published accounts repeat",
      "Some towns feature a procession of hunters or smiths. The order of rites is not copied here, because it is not one order",
      "Colors and taboos named in print contradict one another often enough to leave them off this card"
    ],
    sources: ["Wikipedia — Ogun", "Town accounts of Ògún festivals at Ìrè-Èkìtì and Ondo"],
    accountsVary:
      "Which town's festival a book calls 'the' Ògún festival is a choice, not a fact. Months published for one town do not govern another."
  },

  {
    id: "egungun-festival",
    name: "Egúngún Festival",
    location: "Yoruba towns and lineage compounds that keep egúngún — not one city",
    status: "Awaiting confirmed date",
    period: "Set by the lineage or the town. Some communities cluster their outings in the drier months; that is not a rule",
    quickSummary:
      "Masquerades of the ancestors. The cloth-covered figure is treated as a visitor from the dead, not as a costume for entertainment.",
    overview:
      "Egúngún is the masked appearance of the ancestors. Families and cults that keep it bring the masquerade out on days they set. The cloth, the voice, and the rules about who may touch the figure are part of the rite. Watching without an invitation, or treating it as a parade, misses what the practice is.",
    significance:
      "The outing is a visit from the dead to the living compound: blessing, correction, and the reminder that the lineage is not only the people standing there. It is not a show staged for tourists, even where visitors are allowed to watch from a distance.",
    details: [
      "The masquerade is covered in cloth. Printed descriptions agree on that and differ on the layers and the charms",
      "Who may wear it, and who must stay back, is decided by the compound. Those rules are not optional local color",
      "Dates are lineage dates. A festival in one quarter of a city does not tell you the date in the next",
      "Photographs are often refused. Assume they are refused unless someone with the right to say so has agreed"
    ],
    sources: ["Wikipedia — Egungun", "Published studies of Yoruba egúngún (dates and costume details vary by town)"],
    accountsVary:
      "Costume, the words shouted, and the season differ by lineage. This card is the shared outline only."
  }
];

export default events;
