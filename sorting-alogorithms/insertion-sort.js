/**
 * Insertion Sort Algorithm
 *
 * Sorts an array of numbers in ascending order using Insertion Sort.
 * The algorithm builds the sorted portion of the array one element at a time
 * by inserting each new element into its correct position.
 *
 * @param {number[]} arr - Array of numbers to be sorted
 * @returns {number[]} The sorted array (sorted in-place)
 *
 * Characteristics:
 * - In-place sorting algorithm
 * - Stable (maintains relative order of equal elements)
 * - Efficient for small datasets and nearly sorted arrays
 */
const insertionSort = (arr) => {
    
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        // Shift elements of the sorted portion to the right
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the element at its correct position
        arr[j + 1] = numberToInsert;
    }
    return arr;
};

// Example usage
const arr = [-6, 20, 8, -2, 4];
console.log("result:", insertionSort(arr));
