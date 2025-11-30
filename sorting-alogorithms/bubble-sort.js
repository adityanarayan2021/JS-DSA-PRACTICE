const numberArray = [-10, 4, 3, 6, -3, 2];

const bubbleSort = (arr) => {
    const arrLength = arr.length;
    let swapped;
    do{
        swapped =false;
        for (let i = 0; i < arrLength - 1; i++) {
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)
  return arr;
}

console.log("O/p", bubbleSort(numberArray));
// Time Complexity 0(n2) in not sorted, if array is already sorted then O(n)
// Space Complexity it is stable algorithm so O(1)
