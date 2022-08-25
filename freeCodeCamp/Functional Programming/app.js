//1. Learn About Functional Programming

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea'
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = []
    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    return teaCups
}
const tea4TeamFCC = getTea(40)


//2. Understand Functional Programming Terminology
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea'
// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea'
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea2 = (prepareTea, numOfCups) => {
    const teaCups = []

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    return teaCups
}
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27)
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13)
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

//3. Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs // We keep a record of the array inside the object
}
// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
}
// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab') // Let's open a new tab for now
    return this
}
// When you close a tab
Window.prototype.tabClose = function (index) {
    const tabsBeforeIndex = this.tabs.splice(0, index) // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1)
    // Get the tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // Join them together
    // Only change code above this line
    return this
}


