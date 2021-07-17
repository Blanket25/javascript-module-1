/*
Create a function which:
-Takes an array of birthYears
-Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
-Returns an array of people who can drive (remember, you can drive if you are 17 years or old */

    const years = [
    1964, 2008, 1999, 2005, 1978, 1985, 1919
];

function isOldEnough(year) {
   let age = 2021 - year;
   return age >= 17;
}

const canDrive = years.filter(isOldEnough);

console.log(`These are the birth years of people who can drive: ${canDrive}`);