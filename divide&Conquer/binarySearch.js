// binary search
// min, max
// provided array is sorted

function BinarySearch(array, item) {
  var min = 0;
  var max = array.length - 1;

  var guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (array[guess] === item) {
      return guess;
    } else {
      if (array[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
}

console.log(BinarySearch([1, 3, 5, 8, 9, 10, 12, 14, 16], 5));
