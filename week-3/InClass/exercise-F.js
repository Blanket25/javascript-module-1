/*
-You can drive in the UK at the age of 17.
-Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
-Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
-console.log the answers */

const years = [
    1964, 2008, 1999, 2005, 1978, 1985, 1919
];

const ages = years.map((year) => {
    
    let age = 2021-year;
  
    if (age >= 17) {
        return `Born in ${year} can drive`;
    } else {
        return `Born in ${year} can drive in ${17 - age} years`;
    }
    
});

console.log(ages);