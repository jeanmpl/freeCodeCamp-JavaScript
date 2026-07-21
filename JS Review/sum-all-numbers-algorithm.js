function sumAll([n, m]) {
  let arr = [n, m];
  if (n > m) {
    let start = m;
    while (start < n - 1) {
      start++;
      arr.push(start);
    }
  }
  if (m > n) {
    let start = n;
    while (start < m - 1) {
      start++;
      arr.push(start);
    }
  }
  const sum = arr.reduce((acc, num) => acc + num);
  return sum;
}

// versão aprimorada 1:

function sumAll([n, m]) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// versão aprimorada 2 (utilizando soma de sequencia aritimética):
// (first + last) * (last - first + 1)) / 2;

function sumAll([n, m]) {
  const first = Math.min(n, m);
  const last = Math.max(n, m);
  const quantity = last - first + 1;

  return ((first + last) * quantity) / 2;
}
