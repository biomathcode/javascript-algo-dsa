function doRecursion(start, end) {
  function recuse(i) {
    if (i < end) {
      return recuse(i + 1) + i;
    } else {
      return 1;
    }
  }
  return recuse(start);
}

console.log(doRecursion(1, 3));
