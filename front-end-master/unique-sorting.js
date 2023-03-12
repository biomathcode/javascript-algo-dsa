// input = [2,3,3, 5,5, 6,7]
// output = [2,3,5,6,7]

const unique_sorte = (arr) => {
  const breadcrumbs = {};
  let result = [];

  for (let i in arr) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);

      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(unique_sorte([2, 2, 1, 3, 4, 4]));
