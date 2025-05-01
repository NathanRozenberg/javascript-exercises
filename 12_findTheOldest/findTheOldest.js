const findTheOldest = function(people) {
    let today = new Date("May 1, 2025")
    let ageArray = []
    people.forEach((person) => {
        if (!person.hasOwnProperty("yearOfDeath")){
            ageArray.push(today.getFullYear() - 
            person.yearOfBirth)
        }
        else{
            ageArray.push(person.yearOfDeath - person.yearOfBirth)
        }
    })
    return people[checkOldest(ageArray)]
};

function checkOldest(ages){
    let oldestIndex = 0
    let oldestAge = 0
    for(i = 0; i < ages.length; i++){
        if (i===0){
            oldestAge = ages[i]
            oldestIndex = i
        }
        else{
            if (oldestAge < ages[i]){
                oldestAge = ages[i]
                oldestIndex = i
            }
        }
    }
    return oldestIndex
}

// Do not edit below this line
module.exports = findTheOldest;
