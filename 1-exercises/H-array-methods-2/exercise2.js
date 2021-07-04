/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
 
  let chars = str.split('');
chars[0] = chars[0].toUpperCase();

  chars.join(' ');
  return chars.join('');
}

  
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));
