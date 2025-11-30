const temp = [73,74,75,71,69,72,76,73];

function dailyTemperaure(T){
    let stack = [];
    const result = new Array(T.length).fill(0);
    for(let i = 0; i < T.length; i++){
        while(stack.length && T[i] > T[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = i - index; 
        }
        stack.push(i);
    }
    return result;
}
console.log('Temperature:', dailyTemperaure(temp));
