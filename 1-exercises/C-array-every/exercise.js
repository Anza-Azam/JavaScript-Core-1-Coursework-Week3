/*
   This program should check if the array `group` contains only students
*/

//var students = ["Austine", "Dany", "Swathi", "Daniel"];
var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Omar", "Austine", "Daniy", "Swathi", "Lesley", "Rukmini"];
//var group = ["Austine", "Dany", "Swathi", "Daniel"];

function onlyStudents(name,index)
{
return students[index].includes(name);
} 
var groupIsOnlyStudents=group.every(onlyStudents); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
