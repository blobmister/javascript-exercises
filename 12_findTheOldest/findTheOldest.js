const findTheOldest = function(people) {
    let oldestPerson = people[0];

    function age(person) {
        if(person.yearOfDeath != null) {
            return person.yearOfDeath - person.yearOfBirth
        } else {
            return 2024 - person.yearOfBirth;
        }
    }

    for (let i = 1; i < people.length; i++) {
        if(age(oldestPerson) < age(people[i])) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
