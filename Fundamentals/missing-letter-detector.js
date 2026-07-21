function fearNotLetter(str){ 
    const letters = "abcdefghijklmnopqrstuvwxyz"; 
    const startIndex = letters.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== letters[startIndex + i]) {
            return letters[startIndex + i];
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdfhi"))
console.log(fearNotLetter("aeiou"));
console.log(fearNotLetter("hello"));