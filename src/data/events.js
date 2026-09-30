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
  }
];

export default events;
