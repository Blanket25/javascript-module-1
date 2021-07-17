/*This function does not need to be modified. Can you pass in a callback function which will mutate namesArray such that it:
Upper cases all letters in the array*/

function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}

function letterUpperCase(namesArray) {
    return namesArray.map((name) => name.toUpperCase())
}

console.log(magician(letterUpperCase));