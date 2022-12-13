function isPowerOfTwo(n) {
  let x = 0;
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    x++;
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
  return x;
}
console.log(isPowerOfTwo(8));
