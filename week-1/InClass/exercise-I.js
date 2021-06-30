function birthYear(age) {
    const byear = 2021 - age;
    return byear;
}

function personBirthYear(name, age) {
    const birthInfo = name + " was born in " + birthYear(age);
    return birthInfo;
}

console.log(personBirthYear("Adam", 45));