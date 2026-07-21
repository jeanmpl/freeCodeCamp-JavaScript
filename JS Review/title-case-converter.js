function titleCase(str) {
  const newStr = str.toLowerCase();
  const arr = newStr.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Versão mais moderna com .map:

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
