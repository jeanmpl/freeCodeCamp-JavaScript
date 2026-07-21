function frankenSplice(arr1, arr2, index) {
  let copyArr2 = arr2.slice();
  copyArr2.splice(index, 0, ...arr1);
  return copyArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
