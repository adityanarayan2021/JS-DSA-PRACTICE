
function validParentheses(str){
   let stack = [];
   const para = {')':'(', '}':'{', ']':'['};
    for(let char of str){
        if(para[char]){
            if(stack.pop() !== para[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

 const str = "({[]})";
console.log(validParentheses(str));