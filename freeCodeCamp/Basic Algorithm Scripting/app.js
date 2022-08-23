//1. Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit
}
convertCtoF(30)

//2. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('')
}
reverseString("hello")

//3. Factorialize a Number
function factorialize(num) {
    if (num === 0) return 1
    return num * factorialize(num - 1)
}

//4. Find the Longest Word in a String
function findLongestWordLength(str) {
    return str.split(' ')
        .sort((a, b) => b.length - a.length)[0]
        .length
}
findLongestWordLength("The quick brown fox jumped over the lazy dog")

//5. Return Largest Numbers in Arrays
function largestOfFour(mainArray) {
    return mainArray.map((subArray) => subArray
        .reduce((a, b) => a > b ? a : b))
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

//6. Confirm the Ending
function confirmEnding(str, target) {
    return str.substr(-target.length) === target
    //return str.split('').slice(-target.length).join('') === target
}
confirmEnding("Bastian", "n")

//7. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let res = ''
    for (let i = 0; i < num; i++) {
        res += str
    }
    return res
}
/* function repeatStringNumTimes(str, num) {
    if (num <= 0) return ''
    else if (num === 1) return str
    return str + repeatStringNumTimes(str, num - 1)
} */
repeatStringNumTimes("abc", 3)

//8.

//9.

//10.

//11.

//12.

//13.

//14.

//15.

//16. 
