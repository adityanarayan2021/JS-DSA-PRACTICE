 const str1 = "({[]})";
 const str2 = "({[})";
 const pairs = { '}': '{', ']': '[', ')': '(' };

 function isValid(str){
    const stack = [];
    for(char of str){
        if(['(', '{', '[']?.includes(char)){
            stack.push(char);
        } else {
            if(stack.pop() !== pairs[char]) return false;
        }
    }
    return stack.length === 0;
 }
 
 function isBalanced(str){
     const stack = [];
     for(char of str){
         if(['{','(', '[']?.includes(char)){
             stack.push(char);
            } else if(['}', ')', ']']?.includes(char)){
                if(stack.pop()!== pairs[char]) return false;
            }
        }
        return stack.length === 0;
    }
 console.log(isValid(str1));
 console.log('isBalanced', isBalanced(str1));