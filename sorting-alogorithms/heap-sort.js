/**
 * Maintains the Max-Heap property for a subtree rooted at index `i`.
 *
 * A max-heap is a complete binary tree where:
 * - Each parent node is greater than or equal to its children.
 *
 * This function assumes that the left and right subtrees of `i`
 * are already max-heaps and fixes the node at `i` if needed.
 *
 * @param {number[]} arr - The array representing the heap
 * @param {number} n - The size of the heap
 * @param {number} i - The index of the current root node
 *
 * Time Complexity:
 * - O(log n) in the worst case (height of the heap)
 *
 * Space Complexity:
 * - O(1) auxiliary space (recursive call stack ignored in auxiliary space)
 */
function heapify(arr, n, i) {
    let largest = i;        // Assume root is the largest
    let left = 2 * i + 1;   // Left child index
    let right = 2 * i + 2;  // Right child index

    // Check if left child exists and is greater than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child exists and is greater than current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If root is not the largest, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

/**
 * Heap Sort Algorithm
 *
 * Sorts an array in ascending order using Heap Sort.
 * The algorithm works in two main steps:
 * 1. Build a Max-Heap from the input array.
 * 2. Repeatedly extract the maximum element and rebuild the heap.
 *
 * @param {number[]} arr - The array of numbers to be sorted
 * @returns {number[]} The sorted array (sorted in-place)
 *
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Average Case: O(n log n)
 * - Worst Case: O(n log n)
 *
 * Space Complexity:
 * - O(1) auxiliary space (in-place sorting)
 *
 * Stability:
 * - Not a stable algorithm (relative order of equal elements may change)
 */
function heapSort(arr) {
    let n = arr.length;

    // Step 1: Build a max-heap
    // Start from the last non-leaf node and heapify each node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (largest) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage
console.log(heapSort([12, 11, 13, 5, 6, 7]));
// Output: [5, 6, 7, 11, 12, 13]
