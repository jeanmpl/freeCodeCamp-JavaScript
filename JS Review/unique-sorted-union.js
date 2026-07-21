function uniteUnique(arr1, arr2, ...args) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  if (args) {
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        if (!newArr.includes(args[i][j])) {
          newArr.push(args[i][j]);
        }
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// versão melhorada

function uniteUnique(...arrays) {
  let newArr = [];

  for (let array of arrays) {
    for (let item of array) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
  }

  return newArr;
}

// outra versão melhorada

function uniteUnique(...arrays) {
  return [...new Set(arrays.flat())];
}
