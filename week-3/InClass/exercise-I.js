/*
Create a function which accepts an array of "messy" strings. 
This function should:
-Remove all non-string entries
-Change the strings to upper case, and add an exclamation mark to the end */

const messyArray = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

function transformArray(str) {
  if (typeof str === "string") {
      return str;
  } 
}

function shoutyNames(personName) {
    let shoutyName = personName.toUpperCase();
    return shoutyName + "!";
}
    
var tidyArray = messyArray.filter(transformArray).map(shoutyNames);
console.log(tidyArray);


