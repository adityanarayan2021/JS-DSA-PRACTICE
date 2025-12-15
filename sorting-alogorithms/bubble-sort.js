/**
 * Bubble Sort Algorithm
 *
 * Sorts an array of numbers in ascending order using the Bubble Sort technique.
 * The algorithm repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. This process repeats until
 * no swaps are needed, meaning the array is sorted.
 *
 * Optimization:
 * - Uses a `swapped` flag to stop early if the array is already sorted.
 *
 * @param {number[]} arr - The array of numbers to be sorted
 * @returns {number[]} The sorted array (sorted in-place)
 *
 * Time Complexity:
 * - Worst Case: O(n²) → when the array is reverse sorted
 * - Best Case: O(n)  → when the array is already sorted
 * - Average Case: O(n²)
 *
 * Space Complexity:
 * - O(1) → In-place sorting (no extra memory used)
 *
 * Stability:
 * - Stable algorithm (does not change the relative order of equal elements)
 */
const bubbleSort = (arr) => {
    const arrLength = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arrLength - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap adjacent elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

// Example usage
const numberArray = [-10, 4, 3, 6, -3, 2];
console.log("O/p", bubbleSort(numberArray));
