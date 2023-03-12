function computeFactorial(num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

const fac = computeFactorial(10);
console.log(fac);
