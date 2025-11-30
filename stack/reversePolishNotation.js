 const arr = ["2","1","+","3","*"];
 function evalRPN(arr){
    let stack = [];
    for(let char of arr){
        if(!isNaN(char)){
            stack.push(Number(char));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            switch(char){
                case '+': stack.push(a+b);
                break;
                case '-': stack.push(a-b);
                break;
                case '*': stack.push(a*b);
                break;
                case '/': stack.push(Math.trunc(a/b));
                break;
            }
        }
    }
    return stack.pop();
 }
 console.log(evalRPN(arr));