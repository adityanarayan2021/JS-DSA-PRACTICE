/**
 * Binary Search Algorithm (Iterative)
 *
 * Searches for a target value in a **sorted array** by repeatedly
 * dividing the search space in half.
 *
 * @param {number[]} arr - A sorted array of numbers
 * @param {number} target - The value to search for
 * @returns {number} Index of the target element if found, otherwise -1
 *
 * Preconditions:
 * - The array must be sorted in ascending order
 */
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Use Math.floor instead of parseInt for clarity
    const midIndex = Math.floor((left + right) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    } else if (target < arr[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return -1; // Target not found
};

// Example usage
const arr = [1, 5, 6, 7, 8];
console.log("index is", binarySearch(arr, 5));
// Output: index is 1
