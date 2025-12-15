/**
 * -----------------------------------------------
 * 🧩 Stock Span Problem (Interview Problem)
 * -----------------------------------------------
 *
 * Given an array of integers `prices`, where `prices[i]`
 * represents the stock price on day `i`, compute the
 * **stock span** for each day.
 *
 * The **stock span** of a given day's price is defined as:
 *
 *  ➤ The maximum number of consecutive days (up to the current day)
 *    for which the stock price was **less than or equal to**
 *    the price on the current day.
 *
 * In simple terms:
 *  - For each day, count how many previous days had prices
 *    less than or equal to today's price — including today.
 *
 * -----------------------------------------------
 * 💡 Example
 * -----------------------------------------------
 *  Input : prices = [100, 80, 60, 70, 60, 75, 85]
 *  Output: [1, 1, 1, 2, 1, 4, 6]
 *
 * Explanation:
 *  Day 0 → 100 → span = 1
 *  Day 1 →  80 → span = 1
 *  Day 2 →  60 → span = 1
 *  Day 3 →  70 → span = 2  (70 >= 60)
 *  Day 4 →  60 → span = 1
 *  Day 5 →  75 → span = 4  (75 >= 60, 70, 60, 80?)
 *  Day 6 →  85 → span = 6
 *
 * -----------------------------------------------
 * 🎯 Goal
 * -----------------------------------------------
 *  Return an array `span[]` where:
 *      span[i] = number of consecutive previous days
 *                (including day i) with prices <= prices[i]
 *
 * -----------------------------------------------
 * 🔧 Constraints
 * -----------------------------------------------
 *  • 1 ≤ prices.length ≤ 100000
 *  • 1 ≤ prices[i] ≤ 1000000
 *  • Expected time complexity: O(n)
 *  • Stack-based solution preferred
 *
 * -----------------------------------------------
 * @param {number[]} prices - Array of daily stock prices.
 * @returns {number[]} The stock span for each day.
 */
function stockSpan(prices) {
  const stack = [];
  const result = [];

  for(let i=0; i < prices.length; i++){
    while(stack.length && prices[stack[stack.length-1]] <= prices[i]) {
      stack.pop();
    };
    result[i] = stack.length ? i - stack[stack.length-1] : i+1;
    stack.push(i);
  }

  return result;
}
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpan(prices));


