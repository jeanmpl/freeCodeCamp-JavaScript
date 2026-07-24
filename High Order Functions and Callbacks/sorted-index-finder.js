function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex((currentValue) => currentValue >= num);
  if (index === -1) {
    return arr.length;
  }

  return index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));
