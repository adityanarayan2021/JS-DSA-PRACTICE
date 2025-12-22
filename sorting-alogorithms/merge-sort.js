/**
 * Merge Sort Algorithm
 *
 * Sorts an array of numbers in ascending order using the Merge Sort technique.
 * Merge Sort follows the **divide and conquer** approach:
 * 1. Divide the array into halves until single elements remain
 * 2. Merge the halves in sorted order
 *
 * @param {number[]} arr - Array of numbers to be sorted
 * @returns {number[]} A new sorted array
 *
 * Characteristics:
 * - Stable sorting algorithm
 * - Not in-place (uses extra memory)
 * - Predictable performance
 */
function mergeSort(arr) {
    // Base case: array of length 0 or 1 is already sorted
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

/**
 * Merges two sorted arrays into a single sorted array
 *
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} Merged sorted array
 */
function merge(left, right) {
    let i = 0, j = 0;
    const sorted = [];
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i++]);
        } else {
            sorted.push(right[j++]);
        }
    }

    return [...sorted, ...left.slice(i), ...right.slice(j)];
}


// Example usage
const arr = [4, 6, 1, 2, 8];
console.log(mergeSort(arr));
// Output: [1, 2, 4, 6, 8]
