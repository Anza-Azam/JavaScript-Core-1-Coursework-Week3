/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 4);
let res = statement.substring(8, statement.length);

let results = result.concat(res);

console.log(results);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
