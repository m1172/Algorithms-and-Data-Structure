var findMedianSortedArrays = function (nums1, nums2) {
  let median = 0;
  let arr1 = nums1;
  let arr = arr1.concat(nums2);
  let avg = 0;

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
  console.log(arr);
  if (arr.length % 2 !== 0) {
    median = Math.ceil(arr.length / 2);
    avg = arr[median - 1];
    return avg;
  } else {
    median = arr.length / 2;
    avg = (arr[median - 1] + arr[median]) / 2;
    return avg;
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));
