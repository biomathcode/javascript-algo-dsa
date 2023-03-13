function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

const one = factorial(4);
console.log(one);
