function threeSum(arr, target) {
    const result = [];
    const seenTriplets = new Set();

    for (let i = 0; i < arr.length - 2; i++) {
        const seen = new Set();
        for (let j = i + 1; j < arr.length; j++) {
            const complement = target - (arr[i] + arr[j]);
            if (seen.has(complement)) {
                // Sort to avoid duplicates like [1, 2, 3] and [3, 2, 1]
                const triplet = [arr[i], arr[j], complement].sort((a, b) => a - b);
                const key = triplet.join(',');
                if (!seenTriplets.has(key)) {
                    result.push(triplet);
                    seenTriplets.add(key);
                }
            }
            seen.add(arr[j]);
        }
    }
    return result;
}

const nums = [8, 0, 1, 2, -1, -4];
console.log("Result", threeSum(nums, 12));
