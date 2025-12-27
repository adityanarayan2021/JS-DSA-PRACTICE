const slidingWindowMaximum = (nums, k) => {
  const result = [];
  const deque = []; // stores indices
  for (let i = 0; i < nums.length; i++) {
      // Remove indices out of window
      if (deque.length && deque[0] <= i - k) {
        deque.shift();
      }
      // Remove smaller elements from rear
     while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
     }
     deque.push(i);
     // Window formed
     if (i >= k - 1) {
      result.push(nums[deque[0]]);
     }
    }
  return result;
};
console.log(slidingWindowMaximum([1,3,-1,-3,5,3,6,7], 3));
