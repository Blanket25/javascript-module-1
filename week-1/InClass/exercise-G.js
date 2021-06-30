const numberOfStudents = 15;
const numberOfMentors = 3;
const totalOfPeople = numberOfStudents + numberOfMentors;

const percentageOfStudents = Math.round((numberOfStudents / totalOfPeople) * 100);
const percentageOfMentors = Math.round((numberOfMentors / totalOfPeople) * 100);

console.log(percentageOfStudents);
console.log(percentageOfMentors);

// Math.random()

console.log(Math.random());

/*Math.random() generates a random number between 0 and 1, everytime you call it.
You can round the number calling the Math.floor method on the Math.random.
It's very usefull!*/

console.log(Math.floor(Math.random()));

//Example:

/*What if I want to pick a random student to do an exercise and be completly partial
while doing it?
I'll use Math.random!

-If there are 15 students I need to generate a random number between 1 and 15.
-So I'll use Math.random and multiply it by the number of students.*/

console.log(Math.random() * numberOfStudents);

/*As this method gives me decimals I can round the number using Math.floor */

console.log(Math.floor(Math.random() * numberOfStudents) + 1)