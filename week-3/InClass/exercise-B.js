/*
-Use the array of the people from your class
-Combine it with another array filled with the names from another class
-console.log the names in alphabetical order
-Create a function that takes a name and an array of names and returns a 
string. If the name is not in an array, it should return <name> is not at
 the class with <people in the array>. If the name is in the array, 
 it should return <name> is at the class with <people in the array>. 
 */

 let students = ["Omar", "Elmira", "Luiza", "Suman"];
 let otherStudents = ["Fran", "Diego", "Said"];

 totalStudents = students.concat(otherStudents);

 console.log(totalStudents.sort());

 function who(name, nameArr) {
     if (!nameArr.includes(name)) {
        return `${name} is not at the class with ${nameArr}`;
     } else {
         return `${name} is at the class with ${nameArr}`;
     }
 }

 console.log(who('Pedro', totalStudents));