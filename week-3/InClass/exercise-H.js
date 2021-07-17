/*
Create a function which:
-Takes an array of names
-Looks to see if your name is in the array
-If it is, return Found me!; if not, return Haven't found me :( 
    */

    const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

    function findMe(personName) {
        if (names.find(names => names === personName)) {
            return "Found me!";
        } else {
            return "Haven't found me :(";
        }
    }

    console.log(findMe("Bianca"));
    console.log(findMe("Irina"));