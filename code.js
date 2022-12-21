function LinearSearch(arr, t) {
  for (let i = 0; i <= arr.length + 1; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
}
console.log(LinearSearch([1, 3, 6, 3, 7, 3, 2], 3));
