const binarySearch = (arr, target) => {
  const arrLength = arr.length;
  let left = 0;
  let right = arrLength - 1;
  while (left <= right) {
    let midIndex = parseInt((left + right) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    } else if (target < arr[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
};

const arr = [1, 5, 6, 7, 8];
console.log("index is", binarySearch(arr, 5));
