// Seed data for the "Learn Yoruba" section on Àṣà
// Covers: alphabet + pronunciation, tone marks, how syllables/words are
// built, and numbers 1–100 (verified anchors + a generator function for
// the rest, since Yoruba numbers follow a strict, learnable pattern).
// Drop into src/data/languageBasics.js.

// ---------------------------------------------------------------------
// 1. ALPHABET
// ---------------------------------------------------------------------
export const alphabet = [
  { letter: "A", sound: "ah", example: "as in 'father'" },
  { letter: "B", sound: "bi", example: "as in English 'b'" },
  { letter: "D", sound: "di", example: "as in English 'd'" },
  { letter: "E", sound: "ee", example: "as in 'say' (close-mid vowel)" },
  { letter: "Ẹ", sound: "eh", example: "as in 'bed' (open-mid vowel)" },
  { letter: "F", sound: "fi", example: "as in English 'f'" },
  { letter: "G", sound: "gi", example: "hard 'g' as in 'go'" },
  { letter: "GB", sound: "gbi", example: "one single sound — G and B pronounced together, not separately" },
  { letter: "H", sound: "he", example: "as in English 'h'" },
  { letter: "I", sound: "i", example: "as in 'machine'" },
  { letter: "J", sound: "ji", example: "as in English 'j'" },
  { letter: "K", sound: "ki", example: "as in English 'k'" },
  { letter: "L", sound: "li", example: "as in English 'l'" },
  { letter: "M", sound: "mi", example: "as in English 'm'" },
  { letter: "N", sound: "ni", example: "as in English 'n'" },
  { letter: "O", sound: "oh", example: "as in 'go' (close-mid vowel)" },
  { letter: "Ọ", sound: "or", example: "as in 'or' / 'thought' (open-mid vowel)" },
  { letter: "P", sound: "kp", example: "a combined 'k+p' sound made with both lips, not English 'p' alone" },
  { letter: "R", sound: "ri", example: "lightly tapped, closer to a soft 'd' than English 'r'" },
  { letter: "S", sound: "si", example: "as in English 's'" },
  { letter: "Ṣ", sound: "shi", example: "as in 'sh' in 'shoe'" },
  { letter: "T", sound: "ti", example: "as in English 't'" },
  { letter: "U", sound: "uh", example: "as in 'flute'" },
  { letter: "W", sound: "wi", example: "as in English 'w'" },
  { letter: "Y", sound: "yi", example: "as in English 'y'" }
];
// Note: Yoruba does not use C, Q, V, X, Z.

// ---------------------------------------------------------------------
// 2. TONES — the part beginners miss most often
// ---------------------------------------------------------------------
// Yoruba is a tonal language: the SAME letters with different pitch marks
// are different words with different meanings. There are three tones:
export const tones = [
  {
    tone: "High",
    mark: "á, é, í, ó, ú (acute accent)",
    description: "Voice pitch rises / stays high on the syllable"
  },
  {
    tone: "Mid",
    mark: "a, e, i, o, u (no mark)",
    description: "Flat, neutral pitch — the default when no accent is written"
  },
  {
    tone: "Low",
    mark: "à, è, ì, ò, ù (grave accent)",
    description: "Voice pitch drops on the syllable"
  }
];

export const toneExample = {
  word: "owó / òwò / ọ̀wọ̀",
  breakdown: [
    { spelling: "owó", meaning: "money" },
    { spelling: "òwò", meaning: "trade / business" },
    { spelling: "ọ̀wọ̀", meaning: "respect" }
  ],
  note:
    "Same consonant-vowel skeleton, three completely different words — this is why tone marks are never optional decoration in Yoruba, they're part of spelling."
};

// ---------------------------------------------------------------------
// 3. HOW SYLLABLES AND WORDS ARE BUILT
// ---------------------------------------------------------------------
export const syllableGuide = {
  rule:
    "Yoruba syllables are almost always Consonant + Vowel (CV), or a single vowel on its own. Words rarely end in a consonant, and consonant clusters (like 'str' in English) don't occur.",
  examples: [
    { word: "ba-ba", meaning: "father", syllables: ["ba", "ba"] },
    { word: "i-le", meaning: "house", syllables: ["i", "le"] },
    { word: "o-mo", meaning: "child", syllables: ["o", "mo"] },
    { word: "a-da-ba", meaning: "dove", syllables: ["a", "da", "ba"] }
  ],
  sentenceExample: {
    yoruba: "Báwo ni?",
    literal: "How is (it)?",
    meaning: "How are you? (a common greeting)",
    breakdown: [
      { part: "Báwo", note: "'how' — high tone on 'á'" },
      { part: "ni", note: "a linking word, roughly 'is/it is'" }
    ]
  }
};

// ---------------------------------------------------------------------
// 4. NUMBERS 1–100
// ---------------------------------------------------------------------
// Verified anchors (1-39 individually sourced; 40-100 decade bases
// individually sourced). Yoruba counting is base-20 (vigesimal):
//   - Numbers ending in 1-4 ADD to the decade below them
//   - Numbers ending in 5-9 SUBTRACT from the decade above them
//   - This repeats consistently all the way to 100
export const numberAnchors = {
  1: "ení / ọ̀kan", 2: "èjì", 3: "ẹ̀ta", 4: "ẹ̀rin", 5: "àrún",
  6: "ẹ̀fà", 7: "èje", 8: "ẹ̀jọ", 9: "ẹ̀sán", 10: "ẹ̀wá",
  11: "ọ̀kanlá", 12: "èjìlá", 13: "ẹ̀talá", 14: "ẹ̀rinlá", 15: "ẹ́ẹdógún",
  16: "ẹẹ́rìndílógún", 17: "eétàdílógún", 18: "eéjìdílógún", 19: "oókàndílógún",
  20: "ogún",
  21: "ọkanlélógún", 22: "ejìlélógún", 23: "ẹtalélógún", 24: "ẹrinlélógún",
  25: "ẹ́ẹdọ́gbọ̀n", 26: "ẹrindinlọgbọn", 27: "ẹtadinlọgbọn", 28: "ejidinlọgbọn", 29: "ọkandinlọgbọn",
  30: "ọgbọ̀n",
  31: "ọkanlelọgbọn", 32: "ejilelọgbọn", 33: "ẹtalelọgbọn", 34: "ẹrinlelọgbọn",
  35: "arundinlogoji", 36: "ẹrindinlogoji", 37: "ẹtadinlogoji", 38: "ejidinlogoji", 39: "ọkandinlogoji",
  40: "ogójì",
  50: "àádọ́ta",
  60: "ọgọ́ta",
  70: "àádọ́rin",
  80: "ọgọ́rin",
  90: "àádọ́rùn-ún",
  100: "ọgọ́rùn-ún"
};

// Decade base names used for constructing numbers 41-99 that aren't
// individually verified above. The construction pattern (add for 1-4,
// subtract from next decade for 5-9) is well documented, but the exact
// contracted spelling of every single compound (e.g. "47") is not
// separately confirmed here — treat generated values in that 41-99 range
// as "pattern-correct" rather than dictionary-verified, and ideally have
// a Yoruba speaker sanity-check them before publishing.
const decadeBases = { 0: null, 10: "ẹ̀wá", 20: "ogún", 30: "ọgbọ̀n", 40: "ogójì",
  50: "àádọ́ta", 60: "ọgọ́ta", 70: "àádọ́rin", 80: "ọgọ́rin", 90: "àádọ́rùn-ún", 100: "ọgọ́rùn-ún" };

export function yorubaNumber(n) {
  if (numberAnchors[n]) {
    return { value: n, yoruba: numberAnchors[n], verified: true };
  }
  if (n < 1 || n > 100) return null;

  const decade = Math.floor(n / 10) * 10;
  const remainder = n % 10;
  const lowerBase = decadeBases[decade];
  const upperBase = decadeBases[decade + 10];

  if (remainder >= 1 && remainder <= 4) {
    // e.g. 41 = "1 added to 40"
    return {
      value: n,
      yoruba: `[${remainder} lé ${lowerBase}]`,
      verified: false,
      note: `Constructed as "${remainder} added to ${decade}" — verify spelling before publishing`
    };
  }
  if (remainder >= 5 && remainder <= 9) {
    // e.g. 47 = "3 short of 50"
    const shortBy = 10 - remainder;
    return {
      value: n,
      yoruba: `[${shortBy} dín ${upperBase}]`,
      verified: false,
      note: `Constructed as "${shortBy} short of ${decade + 10}" — verify spelling before publishing`
    };
  }
  return { value: n, yoruba: decadeBases[n] || null, verified: !!decadeBases[n] };
}

// Example: build the full 1-100 table at runtime in your app with:
//   const fullTable = Array.from({ length: 100 }, (_, i) => yorubaNumber(i + 1));
// Numbers 1-40 and all decades to 100 come back verified:true with real
// sourced spellings. Everything else comes back verified:false with a
// bracketed placeholder — a visible signal to get it checked, rather
// than silently publishing a guess as fact.

export default { alphabet, tones, toneExample, syllableGuide, numberAnchors, yorubaNumber };
