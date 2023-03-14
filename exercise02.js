function welcome(name1,name2,name3){
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}

function calAge(birthYear){
    const thisYear = 2023;
    if (birthYear <= 0 || birthYear >= thisYear){
        return 'Invalid Birth Year';
    }
    return thisYear - birthYear;
}

function welcomeAndAge(p1,p2,p3){
    const message = `Welcome ${p1.name}, you are ${calAge(p1.birthYear)}. Welcome ${p2.name}, you are ${calAge(p2.birthYear)}. Welcome ${p3.name}, you are ${calAge(p3.birthYear)}.`;
    console.log(message);
}

welcomeAndAge({name: "Jame", birthYear: 1990},{name: "Bill", birthYear: 1980},{name: "Sam", birthYear: 1970});