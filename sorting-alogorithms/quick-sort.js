/**
 * Quick Sort Algorithm
 *
 * Sorts an array of numbers in ascending order using the Quick Sort technique.
 * This implementation:
 * - Uses the **last element as pivot**
 * - Creates new arrays for left and right partitions
 * - Returns a new sorted array (not in-place)
 *
 * @param {number[]} arr - Array of numbers to be sorted
 * @returns {number[]} A new sorted array
 *
 * Characteristics:
 * - Divide and Conquer algorithm
 * - Not stable
 * - Not in-place (uses extra space)
 */
function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [7, 3, 8, 10, -6, 2];
console.log(quickSort(arr));
// Output: [-6, 2, 3, 7, 8, 10]
