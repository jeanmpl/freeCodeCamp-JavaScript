function findLongestWordLength(str){
  let longest = 0;
  const palavras = str.trim().split(/\s+/);
  for (const palavra of palavras){
    if (palavra.length > longest){
      longest = palavra.length;
    }
  }
  return longest;
}