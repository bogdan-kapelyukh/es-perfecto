export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function esConjugate(infinitive) {
  const ending = infinitive.slice(-2);
  const stem = infinitive.slice(0, -2);
  let conjugationObj = {};
  if (ending === "ar") {
    conjugationObj.past = [
      stem + "é",
      stem + "aste",
      stem + "ó",
      stem + "amos",
      stem + "asteis",
      stem + "aron",
    ];
    conjugationObj.present = [
      stem + "o",
      stem + "as",
      stem + "a",
      stem + "amos",
      stem + "áis",
      stem + "an",
    ];
  } else if (ending === "er") {
    conjugationObj.past = [
      stem + "í",
      stem + "iste",
      stem + "ió",
      stem + "imos",
      stem + "isteis",
      stem + "ieron",
    ];
    conjugationObj.present = [
      stem + "o",
      stem + "es",
      stem + "e",
      stem + "emos",
      stem + "éis",
      stem + "en",
    ];
  } else if (ending === "ir") {
    conjugationObj.past = [
      stem + "í",
      stem + "iste",
      stem + "ió",
      stem + "imos",
      stem + "isteis",
      stem + "ieron",
    ];
    conjugationObj.present = [
      stem + "o",
      stem + "es",
      stem + "e",
      stem + "imos",
      stem + "ís",
      stem + "en",
    ];
  } else {
    conjugationObj.past = Array(6).fill(infinitive);
    conjugationObj.present = Array(6).fill(infinitive);
  }
  return conjugationObj;
}

export function checkOnlySpanishCharacters(string) {
  if (!/^[a-záéíóúüñ]*$/i.test(string)) {
    window.alert(
      "Please only type characters that match this pattern: [a-z] [áéíóúüñ]. In either upper or lower case."
    );
    return false;
  }
  return true;
}

export function makeSentenceObject(verbObject, tense) {
  const pronounObjectsArray = [
    { spanish: "yo", english: "i" },
    { spanish: "tú", english: "you (informal)" },
    { spanish: "él", english: "he" },
    { spanish: "ella", english: "she" },
    { spanish: "usted", english: "you (formal)" },
    { spanish: "nosotros", english: "we (m)" },
    { spanish: "nosotras", english: "we (f)" },
    { spanish: "vosotros", english: "you (pl, m)" },
    { spanish: "vosotras", english: "you (pl, f)" },
    { spanish: "ellos", english: "they (m)" },
    { spanish: "ellas", english: "they (f)" },
    { spanish: "ustedes", english: "they (formal)" },
  ];
  const irConjugation = ["voy", "vas", "va", "vamos", "váis", "van"];
  const toBeConjugation = ["am", "are", "is", "are", "are", "are"];
  const pronounIndexObject = {
    yo: 0,
    tú: 1,
    él: 2,
    ella: 2,
    usted: 2,
    nosotros: 3,
    nosotras: 3,
    vosotros: 4,
    vosotras: 4,
    ellos: 5,
    ellas: 5,
    ustedes: 5,
  };

  let pronounObject = randomChoice(pronounObjectsArray);

  let spanishSentencesObject;
  let englishSentence;
  const conjugationIndex = pronounIndexObject[pronounObject.spanish];
  if (tense === 0) {
    spanishSentencesObject = {
      normalArray: [pronounObject.spanish, verbObject.past[conjugationIndex]],
      prodropArray: [verbObject.past[conjugationIndex]],
    };
    englishSentence = [pronounObject.english, verbObject.englishPast];
  } else if (tense === 1) {
    spanishSentencesObject = {
      normalArray: [
        pronounObject.spanish,
        verbObject.present[conjugationIndex],
      ],
      prodropArray: [verbObject.present[conjugationIndex]],
    };
    if (pronounObject.spanish === "él" || pronounObject.spanish === "ella") {
      englishSentence = [
        pronounObject.english,
        verbObject.englishPresent + "s",
      ];
    } else {
      englishSentence = [pronounObject.english, verbObject.englishPresent];
    }
  } else if (tense === 2) {
    spanishSentencesObject = {
      normalArray: [
        pronounObject.spanish,
        irConjugation[conjugationIndex],
        "a",
        verbObject.spanishInfinitive,
      ],
      prodropArray: [
        irConjugation[conjugationIndex],
        "a",
        verbObject.spanishInfinitive,
      ],
    };
    englishSentence = [
      pronounObject.english,
      toBeConjugation[conjugationIndex],
      "going",
      "to",
      verbObject.englishPresent,
    ];
  } else {
    console.error(
      `Invalid tense argument passed to makeSentenceObject function: ${tense}`
    );
  }

  return {
    spanishSentencesObject: spanishSentencesObject,
    englishSentence: englishSentence,
  };
}
