/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(streetNames) {
  // var a = [];
  // for (var i = 0; i < streetNames.length; i++) {
  //   if (streetNames[i].includes('Lane'))
  //     a.push(streetNames[i]);
  // }
  

  const result = streetNames.filter(word => word.includes('Lane'));
  console.log(result);
return result;

  
  
  // return a;


}



/* ======= TESTS - DO NOT MODIFY ===== */

test("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
