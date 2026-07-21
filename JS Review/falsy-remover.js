function bouncer(arr) {
  const falsy = [false, null, 0, "", undefined, NaN];
  const notFalsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (!falsy.includes(arr[i])) {
      notFalsy.push(arr[i]);
    }
  }
  return notFalsy;
}

// Forma mais idiomática é com .filter():
function bouncer(arr) {
  return arr.filter(Boolean);
}
