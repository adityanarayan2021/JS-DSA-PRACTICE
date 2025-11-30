
function search(arr, target, lowIndex, highIndex) {
    if(lowIndex > highIndex){
        return -1;
    }
  const midIndex = Math.floor((lowIndex + highIndex) / 2);
  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return search(arr, target, 0, midIndex - 1);
  } else {
    return search(arr, target, midIndex + 1, highIndex);
  }
}

const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const arr = [1, 5, 6, 7, 8];
console.log("index of =>", recursiveBinarySearch(arr, 7));
