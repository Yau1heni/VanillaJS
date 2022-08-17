function unluckyDays(year) {
    let counter = 0
    for (let month = 0; month < 12; month++) {
        let d13 = new Date(year, month, 13)
        if (d13.getDay() === 5) counter++
    }
    return counter
}