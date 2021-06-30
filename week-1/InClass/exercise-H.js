/*With this function we can calculate how many apples ar left, by substracting the
number of eaten apples from the total we had at first.*/

function appleEater(startnumber, eatenApples) {
    const applesLeft = startnumber - eatenApples;
    const message = "We have " + applesLeft + " apples left";

    return message;
}

console.log(appleEater(6, 2));