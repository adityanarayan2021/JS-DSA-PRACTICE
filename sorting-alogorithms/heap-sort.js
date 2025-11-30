
// Helper function to maintain the max-heap property
function heapify(arr, n, i) {
    // Assume the current node i is the largest
    let largest = i;

    // Calculate the index of the left child
    let left = 2 * i + 1;

    // Calculate the index of the right child
    let right = 2 * i + 2;

    // If the left child exists and is greater than the current largest, update largest
    if (left < n && arr[left] > arr[largest]) largest = left;

    // If the right child exists and is greater than the current largest, update largest
    if (right < n && arr[right] > arr[largest]) largest = right;

    // If the largest is not the current node, swap and continue heapifying
    if (largest !== i) {
        // Swap current node with the largest child
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;
    // Step 1: Build a max-heap from the input array
    // Start from the last non-leaf node and heapify each node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root (max value) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reduce the heap size by 1 and heapify the new root
        heapify(arr, i, 0);
    }
    return arr;
}

console.log(heapSort([12, 11, 13, 5, 6, 7])); //[ 5, 6, 7, 11, 12, 13 ]

// O(n) + O(n log n) = O(n log n) Time Complexity
// O(1) auxiliary space (in-place) Space Complexity


