// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function solverChaos(a, b) {
    const b2 = b.replace('%', '')
    const a2 = a.replace('%', '')
    return a2.charAt(0).toUpperCase() + a2.slice(1) + [...b2].reverse().join('')
}

solverChaos('java', 'tpi%rcs') // Expected Javascript

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function spliterNumber(a) {
    return [...`${a}`].map(n => parseInt(n))
}

console.log(spliterNumber(12345)) // Expected [1, 2, 3, 4, 5]

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function isEven(a) {
    return a % 2 > 0 ? false : true
}

console.log('IS EVEN: ', isEven(15)) // Expected false
console.log('IS EVEN: ', isEven(14)) // Expected true

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function equalElementParser(arr) {
    if (Array.isArray(arr)) {
        console.log(arr.length)
        return arr.every((x, i) => {
            const subarr = arr.filter((_y, j) => j !== i)
            return subarr.every(z => z === x)
        })
    }
}

console.log(equalElementParser([10, 10, 10])) // Expected true
console.log(equalElementParser(['10', 10, 10])) // Expected false


function sortObjects(arr) {
    if(Array.isArray(arr)){
        return arr.sort((x, y)=> {
            if( x.b < y.b ) return -1
            else return 1
        })
    }
}

console.log(sortObjects([{ a: 1, b: 8 }, { a: 6, b: 4 }])) // Expected [{ a: 6, b: 4 }, { a: 1, b: 8 }]