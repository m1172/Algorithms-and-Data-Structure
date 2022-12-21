function RecursiveFactorial(n) {
  if (n < 0) {
    return -1;
  } else if (n < 2) {
    return 1;
  } else {
    return n * RecursiveFactorial(n - 1);
  }
}

console.log(RecursiveFactorial(2));
