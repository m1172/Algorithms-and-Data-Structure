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
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

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
