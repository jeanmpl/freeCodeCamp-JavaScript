function sumFibs(num) {
  let fib = [0, 1];
  let sum = 0;

  while (fib[fib.length - 1] <= num) {
    if (fib[fib.length - 1] % 2 !== 0) {
      sum += fib[fib.length - 1];
    }
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return sum;
}

console.log(sumFibs(1000)); // 5
