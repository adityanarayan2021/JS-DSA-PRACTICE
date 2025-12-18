/**
 * Daily Temperatures Problem
 *
 * Given an array of daily temperatures, this function returns an array where
 * each index contains the number of days you have to wait until a warmer
 * temperature. If no future day is warmer, the value is 0.
 *
 * This solution uses a **monotonic decreasing stack** that stores indices
 * of days whose warmer temperature has not yet been found.
 *
 * @param {number[]} T - Array of daily temperatures
 * @returns {number[]} Array of days to wait for a warmer temperature
 *
 * Time Complexity:
 * - O(n) where n is the number of days
 *
 * Space Complexity:
 * - O(n) for the stack and result array
 */
function dailyTemperature(T) {
    let stack = []; // stores indices
    const result = new Array(T.length).fill(0);

    for (let i = 0; i < T.length; i++) {
        // Resolve previous colder days
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        // Push current day index
        stack.push(i);
    }

    return result;
}

// Example usage
const temp = [73, 74, 75, 71, 69, 72, 76, 73];
console.log("Temperature:", dailyTemperature(temp));
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
