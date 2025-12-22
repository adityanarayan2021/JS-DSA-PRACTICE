/**
 * Linear Search Algorithm
 *
 * Searches for a target value in an array by checking each element
 * one by one from left to right until the target is found.
 *
 * @param {any[]} arr - Array of elements to search in
 * @param {any} target - Value to search for
 * @returns {number} Index of the target if found, otherwise -1
 *
 * Characteristics:
 * - Works on both sorted and unsorted arrays
 * - Simple and easy to implement
 * - Not efficient for large datasets
 */
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found
    }
  }
  return -1; // Target not found
};

// Example usage
const arr = [1, 9, 5, 6, 7, 8, 9];
console.log("index is", linearSearch(arr, 6));
// Output: index is 3
