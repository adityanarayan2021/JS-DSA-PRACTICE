const arr = [4,6,1,2,8];

// merge function
function merge(left, right){
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr){
 //base case
 if(arr.length < 2) return arr;
 let mid = Math.floor(arr.length/2);
 let left = mergeSort(arr.slice(0, mid));
 let right = mergeSort(arr.slice(mid));
 return merge(left, right);
}

console.log(mergeSort(arr))