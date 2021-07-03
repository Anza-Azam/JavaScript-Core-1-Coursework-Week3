// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function double(number) {
  return number *100;
}

var numbersDoubled = numbers.map(double);
console.log(numbersDoubled);





var numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});


var numbersDoubled = numbers.map(function (number) {
  return number * 2;
});




var numbersDoubled = numbers.map(number => {
  return number * 2
});


var numbersDoubled = numbers.map(number => number * 2);
