function joinElement(array, joinString) {
  function recuse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recuse(index + 1, resultSoFar + joinString);
    }
  }
  return recuse(0, "");
}

const array = [1, 2, 3, 4, 5];

let result = "";

for (i in array) {
  if (i == array.length - 2) {
    console.log("this");
    result += array[i] + " and ";
  } else {
    result += array[i] + " ";
  }
}

console.log(result);

console.log(joinElement([1, 2, 3, 4, 5, 6], " and "));

// Accumulator is similar to reduce where we are using the
