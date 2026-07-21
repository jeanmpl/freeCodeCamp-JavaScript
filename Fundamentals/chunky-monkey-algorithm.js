function chunkArrayInGroups(arr, num){
  const result = [];
  for (let i = 0; i < arr.length; i += num){
    const chunk = arr.slice(i, i + num);
    result.push(chunk);
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 1));