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
/*  function repeatStringNumTimes(str, num) {
    if (num <= 0) return ''
    else if (num === 1) return str
    return str + repeatStringNumTimes(str, num - 1)
} */
repeatStringNumTimes("abc", 3)

//8. Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str
}
truncateString("A-tisket a-tasket A green and yellow basket", 8)

//9. Finders Keepers
function findElement(arr, func) {
    return arr.find(func)
}
findElement([1, 2, 3, 4], num => num % 2 === 0)

//10. Boo who
function booWho(bool) {
    return typeof bool === 'boolean'
}
booWho(null)

//11. Title Case a Sentence
function titleCase(str) {
    return str.split(' ')
        .map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
        .join(' ')
}
titleCase("I'm a little tea pot")

//12. Slice and Splice
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}

//13. Falsy Bouncer
function bouncer(arr) {
    return arr.filter(el => !!el !== false) // !!el Convert Values to Boolean
}
bouncer([7, "ate", "", false, 9])

//14. Where do I Belong
function getIndexToIns(arr, num) {
    return arr.filter(el => el < num).length
}
getIndexToIns([40, 60], 50)

//15. Mutations
function mutation(arr) {
    let arr1 = arr[0].toLowerCase()
    let arr2 = arr[1].toLowerCase()
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) < 0) return false
    }
    return true
}
console.log(mutation(["hello", "hey"]))

//16. Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = []
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
    return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
