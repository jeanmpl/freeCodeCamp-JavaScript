function dropElements(arr, func) {
  const new_arr = [];
  const index = arr.findIndex(func);
  console.log(index);

  if (index !== -1) {
    for (let i = index; i < arr.length; i++) {
      new_arr.push(arr[i]);
    }
  }

  return new_arr;
}

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
);

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
