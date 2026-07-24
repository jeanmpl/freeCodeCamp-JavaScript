function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return numbers.reduce((acc, curr) => lcm(acc, curr));
}
