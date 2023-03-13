function linearSearch(array, item) {
  let index = -1;
  for (let i in array) {
    if (array[i] === item) {
      return (index = i);
    }
  }
  return index;
}

const search = linearSearch([3, 45, 6, 7, 23], 10);
console.log(search);
