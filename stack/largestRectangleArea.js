
/*Given an array heights[] of length n, where each heights[i] represents 
the height of a rectangle of width 1 in a histogram, return the area 
of the largest rectangle that can be formed within the histogram.

The rectangle must be formed by choosing one or more consecutive bars.

Constraints:
• 1 ≤ heights.length ≤ 10^5
• 0 ≤ heights[i] ≤ 10^4
*/


const arr = [2,1,5,6,2,3];

function largestRectangleArea(heights){
    let maxArea = 0; 
    let stack = []; // stack holds indices of bars (in increasing height order)
    heights.push(0); // add a sentinel bar to force stack cleanup at end

    for(let i=0; i< heights.length; i++){
        // If current bar is smaller than the bar at stack top,
        while(stack.length && heights[i] < heights[stack[stack.length-1]]){
            const height = heights[stack.pop()]; // height of the rectangle ending here
            const width = stack.length ? i-stack[stack.length-1]-1 : i;
            const area = height * width; // rectangel Area
            maxArea = Math.max(maxArea, area); // max area
        }
        stack.push(i);
    }
    return maxArea;
}
console.log(largestRectangleArea(arr));