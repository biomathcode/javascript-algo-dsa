// wrapper function
function MemoFunction(i, end) {
  if (i < end) {
    return MemoFunction(i + 1, end) + 1;
  } else {
    return 1;
  }
}

console.log(MemoFunction(1, 5));
