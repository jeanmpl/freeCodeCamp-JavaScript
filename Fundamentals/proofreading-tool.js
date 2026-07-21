function isPalindrome(word){
  const normalized = word.toLowerCase()
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

function findPalindromeBreaks(words){
  const notPalindromes = [];
  for (let i = 0; i < words.length; i++){
   if (!isPalindrome(words[i])){
    notPalindromes.push(i);
   }
  }
  return notPalindromes;
}

function findRepeatedPhrases(words, phraseLength){
  if (phraseLength > words.length){
    return [];
  }

  const phrases = {};
  for (let i = 0; i < words.length; i++){
    const phrase = words
    .slice(i, i + phraseLength)
    .join(" ");

    if (!phrases.hasOwnProperty(phrase)){
      phrases[phrase] = [];
    }

    phrases[phrase].push(i);
  }

  const repeatedIndices = [];
  for (const phrase in phrases){
    if (phrases[phrase].length > 1){
      repeatedIndices.push(...phrases[phrase]);
    }
  }
  return repeatedIndices;
}

function analyzeTexts(texts, phraseLength){
  const results =[];
  for (const words of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength)
    , 
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }
  return results;
}

console.log(analyzeTexts([
  ["racecar", "hello", "level"],
  ["the", "cat", "sat", "the", "cat"]
], 2));