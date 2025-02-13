/**
 * Retourne les statistiques d'une chaine de caractère dans un array.
 * Compte le nombre de caractères, de mots, phrases, et de lignes, répétion de mots, de lettres, de symboles.
 * @param a Chaine de caracrère à analyser
 */
export function strStats(a: string): {
  characters: number;
  words: number;
  sentences: number;
  lines: number;
  wordFrequency: { [key: string]: number };
  letterFrequency: { [key: string]: number };
  symbolFrequency: { [key: string]: number };
} {
  const stats = {
    characters: a.length,
    words: a.split(/\s+/).filter(Boolean).length,
    sentences: a.split(/[.!?]/).filter(Boolean).length,
    lines: a.split(/\n/).length,
    wordFrequency: {} as { [key: string]: number },
    letterFrequency: {} as { [key: string]: number },
    symbolFrequency: {} as { [key: string]: number }
  };

  const words = a.toLowerCase().match(/\b\w+\b/g) || [];
  const letters = a.match(/[a-zA-Z]/g) || [];
  const symbols = a.match(/[^a-zA-Z0-9\s]/g) || [];

  words.forEach(word => {
    stats.wordFrequency[word] = (stats.wordFrequency[word] || 0) + 1;
  });

  letters.forEach(letter => {
    stats.letterFrequency[letter] = (stats.letterFrequency[letter] || 0) + 1;
  });

  symbols.forEach(symbol => {
    stats.symbolFrequency[symbol] = (stats.symbolFrequency[symbol] || 0) + 1;
  });

  return stats;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(strStats("Bonjour, comment ça va ? Bah ça va bien, merci et toi ? Moi ça va bien aussi, merci. J'aime les pommes, et toi ? Je suis pompier. Pomme ? Jour ? Bonjour Paul !"));
}