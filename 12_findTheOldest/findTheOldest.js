const findTheOldest = function(arr) {
    const years = arr.sort((a, b) => {
        let aDeathYear = a.yearOfDeath === undefined ? 2023 : a.yearOfDeath;
        let aBirthYear = a.yearOfBirth;

        let bDeathYear = b.yearOfDeath === undefined ? 2023 : b.yearOfDeath;
        let bBirthYear = b.yearOfBirth;

        return (aDeathYear - aBirthYear) >= (bDeathYear - bBirthYear) ? 1 : -1;
    });

    return years[years.length - 1];
};





// Do not edit below this line
module.exports = findTheOldest;
