/**
 * /*
 *    This program should check if the array `group` contains only students
 *
 * @format
 */

const students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

const group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every((element) => students.includes(element)); // complete this statement

if (groupIsOnlyStudents) {
	console.log("The group contains only students");
} else {
	console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
