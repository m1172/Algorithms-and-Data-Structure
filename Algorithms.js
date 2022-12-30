// Fibonacci

function fibonacci(n) {
  var fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));

// Big-O = O(n)

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

// Big-O = O(n)

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

// Big-O = O(sqrt(n))

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

// Big-O = O(1)

// Recursive Fibonacci

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(6));

// O(n) - Iterative
// O(2^n) - Recursive

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

// Big-O = O(n)

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

// Big-O = O(n)

// BinarySearch

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 2));

// Big-O = O(logn)

// Recursive Binary Search

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target == arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-1, 2, 4, 7, 9, 100], 4));

// Big-O = O(logn)

// Bubble Sort

function bubleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubleSort(arr);
console.log(arr);

// Big-O = O(n^2)

// Insertion Sort

function incertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

// const arr = [-8, 20, 2, 4, 6];
incertionSort(arr);
console.log(arr);

// Big-O = O(n^2)
