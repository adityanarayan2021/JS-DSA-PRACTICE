const str1 = "hello";

function reverseString(str) {
  const stack = [];
  let reversed = "";
  for (char of str) {
    stack.push(char);
  }
  while (stack.length > 0) {
    reversed += stack.pop();
  }
  return reversed;
}

console.log("Reverse: ", reverseString(str1));
