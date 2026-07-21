function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

// Same as:

function findElement(arr, callback) {
  return arr.find(callback);
}

// find() automatically returns the first element that passes the test. If no element passes, it returns undefined, just like the previous function.
