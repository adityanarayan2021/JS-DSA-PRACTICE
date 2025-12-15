/**
 * Advanced HeapSort Implementation
 * --------------------------------
 * Features:
 * - Iterative heapify (no recursion)
 * - Supports Min-Heap and Max-Heap via comparator
 * - Works with numbers or objects
 * - In-place sorting (O(1) auxiliary space)
 */

class HeapSort {
  /**
   * @param {(a:any, b:any) => number} comparator
   * Comparator function:
   *  > 0  => a has higher priority than b
   *  < 0  => b has higher priority than a
   *  = 0  => equal
   * Default creates a Max-Heap for numbers (ascending sort)
   */
  constructor(comparator = (a, b) => a - b) {
    this.comparator = comparator;
  }

  /**
   * Iterative heapify to maintain heap property at index `i`
   *
   * @param {any[]} arr - Heap array
   * @param {number} heapSize - Size of heap
   * @param {number} i - Root index of subtree
   *
   * Time Complexity: O(log n)
   * Space Complexity: O(1)
   */
  heapify(arr, heapSize, i) {
    while (true) {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < heapSize && this.comparator(arr[left], arr[largest]) > 0) {
        largest = left;
      }

      if (right < heapSize && this.comparator(arr[right], arr[largest]) > 0) {
        largest = right;
      }

      if (largest === i) break;

      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      i = largest; // continue heapifying down
    }
  }

  /**
   * Builds heap from unordered array
   *
   * @param {any[]} arr
   * Time Complexity: O(n)
   */
  buildHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapify(arr, arr.length, i);
    }
  }

  /**
   * Sorts array in-place using Heap Sort
   *
   * @param {any[]} arr
   * @returns {any[]} sorted array
   *
   * Time Complexity: O(n log n)
   * Space Complexity: O(1)
   * Stability: Not Stable
   */
  sort(arr) {
    this.buildHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapify(arr, i, 0);
    }
    return arr;
  }
}

/* ===================== USAGE EXAMPLES ===================== */

// 1️⃣ Ascending order (Max-Heap)
const arr1 = [12, 11, 13, 5, 6, 7];
new HeapSort((a, b) => a - b).sort(arr1);
console.log(arr1); // [5, 6, 7, 11, 12, 13]

// 2️⃣ Descending order (Min-Heap behavior)
const arr2 = [12, 11, 13, 5, 6, 7];
new HeapSort((a, b) => b - a).sort(arr2);
console.log(arr2); // [13, 12, 11, 7, 6, 5]

// 3️⃣ Sorting objects
const users = [
  { name: 'A', age: 30 },
  { name: 'B', age: 20 },
  { name: 'C', age: 25 }
];

new HeapSort((a, b) => a.age - b.age).sort(users);
console.log(users);
// [{age:20}, {age:25}, {age:30}]
