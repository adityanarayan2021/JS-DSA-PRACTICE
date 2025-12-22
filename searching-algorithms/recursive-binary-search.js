/**
 * Recursive Binary Search Helper Function
 *
 * Searches for a target value within a given range of a sorted array
 * using the divide-and-conquer approach.
 *
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - Value to search for
 * @param {number} lowIndex - Starting index of the search range
 * @param {number} highIndex - Ending index of the search range
 * @returns {number} Index of target if found, otherwise -1
 */
function search(arr, target, lowIndex, highIndex) {
    // Base case: target not found
    if (lowIndex > highIndex) {
        return -1;
    }

    const midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (target === arr[midIndex]) {
        return midIndex;
    }

    // Search left half
    if (target < arr[midIndex]) {
        return search(arr, target, lowIndex, midIndex - 1);
    }
    // Search right half
    else {
        return search(arr, target, midIndex + 1, highIndex);
    }
}

/**
 * Recursive Binary Search
 *
 * Wrapper function that initializes the recursive search boundaries.
 *
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - Value to search for
 * @returns {number} Index of target if found, otherwise -1
 */
const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
};

// Example usage
const arr = [1, 5, 6, 7, 8];
console.log("index of =>", recursiveBinarySearch(arr, 7));
// Output: index of => 3
