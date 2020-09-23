

const wordSearch = (letters, word) => {
    if (!letters.length) {
        return 'No words here!'
    } 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // how many indices do we need to produce a vertical join?
    const verticalLength = letters[0].length;
    const verticalJoin = []; //accumulator
    for (let i = 0; i < verticalLength; i++) {
        let verticalString = ''; // accumulator
        for (let subArray of letters) {
            verticalString += subArray[i];
        }
        verticalJoin.push(verticalString);
    }

    const scanner = (array) => {
        for (l of array) {
            if (l.includes(word)) { 
                return true 
            }
        }
    }
    return (scanner(verticalJoin) || scanner(horizontalJoin)) ? true: false;
}


// Coded by Seb Kann and Jen Goetz

module.exports = wordSearch

