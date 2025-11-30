 const arr = [4, 5, 2, 25];

 function nextGreaterElement(arr){
    let stack = [];
    let result = new Array(arr.length).fill(-1);
    for(let i = 0; i <arr.length; i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    return result;
 }

 console.log(nextGreaterElement(arr));