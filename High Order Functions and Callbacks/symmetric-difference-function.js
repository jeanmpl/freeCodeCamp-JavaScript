function diffArray(arr1, arr2) {
  const newArr = [];

  const filteredArr1 = arr1.filter((item) => !arr2.includes(item));
  const filteredArr2 = arr2.filter((item) => !arr1.includes(item));

  newArr.push(...filteredArr1, ...filteredArr2);

  return newArr;
}
