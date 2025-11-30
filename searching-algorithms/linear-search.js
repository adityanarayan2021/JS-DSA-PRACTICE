
const linearSearch = (arr, target) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
const arr = [1, 9, 5, 6, 7, 8, 9];
console.log('index is', linearSearch(arr, 6));
