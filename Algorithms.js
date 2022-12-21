// Fibonacci

function fibonacci(n) {
  var fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));

// Factorial

function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
factorial(5);

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorial(5);

// Prime numbers

function isPrime(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
console.log(isPrime(6));

// Power of two - Pseudocode

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

// Recursive Fibonacci

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(6));

// Recursive Factorial

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

// Linear Search

function LinearSearch(t) {
  let arr = [1, 3, 6, -2.7, 8];
  console.log(arr.indexOf(t));
}
LinearSearch(2);

function LinearSearch(arr, t) {
  for (let i = 0; i <= arr.length + 1; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
}
console.log(LinearSearch([1, 3, 6, 3, 7, 3, 2], 3));
