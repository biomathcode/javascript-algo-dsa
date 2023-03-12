function compute(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * compute(n - 1);
  }
}

console.log(compute(10));
